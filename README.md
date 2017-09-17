# Airing 的算法实验室

使用 TypeScript 编写的一些有趣的算法实验。

线上地址：[http://lib.ursb.me](http://lib.ursb.me)

## 安装

```
git clone https://github.com/airingursb/algorithm-lab.git
cd algorithm-lab
npm install
node app/bin/www.js --harmony
```

Then open Browser at 'http://localhost:9009'

## 修改算法代码

### Step 1. 编译 TypeScript

```
tsc
```

### Step 2. 打包 js 文件

需要先安装 browserify

```
npm install -g browserify
```

再进入对应的算法输出目录，打包代码

```
browserify main.js -o bundle.js
```

## Screenshots

![](http://airing.ursb.me/image/cover/lib-sreenshots.png)
