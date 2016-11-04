var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	studentname: {
		type: String,
	},
	datejoined: {
		type: Date,
	}
});

var DeckSchema = new Schema({
	name: {
		type: String,
	},
	cards: {
		type: String,
	},
	student: {
		type: String,
	}
});

var CardSchema = new Schema({
	front: {
		type: String,
	},
	back: {
		type: String,
	},
	date: {
		type: Date,
	}
});

var Student = mongoose.model('Student', StudentSchema);
var Deck = mongoose.model('Deck', DeckSchema);
var Cards = mongoose.model('Cards', CardSchema);
module.exports = Student, Deck, Cards;
