const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 35,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 15,
    },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;