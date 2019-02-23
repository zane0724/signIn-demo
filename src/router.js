import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import signInComponent from "./views/signIn"
import signOutComponent from "./views/signOut"


export default new Router({
  routes: [
    {path:'/',redirect:"/signIn"},
    {path:'/signIn',component:signInComponent},
    {path:'/signOut',component:signOutComponent}
  ]
})
