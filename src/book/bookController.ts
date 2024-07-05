import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";
import createHttpError from "http-errors";
import bookModal from "./bookModal";
import fs from "node:fs";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;

  const files = req.files as { [filename: string]: Express.Multer.File[] };

  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  // application/pdf
  const fileName = files.coverImage[0].filename;
  const filepath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  try {
    const uploadResult = await cloudinary.uploader.upload(filepath, {
      filename_override: fileName,
      folder: "book-covers",
      format: coverImageMimeType,
    });
    const bookFileName = files.file[0].filename;
    const bookFilePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookFileName
    );
    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );
    console.log("bookfileuploadResult", bookFileUploadResult);

    console.log("uplaod result", uploadResult);
    // @ts-ignore
    console.log("UserId", req.userId);

    const newBoook = await bookModal.create({
      title,
      genre,
      author: "6685617768839ecb88434a52",
      coverImage: uploadResult.secure_url,
      file: bookFileUploadResult.secure_url,
    });

    // delete temp files
    try {
      await fs.promises.unlink(filepath);
      await fs.promises.unlink(bookFilePath);
    } catch (err) {
      console.log(err, "unable to unlink files");
    }

    res.status(201).json({ id: newBoook._id });
  } catch (err) {
    console.log("error", err);
    return next(createHttpError(500, "Error while uploading the files"));
  }
};

export { createBook };
