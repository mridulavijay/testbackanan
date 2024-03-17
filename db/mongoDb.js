const mongoose=require('mongoose');
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('DB is connected'); //Mongodb connection string
})
.catch(()=>{
    console.log('Connection Error!!!');
})