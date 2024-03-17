const mongoose=require('mongoose');
const StudentSchema=mongoose.Schema({
    studentName:String,
    studentID:Number,
    studentAge:Number
})
const StudentData=mongoose.model('student',StudentSchema);
module.exports=StudentData;