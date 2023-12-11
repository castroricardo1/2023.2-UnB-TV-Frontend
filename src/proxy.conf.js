const PROXY_CONFIG = [
    {
        context: [
            '/api',
        ],
        target: "https://unb-tv-backend-2be1ed3a0485.herokuapp.com/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG;