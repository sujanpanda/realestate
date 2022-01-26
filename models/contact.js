const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
	email: String,
	message: String,
	name: String,
	subject: String,
	read: String,
	today: {type: Date, default: Date.now}
});

module.exports = mongoose.model('contact', userSchema, 'contacted');