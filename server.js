import express from "express";
import bodyParser from "body-parser";
import { handler } from "./client/build/handler.js";
const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(handler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
