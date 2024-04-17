const User = require("../models/authUser")
const HandleError= require("../utilis/handleError")


const register = async (req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json({sucess: true, user})
    } catch (error) {
       const errors = HandleError(error)
       res.status(400).json(errors)
      
}

}
 const login = async (req,res)=>{
    // get user info  
    const {Email, password} = req.body
    if(!Email || !password){
       return res
        .status(200).json({sucess: false, msg:"please provide necessary infomation"})
    }
   
    try {
         
    //check if user has registered
    const userexist = await User.findOne({Email})
    if(!userexist){
    //     return res
    //    .status(400).json({sucess: false, msg:'user does not exist'})
    throw Error("email incorrect")
    }
    //password is correct
    const autheticated = await userexist.comparePassword(password); 
        if(!autheticated){
            // return res.status(400).json({sucess: false, msg:"Email or password is incorect"})
            throw Error("password incorrect")
    }
    // token Generator
    const token = userexist.generateToken();
        res.status(200).json({sucess: true, user: {Name:userexist.name, Email:userexist.Email}, token});
         
    } catch (error) {
        const errors = HandleError(error)
        res.status(400).json(errors) 
    } 
 } 

module.exports = {register,login}