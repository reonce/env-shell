# env-switch
一个切换本地开发环境的插件

使用它，会更方便的修改本地.env.development.local文件中的REACT_APP_API_HOST值

## 预先配置环境地址
使用此插件，首先需要在项目根目录下的 `.env.development.local` 中补充环境地址
测试环境是test，预发布环境是pre，生产环境是production。

示例：
~~~
REACT_APP_API_HOST=https://gw.newrank.cn
test=https://test.com
pre=https://pre.com
production=https://production.com
~~~

## 用法1：
在根目录下运行 `npx envsw`

> 直接使用npx会很方便，但是npx下载依赖(用完会清除)会带来延迟，因此推荐用法2
## 用法2
你也可以 在目录中添加此包，体验无延迟的切换脚本
* 根目录下运行 `npm install envsw --save-dev` 或者 `yarn add envsw --dev` 
* 根目录下运行 `npx envs` 即可体验快速切换环境
