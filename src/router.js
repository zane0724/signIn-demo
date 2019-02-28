import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import signInComponent from "./views/signIn"
import homeComponent from "./views/home"
import signOutComponent from "./views/signOut"


export default new Router({
  routes: [
    {path:'/',redirect:"/signIn"},
    {path:'/signIn',component:signInComponent},
    {path:'/home',component:homeComponent},
    {path:'/signOut',component:signOutComponent}
  ]
})
