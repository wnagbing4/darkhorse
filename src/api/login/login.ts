import request from '@/utils/request'
import type { loginParamsType,ApifoxModel } from './loginType'
// 登录

export const login = (data: loginParamsType) => {
	return request('/api/park/login', 'POST', data)
}
export const getMenuList = (data?: any) => {
	return request('/api/park/user/router', 'GET', data)
}
export const getUserInfo = (data?: any) => {
	return request('/api/park/user/profile', 'GET', data)
}
// /home/workbench/info
export const getWorkbenchInfo = (data?: any) => {
	return request('/api/home/workbench/info', 'GET', data)
}
export const getInfoList=(data:any)=>{
	return request('/api/home/workbench/rentInfo', 'GET',data)
}