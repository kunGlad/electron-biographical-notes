# 整体创建流程

## 开始搭建平台 -- feat/electron_init

1. 创建文件夹 `mkdir electron-biographical-notes`
2. 切换到目录下 `cd electron-biographical-notes`
3. 创建 package.json 文件 并给定初始值 {}
4. 安装 electron 指定版本 `npm install electron@11.1.1`
5. 编写 package.json 文件

## 安装及配置 react, webpack 相关插件并启动 -- feat/react_init

1. babel-loader 安装指定版本 8.2.2
2. npm run start:render 编译成功后 会有输出文件 dist
3. node 版本大于 17 会出现以下报错`Error: error:0308010C:digital envelope routines::unsupported` 终端运行 `export NODE_OPTIONS=--openssl-legacy-provider` 就可以了

## 引入更多技术点 -- feat/introduce_more_technical_points

1. 安装指定版本 ts@4.2.4 插件，并将所有 js, jsx 文件改为 tsx 文件
2. 安装 eslint 相关插件
3. 安装 css modules

## 首页开发 -- feat/chapter-04-

1. 先有个 root 文件 -- feat/touter_page_init
2. 首页开发+路由跳转 -- feat/chapter-04-02
3. 路由合并到到一个入口文件下-代码优化 -- feat/chapter-04-03
4. utils 方法抽离 -- feat/chapter-04-04

### 如何写我们的 redux 与 file-实时性存储-- feat/chapter-05

1. 安装 redux 固定版本 `npm install redux@4.1.0 `以及 rc-redux-model 这个包 并初始化 model
2. 安装 react-redux 固定版本 `npm install reac
t-redux@7.2.4` 简化对 redux 的操作
3. 封装文件增删改查函数，并简单测试 在渲染进程中向主进程发送消息 读取 文件内容

### 自定义组件封装 -- feat/chapter-06

1. button, input, textarea, upload, modal, scrollbox
2. 定义 resume 相关 store 和 mock 数据

# 中途可能遇到的问题：

### 下载 electron 指定版本非常慢

1. 终端输入 `npm config set registry https://registry.npmmirror.com`
2. 查看镜像源 `npm config get registry`
3. 镜像源显示为 https://registry.npmmirror.com/，则表明更换成功已是淘宝最新镜像源
4. 修改 npm 的配置文件 `npm config edit` 进入编辑页面
5. 在 registry= https://registry.npmmirror.com/ 上面一行 添加配置 `electron_mirror=https://cdn.npm.taobao.org/dist/electron/`
6. 重新执行安装命令 就可以了 `npm install electron@11.1.1`

### 用命令行删除 github 中的仓库

仅仅在本地 vscode 中删除了 但是 github 中还是存在的
适用于本地链接仓库输错了链接 或者 不想要这个链接到这个仓库的情况

1. 删除远程 `git remote rm 【仓库名称】 && rm -rf .git`
2. 删除本地 `rm -rf repository`

### 提交报错

remote: error: File node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Electron Framework is 127.26 MB; this exceeds GitHub's file size limit of 100.00 MB
! [remote rejected] feat/electron_init -> feat/electron_init (pre-receive hook declined)

尝试用过新增分支提交的方法 失败
主要原因在于 node_modules 体积太大了
删除 node_modules 重新提交即可 或者在主目录下新增一个.gitignore 文件 里面写入 node_modules 即可， 此时 node_modules 会颜色会变成浅灰色

### 切换新分支 push 的时候提示连接仓库

`git push --set-upstream electron-biographical-notes 【feat/introduce_more_technical_points】`

### 启动报错

node:internal/crypto/hash:68
this[kHandle] = new \_Hash(algorithm, xofLen);
^

Error: error:0308010C:digital envelope routines::unsupported

出现这个问题是 node.js 的版本问题，因为 node.js V17 开始版本中发布的是 OpenSSL3.0, 而 OpenSSL3.0 对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响。故此以前的项目在使用 nodejs V17 以上版本后会报错。而 github 项目很多都是之前版本的 npm，所以运行时候会出现这个问题。

下载安装 16.19.0.pkg 版本的就行了 https://nodejs.org/download/release/v16.19.0/
