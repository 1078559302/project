<template>
  <div>
    <el-table
    :data="tableData"
    :border="true"
    style="width: 100%">
      <el-table-column
        label="id"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="name"
        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="name"
        width="200">
        <template slot-scope="scope">
          <span>{{scope.row.email}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="myChart"></div>
  </div>
</template>

<script>
import fetchData from '@/api/getdata'
export default{
  data(){
    return{
      tableData:[]
    }
  },
  created() {
    fetchData.getData().then(res=>{
      console.log(res)
      this.tableData=res
    })
  },
  mounted() {
    this.drawLine()
  },
  methods:{
    drawLine(){
      let myChart=this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title:{text:'在vue中使用echarts'},
        tooltip:{},
        xAxis:{
          data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style>
  #myChart{
    width: 18.75rem;
    height: 18.75rem;
  }
</style>
