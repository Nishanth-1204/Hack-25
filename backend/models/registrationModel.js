const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Registration", registrationSchema);
