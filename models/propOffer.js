const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
	userId: String,
	offerVal: Number,
	prop_id: String,
	name: String,
	mobile: Number,
	read: String,
	today: {type: Date, default: Date.now}
});

module.exports = mongoose.model('propOffer', userSchema, 'offered_list');