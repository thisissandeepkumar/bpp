module.exports = {
  apps: [
    {
      name: "bpp",
      script: "./dist/app.js",
      watch: false,
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
