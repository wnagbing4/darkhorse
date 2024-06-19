//park/building
import request from '@/utils/request'
export const buildingApi = (data: any) => {
    return request('/api/park/building', 'GET', data)
}
export const AddApi = (data: any) => {
    return request('/api/park/building', 'POST', data)
}