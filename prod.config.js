module.exports = {
  apps: [
    {
      name: 'kabbik-promo',
      cwd: '/var/www/html/kabbik',
      "instances" : "1",
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',

      },
    },
  ],
};