const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');

cloudinary.config({
    cloud_name: "dkjtjneja",
    api_key: "362973385249453",
    api_secret: "Oh2Zd65oFDcpzCV_qBKwSJNAgbw"
});
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'listings',
        allowed_formats: ['jpeg', 'png', 'jpg']
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});


module.exports = { cloudinary, storage, upload };