module.exports = {
  apps: [
    {
      name: 'ai-assistant',
      script: 'npm',
      args: 'run start',
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
