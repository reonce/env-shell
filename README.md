# env-shell
一个切换本地开发环境的插件

使用它，会更方便的修改本地 **.env.development.local**文件中的值
> 默认会更改 REACT_APP_API_HOST的值，可配置
## 预先配置环境地址(必须)
使用此插件，首先需要在项目根目录下的 `.env.development.local` 中补充环境地址 </br>
测试环境是TEST_HOST，预发布环境是PRE_HOST，生产环境是PRO_HOST。</br>

示例：
~~~
TEST_HOST=https://test.com
PRE_HOST=https://pre.com
PRO_HOST=https://production.com
~~~
## 配置需要更改的环境变量名(非必须)
> 如果你忽略此项配置，**envsh**会默认更改`REACT_APP_API_HOST`的值

环境变量名键名为`ENVSH_HOST`，可配置多个键值，用英文逗号隔开<br/>
示例： 
~~~
ENVSH_HOST=VUE_APP_API_HOST,ANGULAR_APP_API_HOST
~~~
> PS：以上示例，切换环境时，会同时更改 `VUE_APP_API_HOST`和`ANGULAR_APP_API_HOST`的值
## 用法1：
在根目录下运行 `npx envsh`

> 直接使用npx会很方便，但是npx下载依赖(用完会清除)会带来延迟，因此推荐用法2
## 用法2
在目录中添加此包，体验无延迟的切换脚本
* 根目录下运行 `npm install envsh --save-dev` 或者 `yarn add envsh --dev` 
* 根目录下运行 `npx envs` 即可体验快速切换环境
