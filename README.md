# 百度脑图编辑器

修改了鼠标移动生成下载文件为单击下载。

增加了导出（png,text,svg）和导入(text)类型。

不是静态页面
去除了setAttribute,改为在index2的input框进行交易


修改了index2.htmla标签显示错误。
去除了无用的div。

跨页面操作涉及域的概念（origin），错误的意思是：未捕获的安全错误：阻止了一个域为null的frame页面访问另一个域为null的页面。代码运行时在本地直接用浏览器打开的，地址栏是file:///的页面，只需改为localhost访问就行。
