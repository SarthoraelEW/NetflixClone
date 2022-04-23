const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            default: ""
        },
        profilePicture: {
            type: String,
            default: ""
        },
        language: {
            type: String,
            default: "français"
        },
        accessRestrictions: {
            type: String,
            default: ""
        },
        lock: {
            type: Boolean,
            default: false
        },
        history: {
            type: [{
                date: String,
                content: String
            }],
            default: []
        },
        evaluations: {
            type: [{
                content: String,
                evalution: String
            }],
            default: []
        },
        subtitleOptions: {
            type: {
                policy: String,
                shadow: String,
                textSize: String,
                textBackground: String,
                window: String
            },
            default: {
                policy: "Block",
                shadow: "Drop Shadow",
                textSize: "Medium",
                textBackground: "none",
                window: "none"
            }
        },
        watchOptions: {
            type: {
                autoPlayEpisode: Boolean,
                autoPlayPreview: Boolean,
                dataUsagePerScreen: String
            },
            default: {
                autoPlayEpisode: true,
                autoPlayPreview: true,
                dataUsagePerScreen: "Auto"
            }
        },
        watchingList: {
            type: [String],
            default: []
        },
        currentWatchng: {
            type: [{
                content: String,
                timer: String
            }],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;