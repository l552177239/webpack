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


