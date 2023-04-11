后端的开发记录写在这里：
2023.4.6 acoustic更新：
 完成了简单的登陆服务 具体使用方法见LoginController里的注释
 目前仍采取在后端硬编码的方式完成 等云数据库搭建好后应改成连接sql使用

2023.4.10 acoustic更新：
  完成了数据库的连接与登录功能对接数据库的实现
  附 连接数据库方法：
  1. 在本地localhost中再新建一个schema将其命名为sep_project
  2. 将我的脚本导入项目 那个hibernate啥玩意的不是我写的 是自动生成的 具体需不需要保留我还要研究研究
  3. 别忘了改application.properties里的账号密码 以及把url里原来叫bookstore的地方改成sep_project
  （我之后应该不会再上传application.properties这个文件 大家用自己的就行）
  如果还是不行找我就行

2023.4.11 acoustic更新：
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
