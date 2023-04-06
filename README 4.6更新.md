4.6 update by acoustic <br/>
关于git <br/>
在开始编写项目之前一定要检查自己的仓库是influ3nza/Undefined-SE3330-Project还是[自己的仓库名]/Undefined-SE3330-Project!!<br/>
查看方法为在终端上输入git remote -v 如果发现地址是influ3nza/Undefined-SE3330-Project那就赶紧重新clone 在clone界面不要选择influ3nza/Undefined-SE3330-Project而选择Undefined-SE3330--Project，如果没有后者就说明你没有fork，赶紧去竺天灏的仓库里fork一下<br/>

千万不要直接改源仓库，不然出问题了重新弄很麻烦很麻烦 我莎了你<br/>

如果要拉取新项目 先在git上进入自己的仓库界面，在sync fork里进行一下update branch再从intellij上拉取！<br/>

4.6 update by acoustic <br/>
关于一些插件报错react-transition-group报错的说明：<br/> 
在UIPrototype文件夹的终端中依次输入：<br/>
npm install react-transition-group@2.3.0 --save<br/>
npm install prop-types --save<br/>
npm install react-animated-router --save<br/>
如果说出现了报错，说明npm的版本可能有问题，可以通过输入npm -v查看版本，如果发现是8开头那多半下不了<br/>
通过输入 npm install -g npm@6.14.10 将npm降级为6.14.10再输入上述指令<br/>
如果下载完还报错，那就把app.tsx后缀改成app.js（这个问题马上会在仓库里修复，之后应该就不用再自己改了，如果现在出现了问题你们自己改一下）<br/>

4.6 update by acoustic <br/>
项目运行方法：<br/>
先从intellij里打开项目,file-open-Undefined-SE3330-Project/backend,配置一下启动方法：在run的小三角左边那个框选择edit configuration，选择spring boot，在build and run里选择java8，路径选择com.backendApplication就可以了<br/>
然后在UIprototype里正常打开前端就可以了（在UIPrototype目录里输npm start）<br/>
