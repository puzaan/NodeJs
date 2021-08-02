import mongoose from 'mongoose'
import bscrypt from 'bcryptjs'

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
});

// if creating new user this function helps to convert enter password into hass type password
UserSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bscrypt.genSalt(10);
    this.password = await bscrypt.hash(this.password, salt)
    next()
})

// this function is used to convert hass password into actual password and matc if password is correct or not
UserSchema.methods.matchPassword = async function(enteredPassword){
    return await bscrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('Users', UserSchema);
export default User