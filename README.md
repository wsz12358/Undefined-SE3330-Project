# Undefined-SE3330-Project
This is the repo for SEP&amp;Practice project 2023.

Update logs shall be recorded in another doc, I'll figure it out later. <br>
md文件用的是markdown语言，说不定之后放弃了直接用txt写。 <br><br>

这里写一些注意事项。虽然目前只有前端成员需要用到这个repo，以防万一以后所有成员都要用到，我把一些重要的信息记录下来。<br><br>

**23.2.28 influ3nza: 创建仓库----修改README.md**<br><br>

**23.2.28 influ3nza: 如何将本仓库克隆到本地并且能正常运作。**<br><br>

如果使用Intellij IDEA，应该和clion是一样的毕竟是同一家公司。<br><br>

首先fork，在clion中选择new project from version control，粘贴URL。随后在clion底下的控制台中输入`npm install`。（在进行这一步前，为了安全起见，先确保自己电脑上有node.js）<br><br>

随后点击上方的add configuration，左上角加号，选择npm，右侧记得选择script为start，下方interpreter应该自己帮你选好node.exe了，如果没有自己选一下。<br><br>

随后在clion底下的控制台中分别输入
    `npm install --save antd-mobile`
    `npm install --save antd-mobile-icons`
如果显示npm为不可识别的指令，则在存放这个clion project的文件夹里打开一个cmd再输入这两行。<br><br>

这个时候应该就不会报错了。如果报错就在群里说。<br><br>

接下来就可以运行看看效果了。<br><br>

剩下来就是讲一下我写了些啥，感觉口头讲更方便，这里就不写了。<br><br>

**23.3.1 influ3nza: 优化项目结构**<br><br>

**23.3.1 influ3nza: 项目结构说明。**<br><br>

为了保证项目结构清晰，我把文件进行划分。asset存放资源文件，例如各种jpg；pages存放各级页面，即路由可以达到的页面；tests存放暂时不需要用到的测试文件。<br><br>

后期应该还会有service文件夹，用于存放API的调用；以及utils文件夹，用于存放通用函数。<br><br>

参考了`www.jianshu.com/p/383a4a80c1d9`<br><br>




