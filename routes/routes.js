const express = require('express');
const { Model } = require('sequelize');
const jwt=require('jsonwebtoken')
const verify=require('../verify')
const verifyad=require('../verifyad')
const router = express.Router();
const db = require('../model')
// const Post = db.posts;
const Parties=db.parties;
const Admin=db.admins
const Constituency=db.constituencies
const Candidate=db.candidates
const Aadhaar=db.aadhaar
const User=db.users
const Election=db.elections


router.post('/addParty',verifyad,async(req,res)=>{
    const newParty={
        name:req.body.name,
        abbreviation:req.body.abr,
        image:req.body.image
    }
    try{
        const result=await Parties.create(newParty)
        res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

router.post('/addAdmin',verifyad,async(req,res)=>{
    const newAdmin={
        username:req.body.username,
        password:req.body.password
    }
    try{
        const result=await Admin.create(newAdmin)
        await 
        res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})


router.post('/adminLogin',async(req,res)=>{
    
    try{

        const user= await Admin.findAll({where:{username:req.body.username}})
        if(!user){
            res.status(400).send("Admin does not exist")
        }
        else{
        if(user[0].password==req.body.password){
           // res.status(200).send("here...")
           //const token=jwt.sign({_id:user[0].username},'hsdfgjhdsfgj')
            //process.env.Token_Secret)
           res.header("auth-token","ad42").send("ad42")
        }
        else{
            res.status(400).send(`${process.env.Token_admin}`)
        }

    }
        //const result=await Admin.create(newAdmin)
        //res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})



router.get('/getAdmins',verifyad,async(req,res)=>{
    try{
        const result = await Admin.findAll();
              res.status(200).json(result)
    }
    catch(error){

    }
})


router.post('/addConstituency',async(req,res)=>{
 try{
    const r=await Constituency.findAll({where:{name:req.body.name ,state:req.body.state, district:req.body.district}})
    //console.log("here . . . .. . .")
    if(!r[0]){
        //console.log("here .........")
        const newConstituency={
             name:req.body.name,
             state:req.body.state,
             district:req.body.district
        }
      //  console.log("here .........")
        const result=await Constituency.create(newConstituency)
        res.status(200).json(result)
    
    // catch(error){
    //     res.status(400).send("Constituency already exists")
    // }
 }
else{
 res.status(400).send("Constituency already exists")}

}
 catch(error){
    res.status(400).json({message:error.message})
}
})


router.post('/addCandidate',verifyad,async(req,res)=>{
    try{
        const r=await Constituency.findAll({where:{name:req.body.constituency,district:req.body.district ,state:req.body.state}})
        console.log("here . . . . . .")
       if(r[0]){
           const candidate=req.body
           const r2=await Candidate.findAll({where:{constituency:req.body.constituency,district:req.body.district ,state:req.body.state,party:candidate.Party}})
        if(!r2[0]){
           
           var newCandidate={
            name:candidate.Name,
            image:candidate.Image,
            constituency:candidate.constituency,
            district:candidate.district,
            state:candidate.state,
            party:candidate.Party
           }
           const result=await Candidate.create(newCandidate)
          res.status(200).send(result)
        
        
        }
        else{
            res.status(400).send("Candidate already exist")
        }
   
           
       }
       else{
           res.status(400).send("Constituency does not exist")
       }
    }
    catch(error){
           res.status(400).send(error)
    }
   })



   router.post('/registerUser',async(req,res)=>{
    try{
        const user= await Aadhaar.findAll({where:{aadhaar_No:req.body.aadhaar_No}})
        const r=await User.findAll({where:{aadhaar_No:req.body.aadhaar_No}})
       if(user[0]){

        if(r[0]){
            res.status(400).send("ae")
            return
        }

          if(user[0].age<18){
            res.status(500).send("You are not elgible to vote.")
          }

           else{
           const newUser={
                first_name:user[0].first_name,
                last_name:user[0].last_name,
                aadhaar_No:user[0].aadhaar_No,
                image:user[0].image,
                state:user[0].state,
                district:user[0].district,
                age:user[0].age,
                constituency:req.body.constituency,
                password:req.body.password,
                election_type:"u"
           }
   
           const result=await User.create(newUser)
           res.status(200).json(result)

        }
       }
       else{
           res.status(400).send("User already exists")
       }
    }
    catch(error){
           res.status(400).send("w")
    }
   })

   router.post('/check',async(req,res)=>{
    try{
        const user= await Aadhaar.findAll({where:{aadhaar_No:req.body.aadhaar_No}})
       if(user[0]){
          
          if(user[0].age<18){
            res.status(500).send("You are not elgible to vote.")
          }
           else{
   
           const result=await Constituency.findAll({where:{district:user[0].district,state:user[0].state}})
           res.status(200).json(result)
        }
       }
       else{
           res.status(400).send("User already exists")
       }
    }
    catch(error){
           res.status(400).send(error)
    }
   })


   router.post('/addAadhaar',verifyad,async(req,res)=>{
    try{
        const r=req.body;
        for(var i=0;i<r.length;i++){
        const u= await Aadhaar.findAll({where:{aadhaar_No:r[i].aadhaar_No}})
       if(!u[0]){

           const newAadhaar={
                first_name:r[i].first_name,
                last_name:r[i].last_name,
                aadhaar_No:r[i].aadhaar_No,
                image:r[i].image,
                state:r[i].state,
                district:r[i].district,
                age:r[i].age,
           }
   
           const result=await Aadhaar.create(newAadhaar)
         // res.status(200).json(result)

        
       }
       else{
           res.status(400).send("User already exists")
       }

    }
   res.status(200).send("Users added")
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
   })


   router.post('/addElection',verifyad,async(req,res)=>{
    const newElection={ 
        title:req.body.title,
        election_type:req.body.type,
        election_date:req.body.eldate,
        registration_start:req.body.sdate,
        registration_ends:req.body.edate
    }
    try{
        const result=await Election.create(newElection)
        res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

router.get('/getElection',async(req,res)=>{
    
    try{
        const result=await Election.findAll()
        res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})


router.put('/vote/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const user= await User.findAll({where:{aadhaar_No:id}})
        if(user[0]){
        if(user[0].vote==null || user[0].vote==0){
        const r=await User.update({vote:1},{where:{aadhaar_No:id}})
        const candidate=await Candidate.findAll({where:{constituency:user[0].constituency,district:user[0].district,state:user[0].state,party:req.body.party}})
        var v=candidate[0].votes
        const r2=await Candidate.update({votes:v+1},{where:{constituency:user[0].constituency,district:user[0].district,state:user[0].state,party:req.body.party}})
        
        res.send("Sucessfully voted")}
        else{
            res.status(400).send("v")
        }

    }
    }catch(error){
        res.status(400).json({message : error.message})
    }
})





router.post('/login',async(req,res)=>{
    try{
        const user= await User.findAll({where:{aadhaar_No:req.body.aadhaar_No}})
         
        
       if(user[0]){

        if(user[0].vote==null){

        if(user[0].password==req.body.password){

           
          // const result=await Candidate.findAll({where:{constituency:user[0].constituency,district:user[0].district,state:user[0].state}})
          const result=await Parties.findAll();
          res.status(200).json(result)

        }
        else{
            res.status(400).send("ip")
        }
    }
    else{res.status(400).send("av")}
       }
       else{
           res.status(400).send("User does not exist")
       }

    

    }
    
    
    catch(error){
        res.status(400).json({message : error.message})
    }
   })


// router.post('/createPost',async(req,res)=>{

//     const newPost = {
//         title : req.body.title,
//         author : req.body.author,
//         content : req.body.content
//     }
//     try{
//         const result = await Post.create(newPost);
//         res.status(200).json(result)
//     }catch(error){
//         res.status(400).json({message : error.message})
//     }

// })
// router.get('/getAllPost',async(req,res)=>{

//     try{
//         const result = await Post.findAll();
//         res.status(200).json(result)
//     }catch(error){
//         res.status(500).json({message : error.message})
//     }

// })
// router.get('/getAllPost/:id',async(req,res)=>{

//     try{
//         const id = req.params.id;
//         const result = await Post.findByPk(id);
//         res.status(200).json(result)
//     }catch(error){
//         res.status(500).json({message : error.message})
//     }

// })


// router.patch('/editPost/:id',async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const newData = req.body;
//         const result = await Post.update(newData, {where : {id:id}});
//         res.send(result)
//     }catch(error){
//         res.status(400).json({message : error.message})
//     }
// })

// router.delete('/deletePost/:id',async(req,res)=>{
//     try{
//         const id = req.params.id
//         const result = await Post.destroy({where : {id : id}});
//         res.send(`Deleted post with id :${id}`)
//     }catch(error){
//         res.status(400).json({message : error.message})
//     }
// })

module.exports = router;