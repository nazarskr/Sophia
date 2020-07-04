const Video = require('../models/video');

module.exports.getAll = async function (req, res) {
    try {
        await Video.find()
        .then(docs => {
            res.status(200).json(docs);
        });
    } catch(e) {
        console.log(e)
    }
}

module.exports.addVideo = async function (req, res) {
    const {title, url} = req.body;
    const video = new Video({
        title, url
    });
    try{
        await video.save();
        res.status(201).json({
            message: 'Відео успішно додано'
        })
    } catch(e) {
        console.log(e);
    }
}