const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const propertySchema = new Schema({
	price: Number,
	description: String,
	details: String,
	city: String,
	pin: Number,
	place: String,
	state: String,
	status: String,
	A_C: String,
	bathrooms: String,
	fireplace: String,
	hse_for: String,
	heating: String,
	parking_space: String,
	parking_type: String,
	patio: String,
	playground: String,
	pool: String,
	year_build: Number,
	yt_url: String,
	property_area: String,
	bedrooms: String,
	g_map_url: String,
	want_to: String,
	stories: String,
	house_type: String,
	user_upload_status: String,
	img_detail: Array,
	user_id: Number,
	property_type: String,
	prop_id: Number
});

module.exports = mongoose.model('property', propertySchema, 'property_list');