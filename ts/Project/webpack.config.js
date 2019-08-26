module.exports = {
    entry: './src/app.ts',
    output: {
        path:'./dist',
        filename:'app.bundle.js',
    },
    module: {
        loaders: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}