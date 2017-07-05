### Webpack环境配置  

### 创建并进入一个文件夹wepback:

```
mkdir webpack && cd webpack
```

### 初始化项目：

npm init这会提示你关于项目的更多细节，并创建一个 package.json 文件。

使用 -y 标记表示你能接受 package.json 文件的一堆：

```
npm init -y
```

**注意**：项目名不要和包名相同，否则可能会出错误。

### 修改Webpack -> package.json项目名

因为项目名与包名相同，所以修改项目名
```
"name": "webpack-demo",
```

### 安装serve：

一个开发服务器，方便我们进行测试

```
npm i serve -g
```

需要启动服务器时，`serve`会自动寻找`index.html`，如果文件名为其他需输入文件名

```
serve [文件名]
```

### 安装webpack：

```
npm install webpack --save-dev
```

### 检测是否安装成功：

```
./node_modules/.bin/webpack --help
```

### 创建webpack.config.js

webpack的配置文件

```
const path = require('path');
//path是nodejs核心文件，用来解析路径
//require会把入口文件相关的所有文件都打包
module.exports = {
   entry: './src/index.js',
   //入口文件（打包相关文件）
   output: {
    //出口文件（打包到哪里）
    path: path.resolve(__dirname, "build"),
     //path：放在哪个文件夹
     //path.resolve：进行拼接
     //__dirname：命令行位置
    filename: "bundle.[hash:5].js",
    //文件名
  }
}
```
