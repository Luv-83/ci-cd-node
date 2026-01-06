module.exports = {
    apps: [
      {
        name: "ci-cd-node",
        script: "index.js",
        instances: "max",
        exec_mode: "cluster",
  
        watch: false,
  
        env: {
          NODE_ENV: "production",
          PORT: 4000
        },
  
        restart_delay: 3000,
        max_restarts: 10
      }
    ]
  };
  