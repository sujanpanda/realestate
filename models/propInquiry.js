const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: String,
	phone: Number,
	prop_id: String,
	read: String,
	today: {type: Date, default: Date.now}
});

module.exports = mongoose.model('propInquiry', userSchema, 'inquiry_list');