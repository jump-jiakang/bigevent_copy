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

    // 自定义表单验证规则
    // 1. 从 layui 中获取 form 对象
    var form = layui.form
    var layer = layui.layer
    // 2. 通过 form.verify() 函数自定义表单验证规则
    form.verify({
        // 自定义一个 pwd 校验规则
        pwd: [/^[\S]{6,12}$/,'密码必须是6到12位，且不能出现空格'],
        // 校验两次密码是否一致规则
        repwd: function(value) {
            // 通过形参 value 可以拿到确认密码框的内容
            // 还需要拿到密码框的内容，然后进行一次等于判断
            // 如果判断失败，则 return 一个提示消息即可
            var pwd = $('.reg-box [name=password]').val()
            // console.log('密码:',pwd,'确认密码:',value)
            if(pwd !== value) {
                return '两次密码不一致!'
            }
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit',function(e){
        // 1. 阻止表单默认提交事件
        e.preventDefault()
        // 2. 发起AJax的 POST 请求
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        $.ajax({
            url: '/api/reguser',
            method: 'POST',
            data: data,
            success: function(res) {
                if(res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功,请登录!')
                // 模拟人为点击行为
                $('#link_login').click()
            }
        })
    })

    // 监听登录表单的提交事件
    $('#form_login').submit(function(e) {
        // 1. 阻止表单默认行为
        e.preventDefault()
        // 2. 发起 Ajax POST 请求
        $.ajax({
            url: '/api/login',
            method: 'POST',
            // 快速获取表单中的数据
            data: $(this).serialize(),
            success: function(res) {
                if(res.status !== 0) {
                    return layer.msg('登录失败!')
                }
                layer.msg('登录成功!')
                // (重点)将登录获取的 token 字符串保存到 localStorage 中
                // console.log($('#form_login').serialize())
                localStorage.setItem('token',res.token)
                // 跳转到后台主页
                location.href = '/index.html'
            }
        })
    })
})