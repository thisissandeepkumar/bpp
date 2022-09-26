const Express = require("express");
const app = Express();

app.use(Express.json());

app.use((req, res, next) => {
  console.log(req.path + "\n");
  next();
});

app.post("/webhook", async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: "OK",
  });
});

app.post("/webhook/search", async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: "OK",
  });
});
app.post("/webhook/on_search", async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: "OK",
  });
});

app.listen(process.env.PORT || 3456, () => {
  console.log(`Listening on port ${process.env.PORT || 3456}`);
});
