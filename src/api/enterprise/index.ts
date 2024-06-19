import request from '@/utils/request'
export const getEnterpriseList=(data:any)=>{
    return request('/park/enterprise','GET',data)
}
// /park/enterprise/rent/{id}
export const getEnterpriserent=(data:any)=>{
    return request(`/park/enterprise/rent/${data}`,'GET')
}