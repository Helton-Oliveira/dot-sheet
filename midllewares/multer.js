import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
         cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
         cb(null, {...JSON.parse(req.body.body)}.name + path.extname(file.originalname) )
    },

})

const upload = multer({storage: storage})

export default upload;



