const express=require('express');
const router=express.Router();
const url= require("url");
const http= require("http");
const infoSchema=require('../models/product');
router.post('/add',function(req,res){
    console.log(req.body);
    const productData = new infoSchema(req.body);
    productData.save(function(err){
        if(err){
            console.log("error occured",err);
        }else{
           console.log("Data saved successfully");
           res.send({"result":"success"});
        }
    });
});

router.get("/getAll", function (req, res) {
    infoSchema.find({}, //if empty all will be shown orelse the mentioned name 
    { _id:0 , __v:0 ,data:0},   //to remove id and v
    function (err, data) {
        if (err) {
            console.log("error ocurred", err);
          } else {
            res.send(data);
        }
    });
});



module.exports=router;