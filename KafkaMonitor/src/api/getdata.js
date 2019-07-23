import request from '@/api/request'

export default{
  getData(data){
    return request({
      url:'/api/users',
      method:'get',
      data
    })
  }
}
