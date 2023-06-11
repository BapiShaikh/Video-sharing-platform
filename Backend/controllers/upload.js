const Upload = require("../models/upload");
const cloudinary = require("../lib/cloudinary");

exports.uploadVideo = (req, res) => {
    cloudinary.uploader.upload(req.file.path,
        {
            resource_type: "video",
            folder: "video",
        },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            const upload = new Upload({

                name: req.file.originalname,
                url: result.url,
                cloudinary_id: result.public_id,
                description: req.body.description,
                publishername: req.body.publishername,
                tagline: req.body.tagline,
                duration: req.body.duration,
                views: req.body.views
            });

            upload.save()
                .then(result => {
                    return res.status(200).send(result);
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send(err);
                });
        });
};