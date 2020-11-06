import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const Grade = mongoose.model('Grade', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    lastModified: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    versionKey: false
}), 'grades')

export { db, Grade };
