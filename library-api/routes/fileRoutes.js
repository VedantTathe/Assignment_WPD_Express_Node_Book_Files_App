const express = require('express');
const {
  uploadFile, getFiles, downloadFile, deleteFile
} = require('../controllers/filecontroller');

const upload = require('../middleware/uploadMiddlewares');
const auth = require('../middleware/authMIddleware.js');

const router = express.Router();
router.use(auth);

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getFiles);
router.get('/:id', downloadFile);
router.delete('/:id', deleteFile);

module.exports = router;
