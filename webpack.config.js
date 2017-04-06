module.exports = {
    devtool: 'source-map',
    entry:   './app/app.jsx',
    // Places files from loaders (what gets rendered).
    output:  {
        path:     __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,        
        extensions: ['', '.js', '.jsx'],
        alias: {
            Main: './app/components/'
        }
    },
    module:  {
        loaders: [
            // Says to load any .js file from /src
            {
                test:    /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                    //include: path.resolve(__dirname, 'public'),
                loader:  'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    watch: true
};