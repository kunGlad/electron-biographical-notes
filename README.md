### 下载 electron 指定版本非常慢

1. 终端输入 `npm config set registry https://registry.npmmirror.com`
2. 查看镜像源 `npm config get registry`
3. 镜像源显示为 https://registry.npmmirror.com/则表明更换成功，已是淘宝最新镜像源
4. https://nodejs.cn/download/ 点击指定版本下载安装 node.js 同时会自动更新 npm 包的版本
5. 修改 npm 的配置文件 `npm config edit` 进入编辑页面
6. 在 registry= https://registry.npmmirror.com/ 上面一行 添加配置 `electron_mirror=https://cdn.npm.taobao.org/dist/electron/`
7. 重新执行安装命令 就可以了 `npm install electron@11.1.1`

### 用命令行删除 github 中的仓库

仅仅在本地 vscode 中删除了 但是 github 中还是存在的
适用于本地链接仓库输错了链接 或者 不想要这个链接到这个仓库的情况

1. 删除远程 `git remote rm 【仓库名称】 && rm -rf .git`
2. 删除本地 `rm -rf repository`
