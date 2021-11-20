const state = {
    sidebar: {
        opened: true,
        withoutAnimation: false
    },
    device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state=>{
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
  }
}

const actions = {
    toggleSidebar({commit}){
        commit("TOGGLE_SIDEBAR")
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}