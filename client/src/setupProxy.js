const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "https://expense-management-system-backend-81rg.onrender.com",
      changeOrigin: true,
    })
  );
};
