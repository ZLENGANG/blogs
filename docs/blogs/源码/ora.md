---
title: ora.js源码学习总结
date: 2023-09-20
categories:
  - 源码解读
---

## ora

### 知识点1：Class私有属性

```js
class Test {
  #name = 'sam';

  #getName() {
    return this.#name;
  }
}

const t = new Test();
console.log(t.#getName()); // error
console.log(t.#name); // error
```

### 知识点2：输入流缓冲

```js
import readline from 'node:readline';
import { BufferListStream } from 'bl';

#mutedStream = new BufferListStream();
this.#mutedStream.pipe(process.stdout);

this.#rl = readline.createInterface({
  input: process.stdin,
  output: this.#mutedStream,
});
```

### 知识点3：命令行光标隐藏和显示

```js
console.log('\u001B[?25l'); // 光标隐藏
console.log('\u001B[?25h'); // 光标显示

import cliCursor from 'cli-cursor';
cliCursor.show(stream);
cliCursor.hide(stream);
```

### 知识点4：命令行清屏操作

```js
this.#stream.cursorTo(0); // 光标移动到初始位置

for (let index = 0; index < this.#linesToClear; index++) {
  if (index > 0) {
    this.#stream.moveCursor(0, -1); // 如果清除行数大于1，光标上移一行
  }

  this.#stream.clearLine(1); // 清除一行
}
```

### 知识点5：打印成功字符

使用log-symbols获取成功字符
```js
import logSymbols from 'log-symbols';

console.log(logSymbols.success); // ✔
```