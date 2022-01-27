const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
	table: String,
	ids: Array
});

module.exports = mongoose.model('innerPages', userSchema, 'inner_pages_stats');