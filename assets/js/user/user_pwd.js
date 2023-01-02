$ (function(){
    var form = layui.form
    var layer = layui.layer

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
})