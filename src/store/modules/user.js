import { loginApi, logoutApi, getInfoApi} from '@/api/user'
import {getToken, setToken, removeToken} from '@/utils/auth';
import { resetRouter } from '@/router'
// import { get } from 'core-js/core/dict';

const getDefaultState = () => {
    return {
    token:getToken(),
    name: '',
    avatar: ''
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state)=>{
        Object.assign(state,getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state,avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    login({ commit }, userInfo){
        console.log(111);
        const {username, password} = userInfo
        return new Promise((resolve,reject) => {
            loginApi({ username:username.trim(), password: password}).then(response => {
                const { data } = response
                //将token保存到state中
                commit('SET_TOKEN',data.token)
                //将token保存的cookies中
                setToken(data.token)
                resolve()
            }).catch(error=>{
                reject(error)
            })
        })
    },
    // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfoApi(state.token).then(response => {
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logoutApi(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}