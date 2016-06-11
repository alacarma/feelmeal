var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema = new schema({
    id: {type:Number, required:true, unique:true},
    name: String,
    image_url: String
}, {collection:'tags'});

var Action = mongoose.model('Action', actionSchema);

module.exports = Action;


var actionSchema1 = new schema({
    id: Number,
    name:String,
    img_url: String,
    size: String,
    price: String,
    logo: String,
    like: Boolean,
    tags: Array
}, {collection:'meals'});

var Action1 = mongoose.model('Action', actionSchema1);

module.exports = Action1;

var actionSchema2 = new schema({
    id: Number,
    name: String,
    meals: Array
}, {collection:'restaurant'});

var Action2 = mongoose.model('Action', actionSchema2);

module.exports = Action2;

var actionSchema3 = new schema({
    likes: Array
}, {collection:'users'});

var Action3 = mongoose.model('Action', actionSchema3);

module.exports = Action3;