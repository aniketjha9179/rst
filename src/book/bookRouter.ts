import express from 'express'
import { createBook } from './bookController'
import multer from 'multer'
import path from 'node:path'



// file store local->cloudinary pe upload ->localfile delete
const upload=multer({
    dest:path.resolve(__dirname,"../../public/data/uploads"),
    limits:{fileSize:3e7} //30mb
})


const bookRouter = express.Router()
// routes
// api/books/
// middleware :we used this between route and router
bookRouter.post(
    '/',
    // middlewere
    upload.fields([
    {name:"coverImage",maxCount:1},
    {name:"file",maxCount:1}
]),
// handler  
 createBook)





export default bookRouter