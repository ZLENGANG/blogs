import{_ as s,r as a,o as d,c as r,a as e,b as n,d as u,e as i}from"./app-c9761e37.js";const v="/blogs/assets/gitlab-ci-auto-1-c04f46f8.png",c="/blogs/assets/gitlab-ci-auto-2-76819281.png",t={},o=i(`<h4 id="_1-执行机-executor" tabindex="-1"><a class="header-anchor" href="#_1-执行机-executor" aria-hidden="true">#</a> 1. 执行机（<strong>Executor</strong>）</h4><p>运行程序的机器</p><ul><li>安装nodejs</li></ul><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 1、下载nodejs
wget https://nodejs.org/dist/v14.17.4/node-v14.17.4-linux-x64.tar.xz
# 2、解压nodejs
tar -xvf node-v14.17.4-linux-x64.tar.xz
# 3、修改文件夹名字，在xftp内完成即可
# 4、建立软链接
$ ln -s /usr/local/nodejs/bin/node /usr/local/bin
$ ln -s /usr/local/nodejs/bin/npm /usr/local/bin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={href:"https://blog.csdn.net/weixin_43820866/article/details/103683322",target:"_blank",rel:"noopener noreferrer"},m=i(`<ul><li>安装git</li></ul><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>yum -y install git
git --version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装nginx，用于访问已打包好的前端项目</li></ul><p>详情：安装nginx</p><h4 id="_2-在平台上下载并安装gitlab-runner命令行" tabindex="-1"><a class="header-anchor" href="#_2-在平台上下载并安装gitlab-runner命令行" aria-hidden="true">#</a> <strong>2. 在平台上下载并安装Gitlab-runner命令行</strong></h4><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 安装
sudo curl -L --output /usr/local/bin/gitlab-runner &quot;https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64&quot;
# 配置权限
sudo chmod +x /usr/local/bin/gitlab-runner
# 初始化gitlab-runner
cd ~
gitlab-runner install
gitlab-runner start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-注册runner" tabindex="-1"><a class="header-anchor" href="#_3-注册runner" aria-hidden="true">#</a> 3. 注册Runner</h4><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 注册
sudo gitlab-runner register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><h4 id="_4-激活runner" tabindex="-1"><a class="header-anchor" href="#_4-激活runner" aria-hidden="true">#</a> 4. 激活Runner</h4><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code>sudo gitlab-runner verify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-gitlab-ci-yml文件配置" tabindex="-1"><a class="header-anchor" href="#_5-gitlab-ci-yml文件配置" aria-hidden="true">#</a> 5. .gitlab-ci.yml文件配置</h4><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>stages: # 分段
  - install
  - build
  - deploy
 
cache: # 缓存
  paths:
    - node_modules
    - dist
 
install-job:
  tags:
    - report-ui-tag-1118
  stage: install
  script:
    - npm -v
    - npm config set registry https://registry.npm.taobao.org 
    - npm install
  only:
    - main
 
build-job:
  tags:
    - report-ui-tag-1118
  stage: build
  script:
    - npm run build
  only:
    - main
 
deploy-job:
  tags:
    - report-ui-tag-1118
  stage: deploy
  script:
    - echo $USER
    - scp -r ./dist root@190.92.233.13:/home/nginx/html/report-ui
  only:
    - main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-解决卡在deploy问题" tabindex="-1"><a class="header-anchor" href="#_6-解决卡在deploy问题" aria-hidden="true">#</a> 6. 解决卡在deploy问题</h4><p>若出现如下问题：（原因：未进行免交互认证）</p><p><img src="`+c+`" alt=""></p><p>使用以下方法解决：</p><div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 查看gitlab-runner使用的用户
在.gitlab-ci.yml中打印echo $USER，输出gitlab-runner

# 服务器中切换为gitlab-runner账号
su - gitlab-runner

# 创建免交互密钥对
ssh-keygen

# 复制密钥对
ssh-copy-id root@190.92.233.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function g(h,p){const l=a("ExternalLinkIcon");return d(),r("div",null,[o,e("p",null,[n("参考链接："),e("a",b,[n("https://blog.csdn.net/weixin_43820866/article/details/103683322"),u(l)])]),m])}const x=s(t,[["render",g],["__file","gitlab-ciqianduanzidonghua.html.vue"]]);export{x as default};
