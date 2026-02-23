app.get("/time", (req, res) => {
  res.send(new Date());
});