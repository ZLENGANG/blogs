---
title: lerna.js 使用
date: 2023-09-20
categories:
  - 前端工程化
tags:
  - lerna
  - 前端工程化
---
### 什么是lerna

Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目，是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。

它可以：

- 统一的一套规范、构建标准；
- 对相互耦合较大、相互独立的 JS/Git 库进行管理；
- 统一的工作流和 Code Sharing（代码共享）。

### 为什么要使用lerna

#### Multirepo（vue-cli生成的项目）

传统的项目开发模式，比如 `create-react-app`、`vue-cli` 等框架模板脚手架生成的项目。

- 优点：
    1. 各模块管理自由度高；
    2. 各模块仓库体积一般不会太大；
- 缺点：
    1. 仓库分散不好找，分支管理混乱；
    2. 版本更新频繁，公共模块版本发生变化，需要对所有模块进行依赖更新；

#### Monorepo（lerna所使用的模式）

- 优点：
    1. 统一的规范、构建工具；
    2. 方便版本管理和依赖，模块之间的引用调试都变得非常方便；
    3. Multirepo 的缺点就是它的优点。
- 缺点：
    1. 随着应用扩展，仓库体积将变大。

### lerna的使用

- 初始化项目

```Bash
mkdir ./new-lerna-workspace
cd ./new-lerna-workspace
npx lerna init 
# 最新版本为7.3.0，已废弃learn add、lerna bootstrap、lerna link 等命令
# 详见 https://lerna.nodejs.cn/docs/legacy-package-management
```
- 创建package

```Bash
lerna create [package-name]
```
- 给项目添加[远程/本地]依赖

```Bash
# 方法1
cd packages/*
npm install <dependency>

# 方法2
npm install <dependency> -w <package1> -w <package2>

```