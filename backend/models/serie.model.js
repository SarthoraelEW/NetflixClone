const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema(
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
        seasons: {
            type: [[String]],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const SerieModel = mongoose.model("serie", serieSchema);

module.exports = SerieModel;