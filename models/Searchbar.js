const mongoose = require("mongoose");

const SearchbarSchema = new mongoose.Schema({
    title:{type: String},
    name: {type: String},
    rating: {type: String},
    number: {type: String},
    
})

module.exports = mongoose.model("Searchbar", SearchbarSchema);