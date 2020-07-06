# 百度脑图编辑器

修改了鼠标移动生成下载文件为单击下载。

增加了导出（png,text,svg）和导入(text)类型。

###1.1
    改动：
    1.  index2.html       68行   div下面<a>标签改为<span>标签，可以去除index2.html页面底部input框前面span标签的显示错乱
    2.  setAttribute改为在index2.html中input标签中进行数据交互
    bug：在进入页面时，默认拖拽按钮开启，此时需手动关闭拖拽按钮方可点击节点拿到正确数据
    关于关闭页面时修改数据：
 	我的设想是 		
 		修改数据后，十秒后ajax异步修改数据，
 		刷新页面，通过beforeunload函数，ajax同步
 		页面关闭时，通过unload函数，ajax同步修改数据，但是unload函数不知道怎么回事不起作用
    
    