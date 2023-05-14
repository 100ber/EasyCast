const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    const token =req.header("auth-token")
    if(!token){
        return res.status(401).send("Access Denied")
    }
    try{
//const verified=jwt.verify(token,process.env.Token_admin)
//req.user=verified;
if(token!="ad42"){
    res.status(400).send("Invalid Token")
}
next();
    }
    catch(error){
res.status(400).send("Invalid Token")
    }
}