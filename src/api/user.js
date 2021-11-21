import request from '@/utils/request'

export function loginApi(data) {
  console.log("login api");
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfoApi(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logoutApi() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
