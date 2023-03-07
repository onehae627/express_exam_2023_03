import express from "express";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "korad",
  password: "kor123414",
  database: "wise_saying",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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

app.get("/wise-sayings", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM wise_saying ORDER BY id DESC");

  res.json(rows);
});

app.get("/wise-sayings/:id", async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM wise_saying WhERE id = ?", [
    id,
  ]);

  res.json(rows[0]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});