<template>
  <div class="signIn-container">
      <h1>登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
       <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
     
      <el-form-item>
        <el-button type="primary" @click="signIn">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:"",
      password:""
    };
  },
  methods: {
    signIn() {   //非空校验
    let {username,passwordd} =this
      if(this.username.trim().length==0 || this.username.trim().length==0)
      return this.$message({
          showClose: true,
          message: '用户名,密码不能为空',
          type: 'error'
        });
        this.$http.post("/users/login",{
          username,
          password
        }).then(result=>{

        }).catch(error=>{
          
        })
    }
  }
};
</script>
<style lang="less" >
    .signIn-container{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        .el-form-item__content{
            // margin-left: 115px;
        }
        h1{
            font-size: 30px;
            font-weight: bord;
            margin-bottom: 20px;
            margin-left: 50%;
        }
    }
</style>
