const UploadedFile = require('../models/UploadedFile');
const fs = require('fs');

exports.uploadFile = async (req, res) => {
  const file = new UploadedFile(req.file);
  await file.save();
  res.status(201).json(file);
};

exports.getFiles = async (req, res) => {
  const files = await UploadedFile.find();
  res.json(files);
};

exports.downloadFile = async (req, res) => {
  const file = await UploadedFile.findById(req.params.id);
  res.download(file.path, file.filename);
};

exports.deleteFile = async (req, res) => {
  const file = await UploadedFile.findByIdAndDelete(req.params.id);
  fs.unlinkSync(file.path);
  res.json({ message: 'File deleted' });
};
