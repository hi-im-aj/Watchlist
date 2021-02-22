import express, { Application } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "../../config/.env" });

const app: Application = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "client", "index.html")));
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
