const {Schema, model} = require("mongoose")
const mongoose = require('../db/connection');

const reviewSchema = new Schema({
	date: String,
	rating: Number,
	Reviews: String,
});

const Review = model('Review', reviewSchema);
module.exports = Review;