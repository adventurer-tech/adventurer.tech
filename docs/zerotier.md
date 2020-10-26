# 虚拟局域网

为了方便大家电脑互相访问，可以安装虚拟局域网。

以下教程只针对 Mac OSX 系统

## 安装

```sh
brew cask install zerotier-one

zerotier-cli join 6ab565387a2565a5

# 然后联系邵辰 分配ip,分配好了执行:

zerotier-cli orbit 635fee4eb6 635fee4eb6


# 重启 zerotier-one （托盘中的gui）

# 尝试:

ping 10.242.0.4

# ping 通说明网络连接成功

```


## 退出网络

zerotier 系统托盘上对应 network 勾掉，就离开这个虚拟局域网了

## 错误处理

如果万一退出网络后还不能上网，可以关闭 wifi 再重开就好了

## 使用场景

产品方便 rereview 你正在开发的界面效果

- 开发本地 yarn start，然后把你的虚拟 ip 告诉产品
- 产品通过 `http://10.242.0.x:3000` 访问
