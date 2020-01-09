var webpack  = require('webpack')
var config = {}
const path = require('path')
function generateConfig(name){
    var uglify = name.indexOf('min') > 1;
    var config = {
        // entry 项目入口文件，通常是 入口 index.js
        entry:'./index.ts', // 入口js ，可以写成 数组型式，也可使是对象，或者嵌套
        output:{ // 编译输出结果位置
            path:path.resolve(__dirname,'dist'), // 输出文件路径，这里（这个版本）需要使用绝对路径，所以用 path组件帮助一下
            filename:name+'.js', // 输出文件名称，  [name].js 多个入口对应（入口要写成对象）  [chunkhash].js
            publicPath:"", // 输出解析文件的目录 ： url相对于HTML页面 web项目用这个，纯js项目不用
            sourceMapFilename:name + '.map',
            library:'promise-cache-controller', // 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到它
            libraryTarget:'umd', // 此配置的作用是控制 webpack 打包的内容是如何暴露的。请注意这个选项需要和output.library所绑定的值一起产生作用。
            // ⭐ 除了这些 ，还有一些高级配置
        },
        module:{ // webpack自身仅支持js json。在module里面添加 loaders 可以让webpack处理其他类送的内容，例如css
            rules:[ // 所有的模块规则放在这里： loader ， 解析器等
                { // 项目用 ts写的，所以要添加 ts-loader
                    test:/\.tsx?$/, // 匹配
                    use:[
                        {
                            loader:'ts-loader',
                            options:{ // ts-loader 需要指定 tsconfig.json 的位置
                                configFile:path.resolve(__dirname,'tsconfig.json')
                            }
                        }
                    ],
                    include:[
                        // 这里写要处理的文件的路径，也需要用 path.resolve 转换成绝对
                    ],
                    exclude:[
                        // 同上
                    ],

                }
            ]
        },
        node:{
            process:false
        },
        mode:'development',
        devtool:'source-map',
    };
    config.resolve = { // 原生情况下，webpack 不识别 .ts文件，导致 import 语句报错
        extensions:['.ts','.tsx'],
        modules:['lib']
    }
    config.plugins = [ // 上面提到loader可以用于支持webpack支持指定类型的文件，plugins可以被用来做更多事情
        // new webpack.LoaderOptionsPlugin({
        //     options:{
        //         resolve:{
        //             extensions:['','.ts','.tsx']
        //         }
        //     }
        // })
    ]
    return config;
}
// ['pcc'].forEach(function(key){
//     config[key] = generateConfig(key);
// })
module.exports = generateConfig('pcc');