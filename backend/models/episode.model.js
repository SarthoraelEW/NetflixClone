const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        serie: {
            type: String,
            required: true
        },
        video: {
            type: String,
            required: true
        },
        audios: {
            type: [{
                language: String,
                filePath: String
            }],
            required: true
        },
        subtitles: {
            type: [{
                language: String,
                filePath: String
            }],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const EpisodeModel = mongoose.model("episode", episodeSchema);

module.exports = EpisodeModel;