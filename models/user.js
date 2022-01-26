const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	mobile: Number,
	city: String,
	offered: Array,
	shortlist: Array
});

module.exports = mongoose.model('user', userSchema, 'users_coll');