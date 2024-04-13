const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails" }
);
// Method to get the PDF details of a

mongoose.model("PdfDetails", PdfDetailsSchema);