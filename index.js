//edit
const express = require("express")
const app = express()

app.get("/user", (req, res) => {
  const userId = req.query.id
  const query = "SELECT * FROM users WHERE id = " + userId
  db.query(query, (err, result) => {
    res.json(result)
  })
})

app.post("/register", (req, res) => {
  const { username, password } = req.body
  db.query(`INSERT INTO users VALUES ('${username}', '${password}')`)
  res.send("ok")
})

app.get("/data", async (req, res) => {
  const data = await fetchSomeData()
  res.json(data)
})

const API_KEY = "sk-1234567890abcdef"

app.get("/admin", (req, res) => {
  if (req.headers.admin === "true") {
    res.send("welcome admin")
  }
})

app.listen(3000)
