const multer  = require('multer')

global.nameIamge = ""

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {cb(null, 'images')},
    filename: (req, file, cb)=> {
      const fileFormat = file.mimetype.split('/');
      nameIamge = Date.now() + '_' + Math.round(Math.random() * 1E5) + '.' + fileFormat[1]
      cb(null, nameIamge)}
  })
  
const upload = multer({ storage: storage })

module.exports=upload