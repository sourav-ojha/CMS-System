import mongoose from 'mongoose';

const teacherSchema =  mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  phno: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt : {
    type : Date,
    default : new Date()
}
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
