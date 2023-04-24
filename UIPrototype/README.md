# Undefined-SE3330-Project
This is the repo for SEP&amp;Practice project 2023.

这里写一些注意事项。虽然目前只有前端成员需要用到这个repo，以防万一以后所有成员都要用到，我把一些重要的信息记录下来。<br>
呃 github上的md语法怎么这么怪<br><br>

## 按照时间倒序排列，记得常来看一眼！！！

**23.4.24 更换了上传图片的方法, 请运行下面的install**<br><br>
'npm install react react-dropzone superagent --save'


**23.3.20 新增百度地图API的说明。**<br><br>
这次Commit修复了几个bug，包括Stats_EventList上下滚动时的滚轮范围，Stats界面切换查看内容时的筛选器伸缩动画。<br>

```diff
@@ 存在的bug： 点开日历的情况下直接切换底部路由会导致切回的时候日历仍然正常显示。 @@
```

接下来说一下百度地图API在使用前还需要进行的配置：<br>
首先`npm install`，随后在node_modules文件夹中找到react-scripts/config/webpack.config.js文件，在倒数第三行的地方插入如下语句：<br>
```
externals: {
    'BMap':'BMap',
 }
 ```
 随后就可以正常使用。<br><br>
 

**23.3.15 更新项目结构。**<br><br>

我搞定了，现在就像往常一样git pull也没事。所有文件也已经在UIPrototype文件夹中了。<br><br>

<del>**23.3.14 还原项目结构。**<del><br><br>

<del>多此一举。不过我会尝试寻找更好的办法的。<del><br><br>

**23.3.11 更新项目结构。**<br><br>

可以试着去git pull，我不清楚会发生什么。理想状况是除了node_modules以外的所有文件都被移进了UIPrototype文件夹里。如果不是请自己修改，但要注意（这点很重要）：不要在cLion中refractor修改位置，而是直接在文件夹内移动，否则有些地方会出错。<br><br>

**23.3.6 influ3nza: 吃一堑长一智。**<br><br>

虽说不是什么大问题，但是依旧写在这里。今天没看清楚就pull，把一些我写好的未提交的部分给覆盖掉了。这个问题前后端的成员都会遇到。由于不清楚其他成员的进度，即使是在pull的时候也请格外小心。但是最好每次开始编写之前都pull一下，这是最保险的。<br><br>

如果有冲突，体贴的clion是会让你自己选保留哪一个的！不要觉得看不懂就直接点apply，会火葬场的！！！左边是你本地做好的修改但是还没提交，右边是github上最新的版本。中间是clion觉得两个合并起来应该是什么样子，很多时候都是不对的。可以看到左->中间和右->中间都有一个叉和一个箭头，点箭头可以选择你想保留的版本。你也可以自己修改。修改完了应该点叉就行了。<br><br>

这波我的，自己没看清楚就点了apply，还好少的东西不多。给大家提个醒。<br><br>

**23.3.6 influ3nza: 更新依赖包。**<br><br>
## <font color=red>注意此行有修改</font>
请在控制台中运行
    `npm install --save-dev @types/react-router-dom`
从而正常编译运行。<br><br>

**23.3.3 influ3nza: 有关git pull的注意事项。**<br><br>

在每次写代码之前，请先git pull以更新最新的样式修改。如果显示untracked branch警告，点击下方蓝字，手动修改为origin-main。<br><br>

另，我修改了.gitignore文件，把一些文件在整个git版本控制中忽略了，应该没事（），这个文件可能不会在git pull的时候更新，我不清楚。我把修改方式写一下。<br><br>

以文本文档的方式打开.gitignore，在末尾加上三行：
    
    .name
    Project_Default.xml
    vcs.xml
    
即可。记得先修改再git pull。<br><br>

**23.3.2 influ3nza: 新增依赖包。**<br><br>

请在控制台中运行
    `npm install --save moment`
从而正常编译运行。<br><br>

**23.3.1 influ3nza: 项目结构说明。**<br><br>

为了保证项目结构清晰，我把文件进行划分。asset存放资源文件，例如各种jpg；pages存放各级页面，即路由可以达到的页面；tests存放暂时不需要用到的测试文件。<br><br>

后期应该还会有service文件夹，用于存放API的调用；以及utils文件夹，用于存放通用函数。<br><br>

参考了`www.jianshu.com/p/383a4a80c1d9`<br><br>

**23.3.1 influ3nza: 优化项目结构**<br><br>

**23.2.28 influ3nza: 如何将本仓库克隆到本地并且能正常运作。**<br><br>

如果使用Intellij IDEA，应该和clion是一样的毕竟是同一家公司。<br><br>

首先fork，在clion中选择new project from version control，粘贴URL。随后在clion底下的控制台中输入`npm install`。（在进行这一步前，为了安全起见，先确保自己电脑上有node.js）<br><br>

随后点击上方的add configuration，左上角加号，选择npm，右侧记得选择script为start，下方interpreter应该自己帮你选好node.exe了，如果没有自己选一下。<br><br>

随后在clion底下的控制台中分别输入
    
    `npm install --save antd-mobile-icons`
如果显示npm为不可识别的指令，则在存放这个clion project的文件夹里打开一个cmd再输入这两行。<br><br>

这个时候应该就不会报错了。如果报错就在群里说。<br><br>

接下来就可以运行看看效果了。<br><br>

剩下来就是讲一下我写了些啥，感觉口头讲更方便，这里就不写了。<br><br>

**23.2.28 influ3nza: 创建仓库----修改README.md**<br><br>

