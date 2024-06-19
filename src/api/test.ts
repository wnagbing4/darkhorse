//park/building
import request from '@/utils/request'
// 请求数据接口
export const buildingApi = (data: any) => {
    return request('/park/building', 'GET', data)
}
// 添加接口
export const AddApi = (data: any) => {
    return request('/park/building', 'POST', data)
}
// 修改接口
export const editApi=(data:any)=>{
    return request('/park/building', 'PUT', data)
}
// 删除接口       
export const delApi=(data:any)=>{
    return request(`/park/building/${data}`,'DELETE')
}         
