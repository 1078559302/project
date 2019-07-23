import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
	  {
			path:'/',
			redirect:'/syncOverView/dashboard',
			component:Layout,
			meta:{title:'同步总览',icon:'el-icon-tickets'},
			children:[
				{
				path:'/syncOverView/dashboard',
        meta:{title:'监控总览',icon:'el-icon-tickets'},
				component:()=>import('@/views/syncOverView/dashboard/index')
				},
        {
        path:'/syncOverView/KAFKATOPIC',
        meta:{title:'TOPIC总览',icon:'el-icon-tickets'},
        component:()=>import('@/views/syncOverView/KAFKATOPIC/index')
        },
        {
        path:'/syncOverView/syncTable',
        meta:{title:'同步核心表总览',icon:'el-icon-tickets'},
        component:()=>import('@/views/syncOverView/syncTable/index')
        },
        {
        path:'/syncOverView/allSys',
        meta:{title:'系统总数',icon:'el-icon-tickets'},
        component:()=>import('@/views/syncOverView/allSys/index')
        }
			]
	  },

	  {
			path:'/msgMonitor',
			meta:{title:'消息监控',icon:'el-icon-tickets'},
			component:Layout,
			children:[
				{
				path:'/msgMonitor/topicOffset',
				meta:{title:'topic offset',icon:'el-icon-tickets'},
				component:()=>import('@/views/msgMonitor/topicOffset/index')
				},
				{
					path:'/msgMonitor/subTable',
					meta:{title:'分表消息',icon:'el-icon-tickets'},
					component:()=>import('@/views/msgMonitor/subTable/index')
				},
				{
					path:'/msgMonitor/delay',
					meta:{title:'同步时效',icon:'el-icon-tickets'},
					component:()=>import('@/views/msgMonitor/delay/index')
				},
				{
					path:'/msgMonitor/delayCharts',
					meta:{title:'同步时效(图表)',icon:'el-icon-tickets'},
					component:()=>import('@/views/msgMonitor/delayCharts/index')
				},
			]
	  },

    {
      path:'/consumerMonitor',
      meta:{title:'消费监控',icon:'el-icon-tickets'},
      component:Layout,
      children:[
        {
          path:'/consumerMonitor/consumer',
          meta:{title:'消费信息监控',icon:'el-icon-tickets'},
          component:()=>import('@/views/consumerMonitor/consumer/index')
        },
        {
          path:'/consumerMonitor/javaApp',
          meta:{title:'对接java应用数',icon:'el-icon-tickets'},
          component:()=>import('@/views/consumerMonitor/javaApp/index')
        },
        {
          path:'/consumerMonitor/sparkApp',
          meta:{title:'对接spark应用数',icon:'el-icon-tickets'},
          component:()=>import('@/views/consumerMonitor/sparkApp/index')
        },
        {
          path:'/consumerMonitor/consumerBacklog',
          meta:{title:'消费积压',icon:'el-icon-tickets'},
          component:()=>import('@/views/consumerMonitor/consumerBacklog/index')
        },
        {
          path:'/consumerMonitor/consumerErr',
          meta:{title:'消费异常',icon:'el-icon-tickets'},
          component:()=>import('@/views/consumerMonitor/consumerErr/index')
        },
        {
          path:'/consumerMonitor/infoNum',
          meta:{title:'消息量',icon:'el-icon-tickets'},
          component:()=>import('@/views/consumerMonitor/infoNum/index')
        }
      ]
    },

    {
      path:'/healthStatus',
      meta:{title:'健康状态',icon:'el-icon-tickets'},
      component:Layout,
      children:[
        {
          path:'/healthStatus/topicFile',
          meta:{title:'TOPIC FILEZIE',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/topicFile/index')
        },
        {
          path:'/healthStatus/kafkasp',
          meta:{title:'SP数据链路',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/kafkasp/index')
        },
        {
          path:'/healthStatus/da taIntegrity',
          meta:{title:'数据完整性',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/dataIntegrity/index')
        },
        {
          path:'/healthStatus/tableStructure',
          meta:{title:'表结构',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/tableStructure/index')
        },
         {
          path:'/healthStatus/errorData',
          meta:{title:'KAFKA错误日志',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/errorData/index')
        },
        {
          path:'/healthStatus/allLink',
          meta:{title:'链路总数',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/allLink/index')
        },
         {
          path:'/healthStatus/abnormalLink',
          meta:{title:'异常链路总数',icon:'el-icon-tickets'},
          component:()=>import('@/views/healthStatus/abnormalLink/index')
        }
      ]
    },

    {
      path:'/dataSearch',
      meta:{title:'数据查询',icon:'el-icon-tickets'},
      component:Layout,
      children:[
        {
          path:'/dataSearch/historyOffset',
          meta:{title:'OFFSET 查询',icon:'el-icon-tickets'},
          component:()=>import('@/views/dataSearch/historyOffset/index')
        },
        {
          path:'/dataSearch/kafkaOffsetData',
          meta:{title:'OFFSET查询数据',icon:'el-icon-tickets'},
          component:()=>import('@/views/dataSearch/kafkaOffsetData/index')
        }
      ]
    },

    {
      path:'/monitorSet',
      meta:{title:'监控配置',icon:'el-icon-tickets'},
      component:Layout,
      children:[
        {
          path:'/monitorSet/consumerGroupId',
          meta:{title:'消费 预警邮箱',icon:'el-icon-tickets'},
          component:()=>import('@/views/monitorSet/consumerGroupId/index')
        },
        {
          path:'/monitorSet/kafkaOffsetData',
          meta:{title:'消费 预警阈值',icon:'el-icon-tickets'},
          component:()=>import('@/views/monitorSet/consumerWarnIndex/index')
        },
        {
          path:'/monitorSet/firewall',
          meta:{title:'防火墙管理',icon:'el-icon-tickets'},
          component:()=>import('@/views/monitorSet/firewall/index')
        }
      ]
    }
]
})
