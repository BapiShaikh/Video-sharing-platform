const cloudinary = require("cloudinary").v2;


// This is the DB of Prajwal 
// cloudinary.config({
//     cloud_name: "dgjnxpsg4",
//     api_key: "287243798661729",
//     api_secret: "5_Iei1BJIbsON1kBo02e4yWXnjE",
// });

// This is the DB of Ganesh
cloudinary.config({
    cloud_name: "dnkfru52i",
    api_key: "182195728633465",
    api_secret: "JuzM2R5o8YIlzlduV6pDXVvxiGo",
});



module.exports = cloudinary;
