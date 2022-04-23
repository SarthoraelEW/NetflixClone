const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        distribution: {
            type: [String],
            required: true
        },
        screenwriters: {
            type: [String],
            required: true
        },
        genres: {
            type: [String],
            required: true
        },
        categories: {
            type: [String],
            required: true
        },
        bannery: {
            type: String,
            required: true
        },
        ageCategory: {
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

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;