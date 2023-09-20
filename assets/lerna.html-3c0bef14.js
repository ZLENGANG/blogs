import{_ as e,o as a,c as l,e as i}from"./app-c9761e37.js";const n={},r=i(`<h3 id="什么是lerna" tabindex="-1"><a class="header-anchor" href="#什么是lerna" aria-hidden="true">#</a> 什么是lerna</h3><p>Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目，是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。</p><p>它可以：</p><ul><li>统一的一套规范、构建标准；</li><li>对相互耦合较大、相互独立的 JS/Git 库进行管理；</li><li>统一的工作流和 Code Sharing（代码共享）。</li></ul><h3 id="为什么要使用lerna" tabindex="-1"><a class="header-anchor" href="#为什么要使用lerna" aria-hidden="true">#</a> 为什么要使用lerna</h3><h4 id="multirepo-vue-cli生成的项目" tabindex="-1"><a class="header-anchor" href="#multirepo-vue-cli生成的项目" aria-hidden="true">#</a> Multirepo（vue-cli生成的项目）</h4><p>传统的项目开发模式，比如 <code>create-react-app</code>、<code>vue-cli</code> 等框架模板脚手架生成的项目。</p><ul><li>优点： <ol><li>各模块管理自由度高；</li><li>各模块仓库体积一般不会太大；</li></ol></li><li>缺点： <ol><li>仓库分散不好找，分支管理混乱；</li><li>版本更新频繁，公共模块版本发生变化，需要对所有模块进行依赖更新；</li></ol></li></ul><h4 id="monorepo-lerna所使用的模式" tabindex="-1"><a class="header-anchor" href="#monorepo-lerna所使用的模式" aria-hidden="true">#</a> Monorepo（lerna所使用的模式）</h4><ul><li>优点： <ol><li>统一的规范、构建工具；</li><li>方便版本管理和依赖，模块之间的引用调试都变得非常方便；</li><li>Multirepo 的缺点就是它的优点。</li></ol></li><li>缺点： <ol><li>随着应用扩展，仓库体积将变大。</li></ol></li></ul><h3 id="lerna的使用" tabindex="-1"><a class="header-anchor" href="#lerna的使用" aria-hidden="true">#</a> lerna的使用</h3><ul><li>初始化项目</li></ul><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>mkdir ./new-lerna-workspace
cd ./new-lerna-workspace
npx lerna init 
# 最新版本为7.3.0，已废弃learn add、lerna bootstrap、lerna link 等命令
# 详见 https://lerna.nodejs.cn/docs/legacy-package-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建package</li></ul><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>lerna create [package-name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>给项目添加[远程/本地]依赖</li></ul><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 方法1
cd packages/*
npm install &lt;dependency&gt;

# 方法2
npm install &lt;dependency&gt; -w &lt;package1&gt; -w &lt;package2&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[r];function s(c,o){return a(),l("div",null,d)}const u=e(n,[["render",s],["__file","lerna.html.vue"]]);export{u as default};
