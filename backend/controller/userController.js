
import AsyncHandel from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js';


export const authUser = AsyncHandel(async(req, res) =>{
    // parse data from req body
    const {email, password} = req.body;

    // find user if it exist in database 

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        console.log('user exist in database')
       return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401);
        throw new Error('invalid Email or Password')
    }
    
})

//des get User Profile
// rout get/api/user/profile
// access private
export const getUserProfile = AsyncHandel(async(req, res) => {
    const user = User.findById(req.user._id);
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          });
    }else{
        res.status(404);
        throw new Error('User belong to tis token is no longer exist')
    }
})

export const reisterUser = AsyncHandel(async(req, res)=> {
    const {name, email, password} = req.body;
    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error('user already exist')
    }
const user = await User.create({
    name,
    email,
    password
});
if(user){
    res.status(201);
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user.id)
    })
}else{
    res.status(400)
    throw new Error('invalid user data')
}
})