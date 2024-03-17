const express=require('express');
const router=express.Router();
const Studentmodel=require('../model/StudentData');
router.use(express.json()); //Interpreting data as json
router.use(express.urlencoded({extended:true}));
//GET DATA
router.get('/',async (req,res)=>{
 try {
    const data= await Studentmodel.find();
    res.status(200).send(data);
 } catch (error) {
    res.status(404).send('No data found');
 }
})
//POST DATA
router.post('/add',async (req,res)=>{
    try {
        var item=req.body;
        const data=new Studentmodel(item);
        const saveddata=await data.save();
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
    }
   
})



module.exports=router;