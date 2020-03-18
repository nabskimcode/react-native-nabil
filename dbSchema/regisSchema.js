let mongoose = require('mongoose');

let registerSchema = new mongoose.Schema({
  title: String,
  fname: String,
  lname: String,
  gender: String,
  birthDate: Date,
  eMail: String,
  phoneNum: Number,
  loanAmount: Number,
  loanTenure: String,
  loanPurpose: String,
  weddDate: Date,
  checkBox: Boolean,
});

module.exports = mongoose.modal('Register', registerSchema);
