window.onload = function () {
    $(".top-tab .ng-scope .ng-isolate-scope").css("display","none")
    $("div.minder-editor-container").css("top","0px")
    $(".minder-editor").css("top","0px")
    $(".editor-title").css("height","0px")
    //var json = '{"root":{"data":{"id":"8d859eaa143a","created":1592453867,"text":"6.19"},"children":[{"data":{"id":"c3ko77u5v3s0","created":1592528392809,"text":"更改页面","layout":null},"children":[]},{"data":{"id":"c3ko7dwxzts0","created":1592528406037,"text":"视图","layout":null},"children":[{"data":{"id":"c3ko8bk4cpc0","created":1592528479273,"text":"点击不同的树按钮出来不同的代码","layout":null},"children":[]},{"data":{"id":"c3ko8hj9uig0","created":1592528492282,"text":"树的明细","layout":null},"children":[]},{"data":{"id":"c3ko8lx0tbc0","created":1592528501821,"text":"树的分支","layout":null},"children":[]},{"data":{"id":"c3ko9w20rm00","created":1592528602255,"text":"？不同的json传入不同的页面","layout":null},"children":[]}]},{"data":{"id":"c3kuugya5rc0","created":1592547141684,"text":"告诫","expandState":"expand","layout":null},"children":[{"data":{"id":"c3kuum1weug0","created":1592547152787,"text":"先大略做出来，精细的活现在不考虑","layout":null},"children":[]}]},{"data":{"id":"c3kupkaaom80","created":1592546757120,"text":"背景及主题","expandState":"expand","layout":null},"children":[{"data":{"id":"c3kusuhwqao0","created":1592547014440,"text":"保留，并更改到其他地方","layout":null},"children":[]},{"data":{"id":"c3kupu1y6ww0","created":1592546778383,"text":"主题改为紧凑","layout":null},"children":[]},{"data":{"id":"c3kuqoosejs0","created":1592546845067,"text":"原本右键事件去除，可以自定义事件","layout":null},"children":[]},{"data":{"id":"c3kuq2peh2g0","created":1592546797215,"text":"查看是否有按层级划分主题，暂没找到功能（每一层不同的颜色）","layout":null},"children":[]},{"data":{"id":"c3kv15sicrk0","created":1592547665939,"text":"左下小手默认选中","layout":null},"children":[]}]},{"data":{"id":"c3kuquad6p40","created":1592546857256,"text":"单击节点出来明细框（明细框只读）","layout_filetree-down_offset":{"x":73,"y":16},"layout":null},"children":[{"data":{"id":"c3kurdvvars0","created":1592546899915,"text":"明细框可以是另一个json，亦或其他","layout":null},"children":[]},{"data":{"id":"c3kurjz20bk0","created":1592546913168,"text":"明细框在右边","layout":null},"children":[]},{"data":{"id":"c3kurpq7xb40","created":1592546925695,"text":"明细框 可以不是本json内容，以某种形式关联","layout":null},"children":[]}]},{"data":{"id":"c3o4tg76e2o0","created":1592879952650,"text":"右键事件样式可以不变，事件内容更改","layout_bottom_offset":{"x":23.000000342726707,"y":0}},"children":[{"data":{"id":"c3o9kk1jiag0","created":1592893361288,"text":"右键事件和明细表","expandState":"expand"},"children":[{"data":{"id":"c3o8zyfoqrc0","created":1592891746971,"text":"右键插入主题，删除主题"},"children":[{"data":{"id":"c3o4uyq4ryg0","created":1592880071342,"text":"插入主题，在其他页面进行更改json","expandState":"expand"},"children":[{"data":{"id":"c3o9ouh6km00","created":1592893697458,"text":"插入主题，寻找插入主题的方法，写入main.button内"},"children":[]},{"data":{"id":"c3o4wsmbr2w0","created":1592880214780,"text":"点击某节点后，进行插入删除操作"},"children":[{"data":{"id":"c3o9n3bpmww0","created":1592893559990,"text":"插入删除需要更改json文件，回到了第一个问题，"},"children":[]},{"data":{"id":"c3o9nw5cmnc0","created":1592893622732,"text":"是否可以----》 点击删除插入修改后，去数据库操作，修改完成后重新查询"},"children":[]},{"data":{"id":"c3o9oiara200","created":1592893670949,"text":"上述终归有瑕疵，继续思考"},"children":[]}]}]}]},{"data":{"id":"c3o4txlfkvc0","created":1592879990517,"text":"明细表id点击拿出来，去另一个表对应，或者说点击一个节点，节点为某某类型的表，点击后出来对应的所有表","expandState":"expand"},"children":[]}]},{"data":{"id":"c3o9l10ws7c0","created":1592893398255,"text":"【外观主题】有点难，最后做","expandState":"expand"},"children":[{"data":{"id":"c3o9lm8ae7k0","created":1592893444414,"text":"本来想的把操作栏全部隐藏，来一个按钮，点击后按钮去操作隐藏的状态栏，有点难，可以考虑换个思路"},"children":[]},{"data":{"id":"c3o4vfykyv40","created":1592880108858,"text":"外观主题这两个，拿出来，可以用文字，不必须用图片","expandState":"expand"},"children":[]}]},{"data":{"id":"c3o4w0ntiqo0","created":1592880153920,"text":"json表数据"},"children":[{"data":{"id":"c3o4w0r2rtk0","created":1592880154117,"text":"数据太多的情况下，对应的响应速度"},"children":[]}]}]}]},"template":"filetree","theme":"fish","version":"1.4.33"}';
    //var json = window.parent.document.getElementsByName("vdIframe")[0].getAttribute('link');

    var json = window.parent.document.getElementById("aaabbb").value


    editor.minder.importData("json", json).then(function (data) {
    });

}
angular.module('kityminderDemo', ['kityminderEditor'])
    .controller('MainController', function ($scope) {
        $scope.initEditor = function (editor, minder) {
            window.editor = editor;
            window.minder = minder;minder_node1
        };
    });

$(document).ready(function () {
    var jsontab = "";//定义一个空字符串，传入父页面

    $(".hand").click();//拖拽开启
    //$(".zoom-out").click();//缩放
    setTimeout(function () {
        $("[id^='minder_node']").on("click", function (e) {
            jsontab = $(this).text();
            var data = window.$("<text>").append(window.$(this).clone()).text();

            //console.log($(this).html())
            //console.log("子--》[" + data.replace(/^\s+|\s+$/g, "") + "]")//去左右空格
            //console.log(window.$("<text>").append(window.$(this).clone()))
            //更改父页面的值
            window.parent.document.getElementById('hidInp').value = jsontab;
           // console.log("子jsontab--》" + jsontab)
            //调用父页面点击方法
            window.parent.document.getElementById("addTabpp").click();
            if(e.button==0){
                console.log("点击了左键")
            }else if(e.button==2){
                console.log("点击了you键")
            }


        });
    }, 300);//延时500毫秒
})
function addChildNode() {   //添加下级节点
    this.minder.execCommand("AppendChildNode", "下级节点");
}
function addParentNode() {   //添加上级节点
    this.minder.execCommand("AppendParentNode", "上级节点");
}
function addSiblingNode() {   //添加同级节点
    this.minder.execCommand("AppendSiblingNode", "同级节点");
}
function ArrangeDown() {  //后移
    this.minder.execCommand("ArrangeDown")
}
function ArrangeUp() {  //前移
    this.minder.execCommand("ArrangeUp")
}
function expandtolevel1() {  //展开到一级节点
    this.minder.execCommand("expandtolevel", 1);
}
function expandtoleaf() {  //展开全部节点
    this.minder.execCommand("expandtolevel", 9999);
}
function parseJSON() {  //导出数据
    editor.minder.exportData('json').then(function (content) {
        var jsona = $.parseJSON(content)
        console.log(JSON.stringify(jsona));
    });
}
//获取节点的值
function getNodeData() {
    var node = this.minder.getSelectedNode();
    console.log(node)
    console.log(node.data.created)
    console.log(node.data.id)
    console.log(node.data.text)
    console.log(node.children.length)

    window.parent.$("#created").val(node.data.created)
    window.parent.$("#id").val(node.data.id)
    window.parent.$("#text").val(node.data.text)
    window.parent.$("#children_length").val(node.children.length)

}