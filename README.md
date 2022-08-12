# env-switch
一个切换本地开发环境的插件

使用它，会更方便的本地.env.development.local文件中的REACT_APP_API_HOST值

使用此插件，首先需要在项目根目录下的 `.env.development.local` 中补充环境地址
测试环境是test，预发布环境是pre，生产环境是production。

示例：
~~~
REACT_APP_API_HOST=https://gw.newrank.cn
test=https://test.com
pre=https://pre.com
production=https://production.com
~~~

然后在根目录下运行 `npx envsw`
直接使用npx会很方便，但是下载依赖会带来延迟

你也可以 在目录中添加此包，体验无延迟的切换脚本
* 根目录下运行 `npm install --save --dev envsw` 或者 `yarn add -D envsw`
