const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/portfolio',
        createProxyMiddleware({
            target: 'https://jjjed.github.io',
            changeOrigin: true,
            pathRewrite: {
                '^/portfolio': '/portfolio', // keep the /portfolio path
            },
            router: {
                // when running locally, redirect to GitHub Pages
                'localhost:3000': 'https://jjjed.github.io',
            },
        })
    );
};