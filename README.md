# coa-archiver

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-archiver.svg?style=flat-square)](https://www.npmjs.org/package/coa-archiver)
[![npm downloads](https://img.shields.io/npm/dm/coa-archiver.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-archiver)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-archiver/pulls)

一个简单的压缩库。基于 [archiver](https://github.com/archiverjs/node-archiver) 做简单封装

## 特点

根据日常实际项目使用情况：

- 简化操作和 API 调用，满足绝大多数使用场景
- 统一了异步表现形式，返回 Promise
- 内置类型引用，无需额外查看文档，开箱即用，IDE 友好

## 快速开始

### 安装

```shell
yarn add coa-archiver
```

### 使用示例

```typescript
import { archiver } from 'coa-archiver'

// 将 src1.txt src2.txt 压缩到 dist.zip
await archiver.zip(['src1.txt', 'src2.txt'], 'dist.zip')

// 设置压缩级别为8，压缩级别默认为9，数字越高压缩率越大
await archiver.zip(['*.txt'], 'dist.zip', 8)

// 压缩文件后将源文件删除
await archiver.zip(['*.txt'], 'dist.zip', 8, true)
```
