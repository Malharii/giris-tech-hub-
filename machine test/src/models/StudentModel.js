import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    student_id: {
      type: String,
      required: [true, "student_id is required"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "age is required"],
      min: [1, "age must be at least 1"],
      max: [150, "age seems incorrect"],
    },
    course: {
      type: String,
      required: [true, "course is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: "Invalid email",
      },
    },
    city: {
      type: String,
      required: [true, "city is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);
export default Student;
