# bigevent

## 1. 项目前期的准备工作

### 1.1 初始化项目结构

1. 将 `素材` 目录下的 `assets` 和 `home` 文件夹，拷贝到 `code` 目录下
2. 在 `code` 目录下新建 `login.html` 和 `index.html` 页面

### 1.2 使用 GitHub 管理项目

1. 在项目目录中运行 `git init` 命令
2. 在项目目录中运行 `git add .` 命令
3. 在项目目录中运行 `git commit -m "init project"` 命令
4. 新建 GitHub 仓库
5. 将本地仓库和 GitHub 仓库建立关联关系
6. 将本地仓库的代码推送到 GitHub 仓库中
7. 运行 `git checkout -b login` 命令，创建并切换到 `login` 分支



## 2. 登录注册

### 2.1 绘制 login 页面基本结构

1、编写 HTML 结构：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>大事件-登录/注册</title>
    <!-- 导入 LayUI 样式 -->
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <!-- 导入自己的样式 -->
    <link rel="stylesheet" href="/assets/css/login.css">
</head>
<body>
    <!-- 头部的 Logo 区域 -->
    <div class="layui-main">
        <img src="/assets/images/logo.png" alt="">
    </div>

    <!-- 登录注册区域 -->
    <div class="loginAndRegBox">
        <div class="title-box"></div>
    </div>
</body>
</html>
```

2、美化样式

```css
html,body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: url('/assets/images/login_bg.jpg') no-repeat center;
    background-size: cover;
}

.loginAndRegBox {
    width: 400px;
    height: 310px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.title-box {
    height: 60px;
    background: url('/assets/images/login_title.png') no-repeat center;
}
```



### 2.2 绘制登录表单基本结构

1、编写 HTML 结构：

```html
<!-- 登录的 div -->
<div class="login-box">
    <form class="layui-form" action="">
        <!-- 用户名 -->
        <div class="layui-form-item">
            <i class="layui-icon layui-icon-face-username"></i> 
            <input type="text" name="username" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
        </div>
        <!-- 密码 -->
        <div class="layui-form-item">
            <i class="layui-icon layui-icon-face-password"></i> 
            <input type="password" name="password" required  lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
        <!-- 登录按钮 -->
        <div class="layui-form-item">
            <button class="layui-btn layui-btn-fluid layui-btn-normal" lay-submit>登录</button>
        </div>
        <div class="layui-form-item links">
            <a href="javascript:;" id="link_reg">去注册账号</a>
        </div>
    </form>
</div>
```

表单基本结构：[表单 - 页面元素 - Layui](http://layui.org.cn/doc/element/form.html)

2、美化登录表单样式：

```css
.layui-form {
    padding: 0 30px;
}
.links {
    display: flex;
    justify-content: flex-end;
}
.links a {
    font-size: 12px;
}
```



### 2.3 绘制文本框前面的小图标

图标使用方式：[字体图标 - 页面元素 - Layui](http://layui.org.cn/doc/element/icon.html)

1、在用户名的文本框之前，添加如下标签结构：

```html
<i class="layui-icon layui-icon-face-username"></i>
```

2、在密码框之前，添加如下标签结构：

```html
<i class="layui-icon layui-icon-face-password"></i> 
```

3、美化样式：

```css
.layui-form {
  padding: 0 30px;
}
.links {
  display: flex;
  justify-content: flex-end;
}
.links a {
  font-size: 12px;
}
```



### 2.4 快速绘制注册表单

1、将登录的表单复制一份，并修改为注册表单：

```html
<!-- 注册的 div -->
<div class="reg-box">
    <!-- 注册的表单 -->
    <form class="layui-form" action="">
        <!-- 用户名 -->
        <div class="layui-form-item">
            <i class="layui-icon layui-icon-username"></i> 
            <input type="text" name="username" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
        </div>
        <!-- 密码 -->
        <div class="layui-form-item">
            <i class="layui-icon layui-icon-password"></i> 
            <input type="password" name="password" required  lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
        <!-- 确认密码 -->
        <div class="layui-form-item">
            <i class="layui-icon layui-icon-password"></i> 
            <input type="password" name="repassword" required  lay-verify="required" placeholder="请再次输入密码" autocomplete="off" class="layui-input">
        </div>
        <!-- 注册按钮 -->
        <div class="layui-form-item">
            <button class="layui-btn layui-btn-fluid layui-btn-normal" lay-submit>登录</button>
        </div>
        <!-- 去登录 -->
        <div class="layui-form-item links">
            <a href="javascript:;" id="link_reg">去登录</a>
        </div>
    </form>
</div>
```



### 2.5 实现登录和注册按需切换

1、编写样式：

```css
.reg-box {
  display: none;
}
```

2、编写 JavaScript 代码：

```javascript
$(function(){
    // 点击 "去注册账号链接"
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击 "去登录" 的链接
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
})
```



### 2.6 实现登录表单的验证

1、导入 layui 的 js 文件

```html
<script src="/assets/lib/layui/layui.all.js"></script>
```

2、为需要验证的表单项添加 `lay-verify` 属性，同时指定具体的校验规则即可。

表单验证：[表单模块文档 - Layui](http://layui.org.cn/doc/modules/form.html#verify)



### 2.7 自定义校验规则

1、从 layui 中获取 form 对象

```js
var form = layui.form
```

2、通过 form.verify() 函数自定义校验规则：

```js
form.verify({
    // 自定义一个 pwd 校验规则
    pwd: [/^[\S]{6,12}$/,'密码必须是6到12位，且不能出现空格'],
    // 校验两次密码是否一致规则
    repwd: function(value) {
        // 通过形参 value 可以拿到确认密码框的内容
        // 还需要拿到密码框的内容，然后进行一次等于判断
        // 如果判断失败，则 return 一个提示消息即可
        var pwd = $('.reg-box [name=password]').val()
        console.log('密码:',pwd,'确认密码:',value)
        if(pwd !== value) {
            return '两次密码不一致!'
        }
    }
})
```

3、按需为表单添加校验规则：

```html
<!-- 密码 -->
<input type="password" name="password" required  lay-verify="required|pwd" placeholder="请输入密码" autocomplete="off" class="layui-input">

<!-- 确认密码 -->
<input type="password" name="repassword" required  lay-verify="required|pwd|repwd" placeholder="请再次输入密码" autocomplete="off" class="layui-input">
```



### 2.8 发起注册用户 Ajax 请求

1、为注册表单添加 id：

```html
<!-- 注册的表单 -->
<form class="layui-form" id="form_reg"></form>
```

2、监听提交事件：

```js
// 监听注册表单的提交事件
$('#form_reg').on('submit',function(e){
    // 1. 阻止表单默认提交事件
    e.preventDefault()
    // 2. 发起AJax的 POST 请求
    var data = {
        username: $('#form_reg [name=username]').val(),
        password: $('#form_reg [name=password]').val()
    }
    $.post('http://www.liulongbin.top:3007/api/reguser',data,function(res){
        if(res.status !== 0) {
            return layer.msg(res.message)
        }
        layer.msg('注册成功,请登录!')
        // 模拟人为点击行为
        $('#link_login').click()
    })
})
```



### 2.9 使用 layer 提示消息

1、导入 layer：

```js
var layer = layui.layer
```

2、调用 `layer.msg()` 提示信息：

```js
layui.msg('注册成功,请登录!')
```

详情参考**弹出层**：[layer弹层组件开发文档 - Layui](http://layui.org.cn/doc/modules/layer.html)



### 2.10 发起登录 AJax 请求

1、为登录表单添加 id：

```html
<form class="layui-form" id="form_login"></form>
```

2、监听提交表单事件：

```js
$('#form_login').submit(function(e) {
    // 1. 阻止表单默认行为
    e.preventDefault()
    // 2. 发起 Ajax POST 请求
    $.ajax({
        url: 'http://www.liulongbin.top:3007/api/login',
        method: 'POST',
        // 快速获取表单中的数据
        data: $(this).serialize(),
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('登录失败!')
            }
            layer.msg('登录成功!')
            // (重点)将登录获取的 token 字符串保存到 localStorage 中
            // console.log(res)
            localStorage.setItem('token',res.token)
            // 跳转到后台主页
            location.href = '/index.html'
        }
    })
})
```

其中：`serialize()` 方法可以获取表单值。[jQuery ajax - serialize() 方法 (w3school.com.cn)](https://www.w3school.com.cn/jquery/ajax_serialize.asp)



### 2.11 在 ajaxProfilter 中统一拼接请求的根路径

1、在 `/assets/js` 目录中新建 `baseAPI.js`

2、编写如下代码：

```js
// 注意：每次调用 $.post() $.get() 或 $.ajax() 的时候
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们个 Ajax 提供的配置对象
$.ajaxPrefilter(function(options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
})
```

3、导入配置文件：

```html
<script src="/assets/js/baseAPI.js"></script>
```



### 2.12 提交login分支到GitHub

1. 运行 `git add .` 命令
2. 运行 `git commit -m "完成了登录注册的功能"` 命令
3. 运行 `git push -u origin login` 命令
4. 运行 `git checkout master` 命令
5. 运行 `git merge login` 命令
6. 运行 `git push` 命令
7. 运行 `git checkout -b index` 命令





## 3. 后台主页

### 3.1 快速实现后台主页的布局效果

1、从 layui 官方文档中粘贴布局的主要代码，并修改如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>后台主页</title>
    <!-- 导入 layui 样式 -->
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <!-- 导入自定义样式表 -->
    <link rel="stylesheet" href="/assets/css/index.css">
</head>

<body class="layui-layout-body">
    <div class="layui-layout layui-layout-admin">
        <div class="layui-header">
            <div class="layui-logo">
                <img src="/assets/images/logo.png" alt="" />
            </div>
            <!-- 头部区域（可配合layui已有的水平导航） -->
            <ul class="layui-nav layui-layout-right">
                <li class="layui-nav-item">
                    <a href="javascript:;">
                        <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
                        个人中心
                    </a>
                    <dl class="layui-nav-child">
                        <dd><a href="">基本资料</a></dd>
                        <dd><a href="">更换头像</a></dd>
                        <dd><a href="">重置密码</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item"><a href="">退出</a></li>
            </ul>
        </div>

        <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">
                <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
                <ul class="layui-nav layui-nav-tree" lay-filter="test">
                    <li class="layui-nav-item layui-nav-itemed">
                        <a class="" href="javascript:;">所有商品</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;">列表一</a></dd>
                            <dd><a href="javascript:;">列表二</a></dd>
                            <dd><a href="javascript:;">列表三</a></dd>
                            <dd><a href="">超链接</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a href="javascript:;">解决方案</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;">列表一</a></dd>
                            <dd><a href="javascript:;">列表二</a></dd>
                            <dd><a href="">超链接</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item"><a href="">云市场</a></li>
                    <li class="layui-nav-item"><a href="">发布商品</a></li>
                </ul>
            </div>
        </div>

        <div class="layui-body">
            <!-- 内容主体区域 -->
            <div style="padding: 15px;">内容主体区域</div>
        </div>

        <div class="layui-footer">
            <!-- 底部固定区域 -->
            © layui.com - 底部固定区域
        </div>
    </div>

    <!-- 导入 layui js文件 -->
    <script src="/assets/lib/layui/layui.all.js"></script>
</body>

</html>
```



### 3.2 修改侧边栏结构

```html
<!-- 侧边栏 -->
<div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree">
            <li class="layui-nav-item">
                <a href="/">首页</a>
            </li>
            <li class="layui-nav-item">
                <a class="" href="javascript:;">文章管理</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">文章类别</a></dd>
                    <dd><a href="javascript:;">文章列表</a></dd>
                    <dd><a href="javascript:;">发布文章</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item">
                <a class="" href="javascript:;">个人中心</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">基本资料</a></dd>
                    <dd><a href="javascript:;">更换头像</a></dd>
                    <dd><a href="javascript:;">重置密码</a></dd>
                </dl>
            </li>
        </ul>
    </div>
</div>
```



### 3.3 使用lay-shrink实现左侧菜单互斥效果

使用 `lay-shrink="all"` 实现左侧菜单互斥效果：

```html
<div class="layui-side layui-bg-black">
  <div class="layui-side-scroll">
    <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
    <ul class="layui-nav layui-nav-tree" lay-shrink="all">
      <!-- 省略其他代码 -->
    </ul>
  </div>
</div>
```



### 3.4 为菜单项添加图标

1、导入第三方的图标库：

```html
<!-- 导入第三方图标库 -->
<link rel="stylesheet" href="/assets/fonts/iconfont.css">
```

2、修改左侧菜单的结构：

```html
<div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree" lay-shrink="all">
            <li class="layui-nav-item">
                <a href=""><span class="iconfont icon-home"></span>首页</a>
            </li>
            <li class="layui-nav-item">
                <a class="" href="javascript:;"><span class="iconfont icon-16"></span>文章管理</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;"><i class="layui-icon layui-icon-app"></i>文章类别</a></dd>
                    <dd><a href="javascript:;"><i class="layui-icon layui-icon-app"></i>文章列表</a></dd>
                    <dd><a href="javascript:;"><i class="layui-icon layui-icon-app"></i>发布文章</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item">
                <a class="" href="javascript:;"><span class="iconfont icon-user"></span>个人中心</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;"><i class="layui-icon layui-icon-app"></i>基本资料</a></dd>
                    <dd><a href="javascript:;"><i class="layui-icon layui-icon-app"></i>更换头像</a></dd>
                    <dd><a href="javascript:;"><i class="layui-icon layui-icon-app"></i>重置密码</a></dd>
                </dl>
            </li>
        </ul>
    </div>
</div>
```

3、修改头部"退出"按钮的结构：

```html
<li class="layui-nav-item">
    <a href=""><sapn class="iconfont icon-tuichu"></sapn>退出</a>
</li>
```

4、导入自己的样式表文件：

```css
<link rel="stylesheet" href="/assets/css/index.css">
```

5、编写自己的样式：

```css
.layui-footer {
    text-align: center;
    font-size: 12px;
}
.iconfont {
    margin-right: 8px;
}
.layui-icon {
    margin-right: 8px;
    margin-left: 20px;
}
```



### 3.5 使用iframe标签在内容主体区域显示网页内容

1、在页面主体的 div 中添加 `iframe` :

```html
<div class="layui-body">
    <!-- 内容主体区域 -->
    <iframe name="fm" frameborder="0"></iframe>
</div>
```

2、为 `首页` 链接添加 `href` 和 `target` 属性：

```html
<a href="/home/dashboard.html" target="fm"><span class="iconfont icon-home"></span>首页</a>
```

3、美化样式：

```css
iframe {
    width: 100%;
    height: 100%;
}

.layui-body {
    overflow: hidden;
}
```



### 3.6 解决3个小问题

1、为 `iframe` 指定默认页面：

```html
<iframe name="fm" src="/home/dashboard.html" frameborder="0"></iframe>
```

2、为 `首页` 对应的导航 item 添加 `layui-this` 属性：

```html
<li class="layui-nav-item layui-this">
     <a href="/home/dashboard.html" target="fm"><span class="iconfont icon-home"></span>首页</a>
</li>
```

`layui-this` 属性为指定当前页。

3、强制清除 <a> 链接的 CSS3 动画：

```css
a {
    transition: none !important;
}
```



### 3.7 渲染图片头像和文字头像

1、修改头部区域的头像结构如下：

```html
<a href="javascript:;" class="userinfo">
    <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
    <span class="text-avatar">A</span>
    个人中心
</a>
```

2、在左侧导航区域的 `ul` 之前添加如下头像结构：

```html
<div class="userinfo">
    <img src="http://t.cn/RCzsdCq" alt="" class="layui-nav-img">
    <span class="text-avatar">A</span>
    <span id="welcome">欢迎 xxx</span>
</div>
```

3、添加样式美化 UI 结构：

```css
.userinfo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 12px;
    user-select: none;
}
.layui-side-scroll .userinfo {
    border-bottom: 1px solid #282b33;
}
.layui-nav-img {
    width: 40px;
    height: 40px;
}
.text-avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #009688;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    position: relative;
    top: 4px;
    margin-right: 10px;
}
```



### 3.8 获取用户的基本信息

1、导入需要的脚本：

```HTML
<!-- 导入 jQuery -->
<script src="/assets/lib/jquery.js"></script>
<!-- 导入配置文件 baseAPI -->
<script src="/assets/js/baseAPI.js"></script>
<!-- 导入自己的 js 文件 -->
<script src="/assets/js/index.js"></script>
```

2、定义 getUserInfo 函数获取用户的基本信息：

```js
// 获取用户基本信息
function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        method: 'GET',
        // headers 就是请求头配置对象
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('获取用户信息失败')
            }
            // 调用 renderAvatar 渲染用户的头像
            renderAvatar(res.data)
        }
    })
}
```



### 3.9 渲染用户头像

1、定义 renderAvatar 函数：

```js
// 渲染用户头像
function renderAvatar(user) {
    // 1. 获取用户的名称
    var name = user.nickname || user.username
    // 2. 设置欢迎的文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    // 3. 按需渲染用户的头像
    if(user.user_pic !== null) {
        // 3.1 渲染图片头像
        $('.layui-nav-img').attr('src',user.user_pic).show()
        $('.text-avatar').hide()
    }else {
        // 3.2 渲染文本头像
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
```



### 3.10 统一为有权限的接口设置 headers 请求头

1、在 baseAPI 的 ajaxPrefilter 中添加如下代码：

```js
// 统一为有权限的接口，设置 headers 请求头
if(options.url.indexOf('/my/') !== -1) {
    options.headers = {
        Authorization: localStorage.getItem('token') || ''
    }
}
```



### 3.11 实现退出功能

1、修改退出的 `<a>` 链接如下：

```html
<a href="javascript:;" id="btnLogOut"><sapn class="iconfont icon-tuichu"></sapn>退出</a>
```

2、实现退出功能：

```js
// 点击按钮，实现退出登录功能
$('#btnLogOut').on('click',function(){
    // 提示用户是否确认退出
    layer.confirm('确定退出登录?', {icon: 3, title:'提示'}, function(index){
        // 1. 清空本地存储中的 token
        localStorage.removeItem('token')
        // 2. 重新跳转到登录页面
        location.href = '/login.html'
        // 关闭 confirm 询问框
        layer.close(index);
    });
})
```



### 3.12 控制用户访问权限

1、在调用有权限接口的时候，指定 `complete` 回调函数：

```js
// 全局统一挂载一个 complete 回调函数
options.complete = function(res) {
    console.log('执行了 complete 回调')
    console.log(res)
    if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        // 1. 强制清空内存中的 token
        localStorage.removeItem('token')
        // 2. 强制跳转到登录页面
        location.href = '/login.html'
    }
}
```





## 4. 基本资料

### 4.1 创建基本资料对应的页面

1、新建 `/user/user_info.html` 并初始化如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 导入 layui 样式 -->
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <!-- 导入自己的样式 -->
    <link rel="stylesheet" href="/assets/css/user/user_info.css">
</head>
<body>
    <!-- 卡片区域 -->
    <div class="layui-card">
        <div class="layui-card-header">修改用户基本信息</div>
        <div class="layui-card-body">
        </div>
    </div>
</body>
</html>
```

2、新建 `/assets/css/user/user_info.css` 并初始化格式如下：

```css
html,body {
    margin: 0;
    padding: 0;
}

body {
    background-color: #f2f3f5;
    padding: 15px;
}
```

3、修改 `index.html` 对应的 `<a>` 链接：

```html
<a href="/user/user_info.html" target="fm"><i class="layui-icon layui-icon-app"></i>基本资料</a>
```



### 4.2 绘制基本资料对应的表单

1、编写如下的表单结构：

```html
<body>
    <!-- 卡片区域 -->
    <div class="layui-card">
        <div class="layui-card-header">修改用户基本信息</div>
        <div class="layui-card-body">
            <!-- 用户基本信息 表单区域 -->
            <form class="layui-form" action="">
                <!-- 登录名称 -->
                <div class="layui-form-item">
                  <label class="layui-form-label">登录名称</label>
                  <div class="layui-input-block">
                    <input type="text" name="username" required  lay-verify="required" placeholder="请输入登录名称" autocomplete="off" class="layui-input" readonly />
                  </div>
                </div>
                <!-- 用户昵称 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">用户昵称</label>
                    <div class="layui-input-block">
                        <input type="text" name="nickname" required  lay-verify="required" placeholder="请输入用户昵称" autocomplete="off" class="layui-input" />
                    </div>
                </div>
                <!-- 用户邮箱 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">用户邮箱</label>
                    <div class="layui-input-block">
                        <input type="text" name="email" required  lay-verify="required|email" placeholder="请输入用户邮箱" autocomplete="off" class="layui-input" />
                    </div>
                </div>
                <!-- 提交修改和重置按钮 -->
                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <button class="layui-btn" lay-submit lay-filter="formDemo">提交修改</button>
                        <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
```

2、在页面的底部导入如下脚本：

```html
<!-- 导入 layui js -->
<script src="/assets/lib/layui/layui.all.js"></script>
<!-- 导入 jquery -->
<script src="/assets/lib/jquery.js"></script>
<!-- 导入自己的 js 脚本 -->
<script src="/assets/js/user/user_info.js"></script>
```

3、在 `user_info.js` 中自定义输入昵称的验证规则：

```js
$(function(){
    var form = layui.form

    form.verify({
        nickname: function(value) {
            if( value.length > 6) {
                return '昵称长度必选在 1 ~ 6 个字符之间!'
            }
        }
    })
})
```



### 4.3 获取用户基本信息

1、导入 baseAPI ：

```html
<!-- 导入 baseAPI 配置文件 -->
<script src="/assets/js/baseAPI.js"></script>
```

2、在 `user_info.js` 中定义并调用 `initUserInfo` 函数：

```js
initUserInfo()

// 初始化用户基本信息
function initUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('获取用户信息失败!')
            }
            console.log(res)
        }
    })
}
```



### 4.4 使用 form.val 方法快速为表单赋值

1、为表单指定 `lay-filter` 属性：

```html
<form class="layui-form" lay-filter="formUserInfo"></form>
```

2、调用 `form.val()` 方法为表单赋值：

```js
form.val('formUserInfo',res.data)
```

3、使用隐藏域保存用户的 `id` 值：

```html
<!-- form 表单区域 -->
<form class="layui-form" lay-filter="formUserInfo">
  <!-- 这是隐藏域 -->
  <input type="hidden" name="id" value="" />
  
  <!-- 省略其他代码 -->
</form>
```



### 4.5 实现表单的重置效果

1、阻止表单重置行为，再重新获取用户信息即可：

```js
// 重置表单数据
$('#btnReset').on('click',function(e){
    // 阻止表单默认重置行为
    e.preventDefault()
    initUserInfo()
})
```



### 4.6 发起请求更新用户的信息

1、阻止表单的默认提交行为，并发起数据请求：

```js
// 监听表单提交事件
$('.layui-form').on('submit',function(e){
    // 阻止表单默认
    e.preventDefault()
    // 发起 ajax 数据请求
    $.ajax({
        method: 'POST',
        url: '/my/userinfo',
        data: $(this).serialize(),
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('更新用户信息失败')
            }
            layer.msg('更新用户信息成功')
            // 调用父页面中的方法，重新渲染用户头像和用户信息
            window.parent.getUserInfo()
        }
    })
})
```

2、注意：`<iframe>` 中的子页面，如果想要调用父页面中的方法，使用 `window.parent` 即可。





## 5. 重置密码

### 5.1 渲染重置密码的页面结构

1、在 `/user/user_pwd.html` 页面中编写如下的结构：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <link rel="stylesheet" href="/assets/css/user/user_pwd.css">
</head>
<body>
    <!-- 卡片区域 -->
    <div class="layui-card">
        <div class="layui-card-header">修改密码</div>
        <div class="layui-card-body">
            <!-- 修改密码表单 -->
            <form class="layui-form" action="">
                <!-- 原密码 -->
                <div class="layui-form-item">
                  <label class="layui-form-label">原密码</label>
                  <div class="layui-input-block">
                    <input type="password" name="oldPwd" required  lay-verify="required" placeholder="请输入原密码" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <!-- 新密码 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">新密码</label>
                    <div class="layui-input-block">
                      <input type="password" name="newPwd" required  lay-verify="required" placeholder="请输入新密码" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <!-- 确认新密码 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">确认新密码</label>
                    <div class="layui-input-block">
                      <input type="password" name="rePwd" required  lay-verify="required" placeholder="请再次确认密码" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <!-- 确认 & 重置 按钮 -->
                <div class="layui-form-item">
                    <div class="layui-input-block">
                      <button class="layui-btn" lay-submit lay-filter="formDemo">修改密码</button>
                      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
```

2、在 `/assets/css/user/user_pwd.css` 中编写如下的样式：

```css
html,body {
    margin: 0;
    padding: 0;
}

body {
    padding: 15px;
    background-color: #f2f3f5;
}

.layui-form {
    width: 500px;
}
```



### 5.2 为密码框定义校验规则

1、定义如下的三个校验规则：

```js
$ (function(){
    var form = layui.form

    form.verify({
        // 1. 定义密码的校验规则
        pwd: [/^[\S]{6,12}$/,'密码必选6到12位，且不能出现空格'],
        // 2. 定义新密码和旧密码不能相同
        samePwd: function(value) {
            if(value === $('[name=oldPwd]').val()) {
                return '新密码和旧密码不能相同！'
            }
        },
        // 3. 定义新密码和确认密码必须一致
        rePwd: function(value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码必须一致！'
            }
        }
    })
})
```

2、在 body 结束标签之前导入如下的 `script` 标签：

```html
<script src="/assets/lib/jquery.js"></script>
<script src="/assets/lib/layui/layui.all.js"></script>
<script src="/assets/js/baseAPI.js"></script>
<script src="/assets/js/user/user_pwd.js"></script>
```

3、为密码框分别添加对应的校验规则：

```html
<!-- 原密码 -->
<input type="password" name="oldPwd" required  lay-verify="required|pwd" placeholder="请输入原密码" autocomplete="off" class="layui-input">
<!-- 新密码 -->
<input type="password" name="newPwd" required  lay-verify="required|pwd|samePwd" placeholder="请输入新密码" autocomplete="off" class="layui-input">
<!-- 确认新密码 -->
<input type="password" name="rePwd" required  lay-verify="required|pwd|rePwd" placeholder="请再次确认密码" autocomplete="off" class="layui-input">
```



### 5.3 发起请求实现重置密码的功能

```js
// 发起请求实现重置密码的功能
$('.layui-form').on('submit',function(e) {
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url: '/my/updatepwd',
        data: $(this).serialize(),
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('更新密码失败!')
            }
            layer.msg('更新密码成功!')
            // 重置表单
            $('.layui-form')[0].reset()
        }
        
    })
})
```





## 6. 更换头像

### 6.1 初步渲染更换头像页面结构

1、创建 `/user/user_avatar.html` 页面：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <link rel="stylesheet" href="/assets/css/user/user_avatar.css">
</head>
<body>
    <div class="layui-card">
        <div class="layui-card-header">更换头像</div>
        <div class="layui-card-body">
            卡片式面板面板通常用于非白色背景色的主体内
        </div>
      </div>
</body>
</html>
```

2、美化基本样式：

```css
html,body {
    margin: 0;
    padding: 0;
}
body {
    padding: 15px;
    background-color: #f2f3f5;
}
```

3、修改 `index.html` 中对应链接的属性：

```html
<a href="/user/user_avatar.html" target="fm"><i class="layui-icon layui-icon-app"></i>更换头像</a>
```



### 6.2 搭建更换头像区域页面

1、导入 `cropper.css` 样式表：

```html
<link rel="stylesheet" href="/assets/lib/cropper/cropper.css" />
```

2、在 `<body>` 的结束标签之前，按顺序导入如下的 js 脚本：

```html
<script src="/assets/lib/jquery.js"></script>
<script src="/assets/lib/layui/layui.all.js"></script>
<script src="/assets/lib/cropper/Cropper.js"></script>
<script src="/assets/lib/cropper/jquery-cropper.js"></script>
<script src="/assets/js/baseAPI.js"></script>
<script src="/assets/js/user/user_avatar.js"></script>
```

3、在卡片的 `layui-card-body` 主体区域中，定义如下的 HTML 结构：

```html
<!-- 第一行的图片裁剪和预览区域 -->
<div class="row1">
    <!-- 图片裁剪区域 -->
    <div class="cropper-box">
        <!-- 这个 img 标签很重要，将来会把它初始化为裁剪区域 -->
        <img id="image" src="/assets/images/sample.jpg" />
    </div>
    <!-- 图片的预览区域 -->
    <div class="preview-box">
        <div>
            <!-- 宽高为 100px 的预览区域 -->
            <div class="img-preview w100"></div>
            <p class="size">100 x 100</p>
        </div>
        <div>
            <!-- 宽高为 50px 的预览区域 -->
            <div class="img-preview w50"></div>
            <p class="size">50 x 50</p>
        </div>
    </div>
</div>

<!-- 第二行的按钮区域 -->
<div class="row2">
    <button type="button" class="layui-btn">上传</button>
    <button type="button" class="layui-btn layui-btn-danger">确定</button>
</div>
```

4、美化样式：

```css
/* 设置卡片主体区域的宽度 */
.layui-card-body {
  width: 500px;
}

/* 设置按钮行的样式 */
.row2 {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

/* 设置裁剪区域的样式 */
.cropper-box {
  width: 350px;
  height: 350px;
  background-color: cyan;
  overflow: hidden;
}

/* 设置第一个预览区域的样式 */
.w100 {
  width: 100px;
  height: 100px;
  background-color: gray;
}

/* 设置第二个预览区域的样式 */
.w50 {
  width: 50px;
  height: 50px;
  background-color: gray;
  margin-top: 50px;
}

/* 设置预览区域下方文本的样式 */
.size {
  font-size: 12px;
  color: gray;
  text-align: center;
}

/* 设置图片行的样式 */
.row1 {
  display: flex;
}

/* 设置 preview-box 区域的的样式 */
.preview-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

/* 设置 img-preview 区域的样式 */
.img-preview {
  overflow: hidden;
  border-radius: 50%;
}
```

5、实现基本剪裁效果：

```js
  // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')
  // 1.2 配置选项
  const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }

  // 1.3 创建裁剪区域
  $image.cropper(options)
```



### 6.3 实现裁剪区域图片的替换

```js
// 为文件选择框绑定 change 事件
$('#file').on('change',function(e) {
    // 获取用户选择的文件
    var filelist = e.target.files
    // console.log(filelist)
    if(filelist.length === 0) {
        return layer.msg('请选择照片!')
    }

    // 1. 拿到用户选择的文件
    var file = e.target.files[0]
    // 2. 将文件转换为路径
    var imgURL = URL.createObjectURL(file)
    // 3. 重新初始化剪裁区域
    $image
    .cropper('destroy')     // 销毁旧的剪裁区域
    .attr('src', imgURL)    // 重新设置图片路径
    .cropper(options)       // 重新初始化剪裁区域
})
```



### 6.4 将剪裁后的头像上传到服务器

```js
// 为确定按钮绑定点击事件
$('#btnUpload').on('click',function() {
    // 1. 要拿到用户剪裁之后的头像
    var dataURL = $image
        .cropper('getCroppedCanvas', {
            // 创建一个 Canvas 画布
            width: 100,
            height: 100
        })
        .toDataURL('image/png') // 将 Canvas 画布上的内容转换为 base64 格式字符串
    // console.log(dataURL)
    // 2. 调用接口，把头像上传到服务器
    $.ajax({
        method: 'POST',
        url: '/my/update/avatar',
        data: {
            avatar: dataURL
        },
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('更换头像失败!')
            }
            layer.msg('更换头像成功!')
            window.parent.getUserInfo()
        }
    })
})
```



### 6.5 设置头部区域的快捷方式

1、打开 `index.html`，修改头部个人中心下的三个快捷方式如下：

```html
<dl class="layui-nav-child">
    <dd><a href="/user/user_info.html" target="fm">基本资料</a></dd>
    <dd><a href="/user/user_avatar.html" target="fm">更换头像</a></dd>
    <dd><a href="/user/user_pwd.html" target="fm">重置密码</a></dd>
</dl>
```





## 7. 文章分类

### 7.1 创建并显示文章分类页面

1、创建 `/article/art_cate.html` 页面，并初始化如下UI结构：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <link rel="stylesheet" href="/assets/css/article/art_cate.css">
</head>

<body>
    <!-- 卡片区域 -->
    <div class="layui-card">
        <div class="layui-card-header">
            <span>文章类别管理</span>
            <button type="button" class="layui-btn layui-btn-normal layui-btn-sm">添加类别</button>
        </div>
        <div class="layui-card-body">
            <table class="layui-table">
                <colgroup>
                    <col />
                    <col />
                    <col width="200" />
                </colgroup>
                <thead>
                    <tr>
                        <th>分类名称</th>
                        <th>分类别名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>贤心</td>
                        <td>2016-11-29</td>
                        <td>人生就像是一场修行</td>
                    </tr>
                    <tr>
                        <td>许闲心</td>
                        <td>2016-11-28</td>
                        <td>于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
```

2、定义 `/assets/css/article/art_cate.css` 美化样式：

```css
html,body {
    margin: 0;
    padding: 0;
}

body {
    padding: 15px;
    background-color: #f2f3f5;
}

.layui-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

3、修改 `index.html` 中对应的 `<a>` 链接：

```html
<a href="/article/art_cate.html" target="fm"><i class="layui-icon layui-icon-app"></i>文章类别</a>
```



### 7.2 获取并使用模板引擎渲染表格数据

1、在页面底部导入模板引擎

```html
<script src="/assets/lib/template-web.js"></script>
```

2、定义模板

```html
<!-- 表格数据模板 -->
<script type="text/html">
    {{each data}}
    <tr>
        <td>{{$value.name}}</td>
        <td>{{$value.alias}}</td>
        <td>
            <button type="button" class="layui-btn layui-btn-xs">编辑</button>
            <button type="button" class="layui-btn layui-btn-danger layui-btn-xs">删除</button>
        </td>
    </tr>
    {{/each}}
</script>
```

3、发起请求获取数据：

```js
initArtCateList()

// 获取文章分类列表
function initArtCateList() {
    $.ajax({
        method: 'GET',
        url: '/my/article/cates',
        success: function(res) {
            var htmlStr = template('tpl-table', res)
            // console.log(htmlStr)
            $('tbody').html(htmlStr)
        }
    })
}
```



### 7.3 使用 layer.open 实现弹出层效果

1、导入 `layer`

```js
var layer = layui.layer
```

2、为按钮添加 `id` 属性：

```html
<button type="button" class="layui-btn layui-btn-normal layui-btn-sm" id="btnAddCate">添加类别</button>
```

3、在按钮的点击事件中，通过 `layer.open()` 展示弹出层：

```js
// 为添加类别按钮绑定点击事件
$('#btnAddCate').on('click',function(){
    layer.open({
        type: 1,
        area: ['500px','500px'],
        title: '添加文章分类',
        content: 'ABC'
    })
})
```



### 7.4 在弹出层中渲染 form 表单结构

1、在页面中定义如下的 `script` 标签：

```html
<!-- 添加分类弹出层模板 -->
<script type="text/html" id="dialog-add">
    <form class="layui-form" id="form-add">
        <!-- 分类名称 -->
        <div class="layui-form-item">
          <label class="layui-form-label">分类名称</label>
          <div class="layui-input-block">
            <input type="text" name="name" required  lay-verify="required" placeholder="请输入分类名称" autocomplete="off" class="layui-input">
          </div>
        </div>
        <!-- 分类别名 -->
        <div class="layui-form-item">
            <label class="layui-form-label">分类别名</label>
            <div class="layui-input-block">
              <input type="text" name="alias" required  lay-verify="required" placeholder="请输入分类别名" autocomplete="off" class="layui-input">
            </div>
        </div>
        <!-- 确认添加 & 重置 按钮 -->
        <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit lay-filter="formDemo">确认添加</button>
              <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>
</script>
```

2、通过 `content` 属性指定内容

```js
layer.open({
  type: 1,
  area: ['500px', '250px'],
  title: '添加文章分类',
  content: $('#dialog-add').html()
})
```



### 7.5 实现添加文章分类的功能

1、发起Ajax请求添加表单数据

```js
// 通过代理的形式,为 form-add 表单绑定 submit 事件
$('body').on('submit','#form-add',function(e) {
    e.preventDefault()
    $.ajax({
        method: 'POST',
        url: '/my/article/addcates',
        data: $(this).serialize(),
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('新增文章分类失败!')
            }
            initArtCateList()
            layer.msg('新增文章分类成功!')
            // 根据索引,关闭对应的弹出层
            layer.close(indexAdd)
        }
    })
})
```

2、预先保存弹出层的索引：

```js
  // 为添加类别按钮绑定点击事件
  var indexAdd = null
  $('#btnAddCate').on('click', function() {
    indexAdd = layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '添加文章分类',
      content: $('#dialog-add').html()
    })
  })
```





## 8. 文章类别

### 8.1 点击编辑按钮展示修改文章的弹出层

1、为编辑按钮添加 `btn-edit` 类名如下：

```html
<button type="button" class="layui-btn layui-btn-xs btn-edit" data-id="{{$value.Id}}">编辑</button>
```

2、定义 **修改分类** 的弹出层：

```html
<!-- 修改分类弹出层模板 -->
<script type="text/html" id="dialog-edit">
    <form class="layui-form" id="form-edit" lay-filter="form-edit">
        <!-- 隐藏域 保存 Id 的值 -->
        <input type="hidden" name="Id">
        <!-- 分类名称 -->
        <div class="layui-form-item">
          <label class="layui-form-label">分类名称</label>
          <div class="layui-input-block">
            <input type="text" name="name" required  lay-verify="required" placeholder="请输入分类名称" autocomplete="off" class="layui-input">
          </div>
        </div>
        <!-- 分类别名 -->
        <div class="layui-form-item">
            <label class="layui-form-label">分类别名</label>
            <div class="layui-input-block">
              <input type="text" name="alias" required  lay-verify="required" placeholder="请输入分类别名" autocomplete="off" class="layui-input">
            </div>
        </div>
        <!-- 确认修改 按钮 -->
        <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit lay-filter="formDemo">确认修改</button>
            </div>
        </div>
    </form>
</script>
```

3、通过 代理 的形式，为 `btn-edit` 按钮绑定点击事件：

```js
var indexEdit = null
$('tbody').on('click','.btn-edit',function() {
    // 弹出一个修改文章分类信息的弹出层
    indexEdit = layer.open({
        type: 1,
        area: ['500px','250px'],
        title: '修改文章分类',
        content: $('#dialog-edit').html()
    })
})
```



### 8.2 为修改文章分类的弹出层填充表单数据

1、为编辑按钮绑定 `data-id` 自定义属性：

```html
<button type="button" class="layui-btn layui-btn-xs btn-edit" data-id="{{$value.Id}}">编辑</button>
```

2、在展示弹出层之后，根据 id 的值发起请求文章分类数据，并填充到表单中：

```js
var id = $(this).attr('data-id')
// 发起请求获取对应的分类数据
$.ajax({
    method: 'GET',
    url: '/my/article/cates/' + id,
    success: function(res) {
        form.val('form-edit',res.data)
    }
})
```



### 8.3 更新文章分类数据

1、通过代理的形式，为修改分类的表单绑定 submit 事件：

```js
$('body').on('submit','#form-edit',function(e){
    e.preventDefault()
    $.ajax({
        method: 'POST',
        url: '/my/article/updatecate',
        data: $(this).serialize(),
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('更新分类数据失败!')
            }
            layer.msg('更新分类数据成功!')
            layer.close(indexEdit)
            initArtCateList()
        }
    })
})
```



### 8.4 删除文章分类

1、为删除按钮绑定 `btn-delete` 类名，并添加 `data-id` 自定义属性：

```html
<button type="button" class="layui-btn layui-btn-danger layui-btn-xs btn-delete" data-id="{{$value.Id}}">删除</button>
```

2、通过代理的形式，为删除按钮绑定点击事件：

```js
$('tbody').on('click','.btn-delete',function(){
    var id = $(this).attr('data-id')
    // 提示用户是否要删除
    layer.confirm('确认删除？',{ icon: 3, title: '提示' }, function(index) {
        $.ajax({
            method: 'GET',
            url: '/my/article/deletecate/' + id,
            success: function(res) {
                if(res.status !== 0) {
                    return layer.msg('删除文章分类失败')
                }
                layer.msg('删除文章分类成功')
                layer.close(index)
                initArtCateList()
            }
        })
    })
})
```





## 9. 文章列表

### 9.1 创建文章列表页面

1、新建 `/article/art_list.html` 页面结构如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/lib/layui/css/layui.css">
    <link rel="stylesheet" href="/assets/css/article/art_list.css">
</head>
<body>
    <!-- 卡片区域 -->
    <div class="layui-card">
        <div class="layui-card-header">文章列表</div>
        <div class="layui-card-body">
        </div>
    </div>

    <!-- 导入第三方 js 插件 -->
    <script src="/assets/lib/layui/layui.all.js"></script>
    <script src="/assets/lib/jquery.js"></script>
    <script src="/assets/lib/template-web.js"></script>
    <script src="/assets/js/baseAPI.js"></script>
    <!-- 导入自己的 js 脚本 -->
    <script src="/assets/js/article/art_list.js"></script>
</body>
</html>
```

2、新建 `/assets/css/article/art_list.css` 样式表如下：

```css
html,body {
    padding: 0;
    margin: 0;
}
body {
    padding: 15px;
    background-color: #f2f3f5;
}
```

3、新建 `/assets/js/article/art_list.js` 脚本文件。



### 9.2 定义查询参数对象q

1、定义一个查询的参数对象如下：

```js
// 定义一个查询的参数对象，将来请求数据的时候
// 需要将请求参数对象提交到服务器
var q = {
    pagenum: 1,     // 页码值，默认请求第一页数据
    pagesize: 2,    // 每页显示几条数据，默认每页显示 2 条
    cate_id: '',    // 文章分类 Id
    state: ''       // 文章的发布状态
}
```



### 9.3 请求文章列表数据并使用模板引擎渲染列表结构

1、定义获取文章列表数据的方法如下：

```js
initTable()

// 获取文章列表数据的方法
function initTable() {
    $.ajax({
        method: 'GET',
        url: '/my/article/list',
        data: q,
        success: function(res) {
            if( res.status !== 0) {
                return layer.msg('获取文章列表失败!')
            }
            // 使用模板引擎渲染页面数据
            var htmlStr = template('tpl-table',res)
            $('tbody').html(htmlStr)
        }
    })
}
```

2、在页面中添加表格结构如下：

```html
<!-- 列表区域 -->
<table class="layui-table">
    <colgroup>
        <col />
        <col width="150" />
        <col width="180" />
        <col width="150" />
        <col width="150" />
    </colgroup>
    <thead>
        <tr>
            <th>文章标题</th>
            <th>分类</th>
            <th>发表时间</th>
            <th>状态</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

3、定义列表数据的模板结构：

```html
<!-- 定义文章列表模板引擎 -->
<script type="text/html" id="tpl-table">
    {{each data}}
    <tr>
        <td>{{$value.title}}</td>
        <td>{{$value.cate_name}}</td>
        <td>{{$value.pub_date|dataFormat}}</td>
        <td>{{$value.state}}</td>
        <td>
            <button type="button" class="layui-btn layui-btn-xs">编辑</button>
            <button type="button" class="layui-btn layui-btn-danger layui-btn-xs">删除</button>
        </td>
    </tr>
    {{/each}}
</script>
```



### 9.4 定义美化时间格式的过滤器

1、通过 `template.defaults.imports` 定义过滤器：

```js
// 定义美化时间的过滤器
template.defaults.imports.dataFormat = function(date) {
    const dt = new Date(date)
    var y = dt.getFullYear()
    var m = padZero(dt.getMonth()+1)
    var d = padZero(dt.getDate())
    var hh = padZero(dt.getHours())
    var mm = padZero(dt.getMinutes())
    var ss = padZero(dt.getSeconds())

    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
}

// 定义补零函数
function padZero(n) {
    return n>9 ? n : '0' + n
}
```

2、在模板引擎中使用过滤器：

```html
<td>{{$value.pub_date|dataFormat}}</td>
```



### 9.5 绘制筛选区域的UI结构

1、绘制 UI 结构：

```html
<!-- 筛选区域 -->
<form class="layui-form" id="form-search">
    <div class="layui-form-item layui-inline">
          <select name="cate_id"></select>
    </div>
    <div class="layui-form-item layui-inline">
        <select name="state">
            <option value="">所有状态</option>
            <option value="已发布">已发布</option>
            <option value="草稿">草稿</option>
        </select>
    </div>
    <div class="layui-form-item layui-inline">
        <button class="layui-btn" lay-submit lay-filter="formDemo">筛选</button>
    </div>
</form>
```



### 9.6 发起请求获取并渲染分类的下拉选择框

1、定义 `initCate` 函数请求文章分类的列表数据：

```js
initCate()
// 初始化文章分类的方法
function initCate() {
    $.ajax({
        method: 'GET',
        url: '/my/article/cates',
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('获取文章分类数据失败!')
            }
            // 调用模板引擎渲染分类的可选项
            var htmlStr = template('tpl-cate',res)
            $('[name=cate_id]').html(htmlStr)
            // 通过 layui 重新渲染表单区域的 UI 结构
            form.render()
        }
    })
}
```

2、定义分类可选项的模板结构：

```html
<script type="text/html" id="tpl-cate">
  <option value="">所有分类</option>
  {{each data}}
  <option value="{{$value.Id}}">{{$value.name}}</option>
  {{/each}}
</script>
```



### 9.7 实现筛选的功能

1、为筛选表单绑定 submit 事件：

```js
$('#form-search').on('submit',function(e) {
    e.preventDefault()
    // 获取表单选项中的值
    var cate_id = $('[name=cate_id]').val()
    var state = $('[name=state]').val()
    // 为查询参数对象 q 中对应的属性赋值
    q.cate_id = cate_id
    q.state = state
    // 根据最新的筛选条件，重新渲染表格数据
    initTable()
})
```





### 10. 分页

### 10.1 定义渲染分页的 renderPage 方法

1、定义渲染分页的方法：

```js
function renderPage(total) {
    console.log(total)
}
```

2、在 `initTable` 中调用 `renderPage` 方法

```js
function initTable() {
    $.ajax({
          method: 'GET',
          url: '/my/article/list',
          data: q,
          success: function(res) {
                if (res.status !== 0) {
                     return layer.msg('获取文章列表失败！')
                }
                // 使用模板引擎渲染页面的数据
                var htmlStr = template('tpl-table', res)
                $('tbody').html(htmlStr)
                // 调用渲染分页的方法
                renderPage(res.total)
          }
    })
}
```



### 10.2 调用 laypage.render 方法渲染分页的基本结构

1、在页面中定义分页的区域：

```html
<!-- 分页区域 -->
<div id="pageBox"></div>
```

2、调用 laypage.render() 方法来渲染分页的结构：

```js
// 定义渲染分页的方法
function renderPage(total) {
    // console.log(total)
    // 调用 laypage.render() 方法来渲染分页结构
    laypage.render({
        elem: 'pageBox',    // 分页容器的 Id
        count: total,       // 总数据条数
        limit: q.pagesize,  // 每页显示几条数据
        curr: q.pagenum     // 设置默认被选中的分页
    })
}
```



### 10.3 在jump回调函数中通过obj.curr获取到最新页码值

```js
// 定义渲染分页的方法
function renderPage(total) {
    // console.log(total)
    // 调用 laypage.render() 方法来渲染分页结构
    laypage.render({
        elem: 'pageBox',    // 分页容器的 Id
        count: total,       // 总数据条数
        limit: q.pagesize,  // 每页显示几条数据
        curr: q.pagenum,    // 设置默认被选中的分页
        // 分页发送切换的时候，触发 jump 回调
        jump: function(obj) {
            console.log(obj.curr)
            // 把最新的页码值，赋值到 q 这个查询参数对象中
            q.pagenum = obj.curr
        }
    })
}
```



### 10.4 解决jump回调函数发送死循环的问题

```js
// 定义渲染分页的方法
function renderPage(total) {
    // console.log(total)
    // 调用 laypage.render() 方法来渲染分页结构
    laypage.render({
        elem: 'pageBox',    // 分页容器的 Id
        count: total,       // 总数据条数
        limit: q.pagesize,  // 每页显示几条数据
        curr: q.pagenum,    // 设置默认被选中的分页
        // 分页发送切换的时候，触发 jump 回调
        // 触发 jump 回调的方式有两种：
        // 1. 点击页码的时候，会触发 jump 回调
        // 2. 只要调用 laypage.render() 方法，就会触发 jump 回调
        jump: function(obj,first) {
            // 可以通过 first 的值来判断通过哪种方式触发 jump 回调
            // 如果 first 的值为 true，证明是方式2触发的
            // 否则就是方式1触发的
            console.log(first)
            console.log(obj.curr)
            // 把最新的页码值，赋值到 q 这个查询参数对象中
            q.pagenum = obj.curr
            // 根据最新的 q 获取对应的表格列表，并重新渲染表格
            // initTable()
            if(!first) {
                initTable()
            }
        }
    })
}
```



### 10.5 自定义分页的功能项

```js
// 定义渲染分页的方法
function renderPage(total) {
    // console.log(total)
    // 调用 laypage.render() 方法来渲染分页结构
    laypage.render({
        elem: 'pageBox',    // 分页容器的 Id
        count: total,       // 总数据条数
        limit: q.pagesize,  // 每页显示几条数据
        curr: q.pagenum,    // 设置默认被选中的分页
        layout: ['count','limit','prev','page','next','skip'],  // 自定义排版
        limits: [2,3,5,10], // 每页数据条数的选择项
        // 分页发送切换的时候，触发 jump 回调
        // 触发 jump 回调的方式有两种：
        // 1. 点击页码的时候，会触发 jump 回调
        // 2. 只要调用 laypage.render() 方法，就会触发 jump 回调
        jump: function(obj,first) {
            // 可以通过 first 的值来判断通过哪种方式触发 jump 回调
            // 如果 first 的值为 true，证明是方式2触发的
            // 否则就是方式1触发的
            console.log(first)
            console.log(obj.curr)
            // 把最新的页码值，赋值到 q 这个查询参数对象中
            q.pagenum = obj.curr
            // 根据最新的 q 获取对应的表格列表，并重新渲染表格
            // initTable()
            if(!first) {
                initTable()
            }
        }
    })
}
```



### 10.6 实现切换每页展示多少条数功能

```js
// 定义渲染分页的方法
function renderPage(total) {
    // 调用 laypage.render() 方法来渲染分页的结构
    laypage.render({
      elem: 'pageBox', // 分页容器的 Id
      count: total, // 总数据条数
      limit: q.pagesize, // 每页显示几条数据
      curr: q.pagenum, // 设置默认被选中的分页
      layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
      limits: [2, 3, 5, 10],
      // 分页发生切换的时候，触发 jump 回调
      // 触发 jump 回调的方式有两种：
      // 1. 点击页码的时候，会触发 jump 回调
      // 2. 只要调用了 laypage.render() 方法，就会触发 jump 回调
      jump: function(obj, first) {
        // 可以通过 first 的值，来判断是通过哪种方式，触发的 jump 回调
        // 如果 first 的值为 true，证明是方式2触发的
        // 否则就是方式1触发的
        console.log(first)
        console.log(obj.curr)
        // 把最新的页码值，赋值到 q 这个查询参数对象中
        q.pagenum = obj.curr
        // 把最新的条目数，赋值到 q 这个查询参数对象的 pagesize 属性中
        q.pagesize = obj.limit
        // 根据最新的 q 获取对应的数据列表，并渲染表格
        // initTable()
        if (!first) {
          initTable()
        }
      }
    })
}
```





## 11. 删除文章

### 11.1 实现删除文章的功能

1、为删除按钮绑定 `btn-delete` 类名和 `data-id` 自定义属性：

```html
<button type="button" class="layui-btn layui-btn-danger layui-btn-xs btn-delete" data-id="{{$value.Id}}">删除</button>
```

2、通过代理的形式，为删除按钮绑定点击事件处理函数：

```js
$('tbody').on('click','.btn-delete',function(){
    // 获取到文章的 id
    var id = $(this).attr('data-id')
    // 询问用户是否要删除数据
    layer.confirm('确认删除?', {icon: 3, title:'提示'}, function(index){
        $.ajax({
            method: 'GET',
            url: '/my/article/delete/' + id,
            success: function(res) {
                if(res.status !== 0) {
                    return layer.msg('删除文章失败!')
                }
                layer.msg('删除文章成功!')
                initTable()
            }
        })
        layer.close(index);
    });
})
```



### 11.2 解决删除文章时页面跳转

```js
```





## 12. 发布文章

### 12.1 创建发布文章页码的基本结构

1、新建 `/article/art_pub.html` 页码结构如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/lib/layui//css/layui.css">
    <link rel="stylesheet" href="/assets/css/article/art_pub.css">
</head>
<body>
    <div class="layui-card">
        <div class="layui-card-header">写文章</div>
        <div class="layui-card-body">
          卡片式面板面板通常用于非白色背景色的主体内<br>
          从而映衬出边框投影
        </div>
    </div>

    <!-- 导入第三方 JS 插件 -->
    <script src="/assets/lib/layui/layui.all.js"></script>
    <script src="/assets/lib/jquery.js"></script>
    <script src="/assets/js/baseAPI.js"></script>
    <!-- 导入自己的 JS -->
    <script src="/assets/js/article/art_pub.js"></script>
</body>
</html>
```

2、新建 `/assets/css/article/art_pub.css` 样式文件如下：

```css
html,
body {
  margin: 0;
  padding: 0;
}

body {
  padding: 15px;
  background-color: #f2f3f5;
}
```



### 12.2 新建基本表单结构

```html
<!-- 发布文章的表单 -->
<form class="layui-form">
  <div class="layui-form-item">
    <label class="layui-form-label">文章标题</label>
    <div class="layui-input-block">
      <input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" />
    </div>
  </div>
</form>
```



### 12.3 渲染文章类别对应的下拉选择框结构

1、定义 UI 结构：

```html
<!-- 文章类别 -->
<div class="layui-form-item">
    <label class="layui-form-label">文章类别</label>
    <div class="layui-input-block">
        <select name="cate_id" lay-verify="required"></select>
    </div>
</div>
```

2、导入 `art-template`：

```html
<script src="/assets/lib/template-web.js"></script>
```

3、定义模板结构：

```html
<!-- 定义文章类别下拉框模板结构 -->
<script type="text/html" id="tpl-cate">
    <option value="">请选择文章类别</option>
    {{each data}}
    <option value="{{$value.Id}}">{{$value.name}}</option>
    {{/each}}
</script>
```

4、定义 `initCate` 方法：

```js
$(function() {
    var layer = layui.layer
    var form = layui.form

    initCate()

    // 定义加载文章类别方法
    function initCate() {
        $.ajax({
            method: 'GET',
            url: '/my/article/cates',
            success: function(res) {
                if(res.status !== 0) {
                    return layer.msg('初始化文章类别失败!')
                }
                // 调用模板引擎，渲染分类的下拉菜单
                var htmlStr = template('tpl-cate',res)
                $('[name=cate_id]').html(htmlStr)
                // 一定要记得调用 form.render() 方法
                form.render()
            }
        })
    }
})
```



### 12.4 渲染富文本编辑器

1、添加如下的 `layui` 表单行：

```html
<!-- 文章内容 -->
<div class="layui-form-item">
    <!-- 左侧的 label -->
    <label class="layui-form-label">文章内容</label>
    <!-- 为富文本编辑器外部的容器设置高度 -->
    <div class="layui-input-block" style="height: 400px;">
        <!-- 重要：将来这个 textarea 会被初始化为富文本编辑器 -->
      <textarea name="content"></textarea>
    </div>
</div>
```

2、导入富文本必须的 `script` 脚本：

```js
<!-- 富文本 -->
<script src="/assets/lib/tinymce/tinymce.min.js"></script>
<script src="/assets/lib/tinymce/tinymce_setup.js"></script>
```

3、调用 `initEditor()` 方法，初识化富文本编辑器”

```js
// 初始化富文本编辑器
initEditor()
```



### 12.5 图片封面剪裁的实现步骤

1、在 `<head>` 中导入 `cropper.css` 样式表：

```html
<link rel="stylesheet" href="/assets/lib/cropper/cropper.css">
```

2、在 `<body>` 的结束标签之前，按顺序导入如下的 js 脚本：

```html
<script src="/assets/lib/jquery.js"></script>
<script src="/assets/lib/cropper/Cropper.js"></script>
<script src="/assets/lib/cropper/jquery-cropper.js"></script>
```

3、在表单中，添加如下的表单行结构：

```html
<div class="layui-form-item">
  <!-- 左侧的 label -->
  <label class="layui-form-label">文章封面</label>
  <!-- 选择封面区域 -->
  <div class="layui-input-block cover-box">
    <!-- 左侧裁剪区域 -->
    <div class="cover-left">
      <img id="image" src="/assets/images/sample2.jpg" alt="" />
    </div>
    <!-- 右侧预览区域和选择封面区域 -->
    <div class="cover-right">
      <!-- 预览的区域 -->
      <div class="img-preview"></div>
      <!-- 选择封面按钮 -->
      <button type="button" class="layui-btn layui-btn-danger">选择封面</button>
    </div>
  </div>
</div>
```

4、美化样式：

```css
/* 封面容器的样式 */
.cover-box {
  display: flex;
}

/* 左侧裁剪区域的样式 */
.cover-left {
  width: 400px;
  height: 280px;
  overflow: hidden;
  margin-right: 20px;
}

/* 右侧盒子的样式 */
.cover-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 预览区域的样式 */
.img-preview {
  width: 200px;
  height: 140px;
  background-color: #ccc;
  margin-bottom: 20px;
  overflow: hidden;
}
```

5、实现基本剪裁效果：

```js
// 实现基本剪裁效果
// 1. 初始化图片剪裁器
var $image = $('#image')
// 2. 裁剪选项
var options = {
    aspectRatio: 400 / 280,
    preview: '.img-preview'
}
// 3. 初识化剪裁区域
$image.cropper(options)
```



### 12.6 渲染提交按钮区域

```html
<!-- 发布 & 存为草稿 按钮 -->
<div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit>发布</button>
      <button class="layui-btn layui-btn-primary" lay-submit>存为草稿</button>
    </div>
</div>
```



### 12.7 点击选择封面按钮打开文件选择框

1、修改 UI 结构，为 `选择封面` 按钮添加 id，并且在按钮后面添加 `文件选择框`：

```html
<!-- 选择封面按钮 -->
<button type="button" class="layui-btn layui-btn-danger" id="btnChooseImage">选择封面</button>
<!-- 隐藏文件选择框 -->
<input type="file" id="coverFile" style="display: none;" accept="image/png,image/jpeg,image/gif">
```

2、为选择封面的按钮绑定点击事件处理函数：

```js
$('#btnChooseImage').on('click', function() {
	$('#coverFile').click()
})
```



### 12.8 将选择的图片设置到剪裁区域中

1、监听 `coverFile` 的 `change` 事件，获取用户选择的文件列表：

```js
// 监听 coverFile 的 change 事件，获取用户选择的文件列表
$('#coverFile').on('change',function(e) {
    // 获取到文件的列表数组
    var files = e.target.files
    // 判断用户是否选择了文件
    if(files.length === 0) {
        return
    }
    // 根据文件创建对应的 URL 地址
    var newImgURL = URL.createObjectURL(files[0])
    // 为裁剪区域重新设置图片
    $image
        .cropper('destroy')         // 销毁旧的剪裁区域
        .attr('src', newImgURL)     // 重新设置图片路径
        .cropper(options)           // 重新初始化裁剪区域
})
```



### 12.9 分析发布文章的实现步骤

1、为`存为草稿`按钮添加 `id` 属性：

```html
<button class="layui-btn layui-btn-primary" lay-submit id="btnSave2">存为草稿</button>
```

2、定义文章的发布状态：

```js
var art_state = '已发布'
```

3、为存为草稿按钮绑定事件处理函数：

```js
$('#btnSave2').on('click',function() {
    art_state = '草稿'
})
```



### 12.10 基于Form表单创建FormData对象

1、为发布文章的 Form 表单添加 id 属性：

```html
<form class="layui-form" id="form-pub"></form>
```

2、为表单绑定 submit 提交事件：

```js
// 绑定发布文章表单提交事件
$('#form-pub').on('submit',function(e) {
    // 1. 阻止表单默认提交行为
    e.preventDefault()
    // 2. 基于 form 表单快速创建一个 FormData 对象
    var fd = new FormData($(this)[0])
    // 3. 将文章的发布状态存到 fd 中
    fd.append('state',art_state)
})
```



### 12.11 将裁剪后的封面追加到 FormData 对象中

```js
// 绑定发布文章表单提交事件
$('#form-pub').on('submit',function(e) {
    // 1. 阻止表单默认提交行为
    e.preventDefault()
    // 2. 基于 form 表单快速创建一个 FormData 对象
    var fd = new FormData($(this)[0])
    // 3. 将文章的发布状态存到 fd 中
    fd.append('state',art_state)
    console.log(fd)
    // 4. 将封面剪裁过后的图片输出为一个文件对象
    $image.cropper('getCroppedCanvas',{
        // 创建一个 Canvas 画布
        width: 400,
        height: 280
    })
    .toBlob(function(blob) {
        // 将 Canvas 画布上的内容，转化为文件对象
        // 得到文件对象后，进行后续操作
        // 5. 将文件对象存储到 fd 中
        fd.append('cover_img',blob)
        // 6. 发起 ajax 数据请求
        
    })
})
```



### 12.12 发起 Ajax 请求实现发布文章的功能

1、定义一个发布文章的方法：

```js
// 发起ajax请求实现发布文章功能
function publishArticle(fd) {
    $.ajax({
        method: 'POST',
        url: '/my/article/add',
        data: fd,
        // 注意：如果向服务器提交的是 FormData 格式数据
        // 必须添加以下两个配置项
        contentType: false,
        processData: false,
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('发布文章失败!')
            }
            layer.msg('发布文章成功!')
            // 发布文章成功后，跳转到文章列表页面
            location.href = '/article/art_list.html'
        }
    })
}
```

2、把裁剪的图片追加到 `FormData` 对象中之后，调用 `publishArticle` 方法：

```js
// 为表单绑定 submit 提交事件
$('#form-pub').on('submit', function(e) {
    // 1. 阻止表单的默认提交行为
    e.preventDefault()
    // 2. 基于 form 表单，快速创建一个 FormData 对象
    var fd = new FormData($(this)[0])
    // 3. 将文章的发布状态，存到 fd 中
    fd.append('state', art_state)
    // 4. 将封面裁剪过后的图片，输出为一个文件对象
    $image
      .cropper('getCroppedCanvas', {
        // 创建一个 Canvas 画布
        width: 400,
        height: 280
      })
      .toBlob(function(blob) {
        // 将 Canvas 画布上的内容，转化为文件对象
        // 得到文件对象后，进行后续的操作
        // 5. 将文件对象，存储到 fd 中
        fd.append('cover_img', blob)
        // 6. 发起 ajax 数据请求
        publishArticle(fd)
      })
})
```



### 12.13 将开发完成的项目代码推送到GitHub

1. 运行 `git add .` 命令
2. 运行 `git commit -m "完成文章管理相关功能的开发"` 命令
3. 运行 `git push -u origin article` 命令
4. 运行 `git checkout master` 命令
5. 运行 `git merge article` 命令
6. 运行 `git push` 命令
