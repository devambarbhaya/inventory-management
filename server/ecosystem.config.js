module.exports = {
  apps: [
    {
      name: "inventory-management",
      script: "bun",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        ENV_VAR1: "environment-variable",
      },
    },
  ],
};
