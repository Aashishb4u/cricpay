import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import { Resend } from "resend";
import fs from "fs";
import handlebars from "handlebars";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Load and compile the email template
const emailTemplateSource = fs.readFileSync("./templates/emailTemplate.html", "utf8");
const template = handlebars.compile(emailTemplateSource);

// Validation Rules
const validateEmailRequest = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("company").trim().notEmpty().withMessage("Company name is required"),
  body("phone")
    .trim()
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be 10 digits"),
  body("description").trim().notEmpty().withMessage("Description is required"),
];


// Default route to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Email Sending Endpoint with Dynamic Template
app.post("/join-event", validateEmailRequest, async (req, res) => {
  console.log("🔥 API HIT: /join-event");
  console.log("Request Body:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, company, phone, description } = req.body;

    // Replace placeholders in HTML template
    const htmlContent = template({ firstName, lastName, email, company, phone, description });
   

    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: htmlContent, // Send as HTML instead of plain text
    });


    res.json({ success: true, message: "Email sent successfully", response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
