4.6 关于git
在开始编写项目之前一定要检查自己的仓库是influ3nza/Undefined-SE3330-Project还是[自己的仓库名]/Undefined-SE3330-Project!!
查看方法为在终端上输入git remote -v 如果发现地址是influ3nza/Undefined-SE3330-Project那就赶紧重新clone 在clone界面不要选择influ3nza/Undefined-SE3330-Project而选择Undefined-SE3330-
-Project，如果没有后者就说明你没有fork，赶紧去竺天灏的仓库里fork一下

4.6 关于一些插件报错react-transition-group报错的说明：
在UIPrototype文件夹的终端中依次输入：
npm install react-transition-group@2.3.0 --save
npm install prop-types --save
npm install react-animated-router --save
如果说出现了报错，说明npm的版本可能有问题，可以通过输入npm -v查看版本，如果发现是8开头那多半下不了
通过输入 npm install -g npm@6.14.10 将npm降级为6.14.10再输入上述指令
如果下载完还报错，那就把app.tsx后缀改成app.js（这个问题马上会在仓库里修复，之后应该就不用再自己改了，如果现在出现了问题你们自己改一下）
