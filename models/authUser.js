const mongoose =require("mongoose")
const Schema =mongoose.Schema
const {isEmail} = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const userSchema = new Schema({ 
    name:{
        type: String,
        required:  [true, "please provide a name"],
    },
    Email:{
        type: String,
        required: [true, "please provide an  Email"],
        unique: true,
        validate : [isEmail, "please provide a valid Email"],

    },
    password :{ 
        type: String,
        required :[true, "please provide a valid password"],
        minlength: [7, "password must be above 7 character"],
    }, 
 
}, {timestamps: true});

userSchema.pre('save', async function (next){
 const salt = await bcrypt.genSalt();
 this.password = await bcrypt.hash(this.password, salt);
 next();
});
//password autheticate
userSchema.methods.comparePassword = async function (userpassword){
    const isCorrect = await bcrypt.compare(userpassword, this.password)
    return isCorrect;
};
// generate token
userSchema.methods.generateToken = function () {
    return jwt.sign({userId: this._id, name: this.name}, process.env.jwtKey, {expiresIn: "1d"} );
};

module.exports = mongoose.model('User', userSchema)