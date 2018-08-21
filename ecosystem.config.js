module.exports = {
  apps: [
    {
      name: 'jerry-serv',
      script: 'build/main.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        BACKEND_URL: 'https://dev.yncyzj.com',
        COOKIE_DOMAIN: '.yncyzj.com'
      },
      env_test: {
        NODE_ENV: 'test',
        BACKEND_URL: 'https://test.yncyzj.com',
        COOKIE_DOMAIN: '.yncyzj.com'
      },
      env_production: {
        NODE_ENV: 'production',
        BACKEND_URL: 'https://pro.yncyzj.com',
        COOKIE_DOMAIN: '.yncyzj.com'
      }
    }
  ]
}
