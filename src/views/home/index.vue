<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理中心</span>
            </template> 
            
            <el-submenu index="1-1">
              <template slot="title">收货地址管理</template>
              <el-menu-item index="1-1-1">深圳收货地址</el-menu-item>
              <el-menu-item index="1-1-2">武汉收货地址</el-menu-item>
            </el-submenu>
          </el-submenu>
           <el-submenu index="1-1">
              <template slot="title">收货地址管理</template>
              <el-menu-item index="1-1-1">深圳收货地址</el-menu-item>
              <el-menu-item index="1-1-2">武汉收货地址</el-menu-item>
            </el-submenu>
          <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
   
          
        </el-menu>
      </el-col>
      <el-col :span="20"></el-col>
    </el-row>
  </div>
</template>
    <script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
.home-container {
  .el-menu {
    border-right: none;
  }
}
</style>

  
