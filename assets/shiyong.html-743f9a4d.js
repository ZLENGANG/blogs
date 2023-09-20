import{_ as e,o as a,c as i,e as s}from"./app-3e796566.js";const n={},d=s(`<h3 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h3><p>1、初始化项目</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、添加bin节点zl-test-cli命令</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>&quot;bin&quot;: {
    &quot;zl-test-cli&quot;: &quot;bin/index.js&quot;
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、编写bin/index.js代码</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>#!/usr/bin/env node
console.log(&#39;这是zl-test-cli脚手架&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、链接到全局</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>npm link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、使用zl-test-cli</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>zl-test-cli
输出‘这是zl-test-cli脚手架’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入本地的包" tabindex="-1"><a class="header-anchor" href="#引入本地的包" aria-hidden="true">#</a> 引入本地的包</h3><p>1、同基础使用，创建zl-test-cli-lib命令</p><p>2、在需要引入zl-test-cli-lib包的项目里面，使用一下命令</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>npm link zl-test-cli-lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、使用</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const zlTestCliLib = require(&#39;zl-test-cli-lib&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="相关npm命令行" tabindex="-1"><a class="header-anchor" href="#相关npm命令行" aria-hidden="true">#</a> 相关npm命令行</h3><p>1、删除全局npm包</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>npm rm --global npm-package

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[d];function r(c,t){return a(),i("div",null,l)}const v=e(n,[["render",r],["__file","shiyong.html.vue"]]);export{v as default};
