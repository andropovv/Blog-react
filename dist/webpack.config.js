import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
export default (function (env) {
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };
    var mode = env.mode || 'development';
    var isDev = mode == 'development';
    var PORT = env.port || 3000;
    console.log(mode);
    var config = buildWebpackConfig({
        paths: paths,
        mode: mode,
        isDev: isDev,
        port: PORT,
    });
    return config;
});
