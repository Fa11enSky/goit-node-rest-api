const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../middlewares");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

// Мідвар на схему по події
contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
