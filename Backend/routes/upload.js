const router = require("express").Router();
const Upload = require("../models/upload")
const uploadController = require("../controllers/upload");

const storage = require("../lib/multer");

// this is the post method will post the video to DB
router.post("/uploadVideo", storage.single("file"), uploadController.uploadVideo);


// After login User will get his own videos , depending on the < PublisherName>
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
});

// this is for the Search bar , depend on the name of the video <Name of the video // search for that >
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
});


// This is to load the data depend on the <viewMore> OR <viewLess>
router.get("/viewVideos/:limit", (req, res) => {
    let count = Number(req.params.limit);
    // if (count !== 4) {
    //     count = 15
    // };
    console.log(req.params.limit)
    let data = {}

    Upload.find(data).limit(count).then(postdata => {
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
});

module.exports = router;