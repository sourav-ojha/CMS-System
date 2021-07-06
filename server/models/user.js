import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  phno: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  // marks:[{String}],
  // attendence:[{String}],
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  subject: [String],
  course: String,
  rollno: Number,
});

const User = mongoose.model("User", userSchema);

export default User;

// {
//   "firstname": "teacher",
//   "lastname": "1",
//   "email" : "teacher@gmail.com",
//   "role": "teacher",
//   "password" : "1234567",
//   "phno" : 1478523690

// }
