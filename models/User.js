var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:  {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: String,
    pwd: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    
});
let UserModel =mongoose.model('',);
exports.USER_MODEL = UserModel ;