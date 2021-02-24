<template>
  <div class="signIn-container">
    <h1>登录</h1>
    <h1>1111111111111111111</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="signIn">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      //非空校验
      let { username, password} = this;
      if (username.trim().length == 0 || password.trim().length == 0){
         return this.$message({
          showClose: true,
          message: "用户名,密码不能为空",
          type: "error"
        });
      } 
      this.$http.post("/users/login", {  //发送用户信息到服务器
          username,
          password
        })
        .then(result => {
          // console.log(result);
          this.$message({
            showClose:true,
            message:result.data.succMsg,
            type:"success"
          })
          // console.log(result.data.succMsg);
          localStorage.setItem("token",result.data.data.token)
          localStorage.setItem("userInfo",JSON.stringify(result.data.data))
          this.$router.push("/home")  //实现跳转
        })
        .catch(err => {
          // console.dir(err)
          this.$message({
            showClose:true,
            message:err.response.data.errMsg,
            type:"error"
          })
        });
    }
  }
};
</script>
<style lang="less" >
.signIn-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .el-form-item__content {
    // margin-left: 115px;
  }
  h1 {
    font-size: 30px;
    font-weight: bord;
    margin-bottom: 20px;
    margin-left: 50%;
  }
}
</style>
