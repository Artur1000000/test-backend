import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.post("/api/auth", async(req, res)=>{
    let a = req.body;
    res.status(200).json({...a})
})

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port:${process.env.PORT? process.env.PORT: 4444}`);
});
