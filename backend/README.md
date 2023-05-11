后端的开发记录写在这里：
2023.4.6 acoustic更新：</br>
 完成了简单的登陆服务 具体使用方法见LoginController里的注释
 目前仍采取在后端硬编码的方式完成 等云数据库搭建好后应改成连接sql使用

2023.4.10 acoustic更新：</br>
  完成了数据库的连接与登录功能对接数据库的实现
  附 连接数据库方法：
  1. 在本地localhost中再新建一个schema将其命名为sep_project
  2. 将我的脚本导入项目 那个hibernate啥玩意的不是我写的 是自动生成的 具体需不需要保留我还要研究研究
  3. 别忘了改application.properties里的账号密码 以及把url里原来叫bookstore的地方改成sep_project
  （我之后应该不会再上传application.properties这个文件 大家用自己的就行）
  如果还是不行找我就行

2023.4.11 acoustic更新：</br>
  登录功能返回值调整，现在可以直接拿到登录者的所有信息（返回一个User类），如果没有查找到User则返回的为null
  单条消息插入功能已实现，使用方法如下：
  1. 在登录时将User的user_id保存在前端
  2. 在插入时将user_id作为user属性放入RequestBody中</br>
   其他数据格式见附例
   附例：</br>
{</br>
    "timestamp": "2023/4/11/10/18/20",</br>
    "datatype": "msg",</br>
    "message": "my message",</br>
    "location": "Shanghai",</br>
    "user": 2</br>
}</br>
    message有msg和img两种类型（目前），timestamp采取24小时制，除user_id为int外其他数据类型均为字符串

2023.4.11 acoustic更新：</br>
  1. 路由有变化！需要改一下接口！ 具体直接看我的controller吧 比如现在的AddMessage的路由就是/message/add
  2. 现在无论是addevent还是addmessage还是都会返回数据库里刚刚保存的对象 最重要的是会返回event/message的自动生成的id 之后会有用（应该）
  id类型为Int
  3. 登录时会返回User对象，建议在前端把这个对象保存起来 尤其是userId会有用
  4. 查询event需要userId(在登录时会作为返回值user.userId在前端得到)作为参数才能得到，目前支持返回该用户的所有event信息</br>
下面的例子展示了参数名称和传参方式
附例：</br>
{</br>
  "user": 1</br>
}</br>
  5. 查询message需要userId和EventId作为参数，返回某用户的某事件中所有的message
     下面的例子展示了参数名称和传参方式
     附例：</br>
     {</br>
     "user": 1</br>
     "event": 2</br>
     }</br>
  6. 所有的传参都用RequestBody传！我之后也会都统一用接受RequestBody的方式编写后端
  7. 如果发现有报错 试试看刷新一下maven 因为我添加了新的依赖 pom.xml文件有变化
  另外 请重新导入数据库 project.database.sql文件有变化

2023.5.5 acoustic更新：</br>
1. 增加curevent数据库，里面存着本次事件的所有信息，前端用户每发一条就将其存进curevent数据库内
    格式如下例：</br>
    {</br>
        "timestamp": "1234/5/6",</br>
        "datatype": "msg",</br>
        "message": "test content"</br>
    }</br>
2. 当一件事情记录结束，用户结束记录，此时前端应向后端发的消息如下例：
    {</br>
        "name": "this",</br>
        "tags": "study/play",</br>
        "begintime": "1234/5/6",</br>
        "finishtime": "1234/5/6",</br>
        "duration": "1234/5/6",</br>
        "user": "1"  //传userid,</br>
        "lat":  "123.4",</br>
        "mul":  "567.8"</br>
    }</br>
此时后端会自动将curevent内的数据全部放进message数据库内并新增一个event,并清空curevent</br>
3. 当前端请求拿到一个用户的所有event/通过eventid拿到一个event时，该event类中会包含有所有的message，一步到位</br>
4. 前端需要修改message时，传参格式如下：</br>
{</br>
    "messageid": "1",</br>
    "message": "test123"</br>
}</br>

2023.5.11 acoustic更新：</br>
1. 修改curevent数据库 现在每个curevent的条目和一个用户关联 存的时候需要userid</br>
    格式如下</br>
   {</br>
   "timestamp": "1234/5/6",</br>
   "datatype": "msg",</br>
   "message": "test content"</br>
   "user": "1"</br>
   }</br>
2. 新增tempevent数据库 存放临时暂停的事件 通过调用/event/pause进行存储，通过调用/event/continue进行拿出tempevent并删除相应元素的操作
每个账号只能存一个临时事件存多了会报错</br>
    /event/pause的body格式如下</br>
   {</br>
   "begintime": "1234/5/6",</br>
   "duration": "123",</br>
   "tags": "test/test2"</br>
   "user": "1"</br>
   }</br>
    /event/continue的body格式如下</br>
   {</br>
   "user": "1"</br>
   }</br>
3. duration改为使用Int存在数据库里 前端仍使用原来的方式传入参数 不需要改动
