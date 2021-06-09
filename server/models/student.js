import mongoose from 'mongoose';

const studentSchema =  mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    phno: {
        type: Number,
        required: true,
        unique: true
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
    course: String,
    createdAt : {
        type : Date,
        default : new Date()
    }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;