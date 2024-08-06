import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { sendEmail } from "./controller/controller.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running and accessible");
});
app.post("/send-email", sendEmail);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

app.get("/send-email", (req, res) => {
  res.send("Send Email POST endpoint");
});
