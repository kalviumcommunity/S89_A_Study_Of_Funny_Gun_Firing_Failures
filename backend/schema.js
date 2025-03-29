const mongoose = require('mongoose');

const funnyGunFailureSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    failureType: {
        type: String,
        required: true
    },
    remainder: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const FunnyGunFailure = mongoose.model('FunnyGunFailure', funnyGunFailureSchema);

module.exports = FunnyGunFailure;
