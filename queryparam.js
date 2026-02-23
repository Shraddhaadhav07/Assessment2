app.get("/search", (req, res) => {
  const name = req.query.name;
  const result = users.filter(u => u.name === name);
  res.json(result);
});