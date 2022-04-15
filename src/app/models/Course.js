const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
