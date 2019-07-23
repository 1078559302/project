<template>
  <el-container class='layout'>
    <el-header>这里是头部信息</el-header>
    <el-container>
      <el-aside width="220px"><leftMenu></leftMenu></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import leftMenu from '@/components/leftMenu'
export default{
  components:{leftMenu}
}
</script>

<style scoped>
.layout.el-container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
.el-header{
  color: #ffffff;
  background: #304156;
}
.el-aside{
  height: 100%;
  background: #304156;
  overflow: hidden;
}
.el-main{
  padding: 0;
}
.main-header{
  height: 3.125rem;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
<style>
  .layout .el-submenu__title,.layout .el-menu-item,.el-table{
    font-size: 0.8125rem !important;
  }
  ul.el-menu--inline{
    text-align: left;
  }
</style>
