import { Schema, model } from "mongoose";

const registrationSchema = new Schema({
  teamName: {
    type: String,
    required: [true, "Provide a team name"],
  },
  uid: {
    type: String,
    required: [true, "Provide UID"],
    unique: true,
  },
  teamMembers: {
    type: [
      {
        name: {
          type: String,
          required: [true, "Provide name"],
        },
        email: {
          type: String,
          required: [true, "Provide email"],
          unique: true,
        },
        college: {
          type: String,
          required: [true, "Provide college"],
        },
        department: {
          type: String,
          required: [true, "Provide department"],
        },
        yearOfStudy: {
          type: String,
          required: [true, "Provide year of study"],
        },
        phoneNumber: {
          type: String,
          required: [true, "Provide phone number"],
          unique: true,
          maxLength: 10,
        },
        attendance: {
          type: Boolean,
          default: false,
        },
      },
    ],
    required: [true, "Provide team members"],
  },
  abstract: {
    type: String,
    required: [true, "Provide abstract PDF"],
  },
});

export default model("Registration", registrationSchema);
