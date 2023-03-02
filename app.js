import express from "express";

const app = express();
const port = 3000;

const wiseSayings = [
  {
    content : "작별 인사",
    author: "김영하",
  },
  {
    content : "어서 오세요 휴남동 서점입니다.",
    author: "황보름",
  }
];

app.get('/wise-sayings', (req, res) => {
  res.json(wiseSayings);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});