# Airing 的算法实验室

使用 TypeScript 编写的一些有趣的算法实验。

线上地址：[http://lib.ursb.me](http://lib.ursb.me)

## 目录

1. 百人分钱问题
    1. [百人分钱 | 不许负债](http://lib.ursb.me/1-1)
    2. [百人分钱 | 允许负债](http://lib.ursb.me/1-2)
2. 蒙特卡洛算法
    1. [求解圆周率](http://lib.ursb.me/2-1)
3. 排序算法
    1. [选择排序 Selection Sort](http://lib.ursb.me/3-1)
    2. [插入排序 Insertion Sort](http://lib.ursb.me/3-2)
    3. [插入排序 | 近乎有序 Insertion Sort with Nearly Ordered Array](http://lib.ursb.me/3-3)
    4. [归并排序 | 自顶向下 Merge Sort TD](http://lib.ursb.me/3-4)
    5. [归并排序 | 自底向上 Merge Sort BD](http://lib.ursb.me/3-5)
    6. [快速排序 Quick Sort](http://lib.ursb.me/3-6)
    7. [快速排序 | 近乎有序 Quick Sort with Nearly Ordered Array](http://lib.ursb.me/3-7)
    8. [快速排序 | 随机定点 Quick Sort with Random Pivot](http://lib.ursb.me/3-8)
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
