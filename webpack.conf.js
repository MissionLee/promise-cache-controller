var webpack  = require('webpack')
var config = {}
const path = require('path')
function generateConfig(name){
    var uglify = name.indexOf('min') > 1;
    var config = {
        // entry 项目入口文件，通常是 入口 index.js
        entry:'./index.ts',
        output:{ // 编译输出结果位置
            path:path.resolve(__dirname,'dist'), // 输出文件路径
            filename:name+'.js', // 输出文件名称
            sourceMapFilename:name + '.map',
            library:'promise-cache-controller', // 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到它
            libraryTarget:'umd', // 此配置的作用是控制 webpack 打包的内容是如何暴露的。请注意这个选项需要和output.library所绑定的值一起产生作用。
        },
        module:{ // webpack自身仅支持js json。在module里面添加 loaders 可以让webpack处理其他类送的内容，例如css
            rules:[
                { // 项目用 ts写的，所以要添加 ts-loader
                    test:/\.ts?$/,
                    use:[
                        {
                            loader:'ts-loader',
                            options:{ // ts-loader 需要指定 tsconfig.json 的位置
                                configFile:path.resolve(__dirname,'tsconfig.json')
                            }
                        }
                    ]
                }
            ]
        },
        node:{
            process:false
        },
        mode:'development',
        devtool:'source-map',
    };
    // config.plugins = [ // 上面提到loader可以用于支持webpack支持指定类型的文件，plugins可以被用来做更多事情
    //
    // ]
    return config;
}
// ['pcc'].forEach(function(key){
//     config[key] = generateConfig(key);
// })
module.exports = generateConfig('pcc');