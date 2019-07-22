<template>
  <el-container class='layout'>
    <el-aside width="220px"><leftMenu></leftMenu></el-aside>
    <el-main>
      <div class="main-header">这里是头部信息</div>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import leftMenu from '@/components/leftMenu'
export default{
  components:{leftMenu},
  created() {
  	console.log(this.$router.options.routes)
  }
}
</script>

<style scoped>
.el-container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
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
  .layout .el-submenu__title,.layout .el-menu-item{
    font-size: 0.833125rem !important;
  }
  ul.el-menu--inline{
    text-align: left;
  }
</style>
