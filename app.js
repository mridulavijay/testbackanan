const express=require('express')
const morgan=require('morgan');
const dotenv=require('dotenv')
const app=new express();

const studentRoutes=require('./routes/studentRoutes');
app.use(morgan('dev'));
dotenv.config();
const PORT=process.env.PORT;
const db=require('./db/mongoDb');
app.use('/students',studentRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})