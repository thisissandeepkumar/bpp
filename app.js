const Express = require("express");
const app = Express();
const axios = require("axios").default;

app.use(Express.json());

app.use((req, res, next) => {
  console.log(req.path + "\n");
  next();
});

app.post("/webhook", async (req, res, next) => {
  console.log(req.body);
  axios.post("http://0.0.0.0:5084/on_search", {
    context: {
      ...req.body.context,
    },
    message: {
      catalog: {
        "bpp/descriptor": {
          name: "Apple",
          code: "NH-323NUI9Ni8",
          symbol: "cdsun",
        },
      },
    },
  });
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
