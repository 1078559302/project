<template>
	<div id='menu'>
		<el-menu
		@open="handleOpen" @close="handleClose" router
		:unique-opened='true'
		background-color="#304156"
    text-color="#fff"
		class="el-menu-vertical-demo"
		:default-active='$route.path'>
			<template v-for="(routerItem,index) in list">
				<template v-if="routerItem.children&&routerItem.children.length>1">
					<el-submenu  :index='index+""'>
						<template slot="title"><i :class="routerItem.meta.icon"></i><span>{{routerItem.meta.title}}</span></template>
						<el-menu-item  v-for="(item,index) in routerItem.children"
						:index="item.path" :key='item.path'><i :class="routerItem.meta.icon"></i>{{item.meta.title}}</el-menu-item>
					</el-submenu>
				</template>
				<template v-if="routerItem.children&&routerItem.children.length==1">
					<el-menu-item style='text-align: left;'  :key='routerItem.children[0].path' :index='routerItem.children[0].path'>
					<i :class="routerItem.children[0].meta.icon"></i>
					{{routerItem.children[0].meta.title}}
					</el-menu-item>
				</template>
				<template v-if="!routerItem.children">
					<el-menu-item :key='routerItem.path' :index="routerItem.path">{{routerItem.meta.title}}</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default{
	data(){
		return{
			list:this.$router.options.routes
		}
	},
	methods:{
		handleOpen(){
      //console.log('打开了菜单')
    },
		handleClose(){
      //console.log('关闭了菜单')
    }
	}
}
</script>

<style>
#menu .el-submenu__title{
	text-align: left;
}
.el-submenu .el-menu-item{
  background: #0000FF;
}
</style>
