let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    code: {

        unique:true,
        type:String

    },
    email : {
        unique : true,
        type : String
    },
    nome : String,

});

let User = mongoose.model('User',UserSchema);

module.exports = User;

