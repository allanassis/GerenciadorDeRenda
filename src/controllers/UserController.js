let mongoose = require('mongoose');

let UserModel = require('../models/UserModel');



module.exports = {

    save : function(user){

        UserModel.create()
    }
}