<!--
 * @Author: sharebravery
 * @Date: 2021-08-25 10:37:57
 * @LastEditors: sharebravery
 * @LastEditTime: 2021-09-11 07:56:26
 * @Weather: ~(～￣▽￣)～
-->
# light-for-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve OR click run.bat
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 命名规范：

- `index.js` 或者 `index.vue`，统一使用小写字母开头的**(`kebab-case`)**命名规范

- **属于`组件`或`类`的**，统一使用大写字母开头的**(`PascalCase`)**命名规范

- 其他非`组件`或`类`的，统一使用小写字母开头的**(`kebab-case`)**命名规范

- **组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**


### method 方法命名命名规范：

- 驼峰式命名，统一使用动词或者动词+名词形式

- 请求数据方法，以 data 结尾

### Style：
**CSS 属性书写顺序：先决定定位宽高显示大小，再做局部细节修饰**！推荐顺序：定位属性(或显示属性，display)->宽高属性->边距属性(margin, padding)->字体，背景，颜色等，修饰属性的定义。


### 注释规范：

1. 注释块必须以`/**（至少两个星号）开头**/`
2. 单行注释使用//
