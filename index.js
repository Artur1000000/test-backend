import express from "express-serve-static-core";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port:${PORT}`);
});
