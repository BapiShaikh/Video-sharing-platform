const router = require("express").Router();
const Upload = require("../models/upload")
const uploadController = require("../controllers/upload");

const storage = require("../lib/multer");

router.post("/uploadVideo", storage.single("file"), uploadController.uploadVideo);

router.get("/myVideos/:name", (req, res) => {
    const name = req.params.name;
    console.log(name)
    let data = {}

    if (name) {
        data = {
            publishername: name
        }
    }
    Upload.find(data).then(postdata => {
        res.status(200).json({
            message: "fetched data Successfull",
            data: postdata
        })
    }).catch((error) => {
        res.status(500).json({
            message: "Failed to save",
            data: error
        })
    })
})
router.get("/getVideos/:name", (req, res) => {
    const name = req.params.name;
    console.log(name)
    let data = {}

    if (name) {
        data = {
            name: name
        }
    }
    Upload.find(data).then(postdata => {
        res.status(200).json({
            message: "fetched data Successfull",
            data: postdata
        })
    }).catch((error) => {
        res.status(500).json({
            message: "Failed to save",
            data: error
        })
    })
})

module.exports = router;