import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
import Category from '../views/Category/Category'
import Cart from '../views/Cart/Cart'
import Profile from '../views/Profile/Profile'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
   {
     path:"/home",
     name:"home",
     component:Home
   },
   {
    path:"/category",
    name:"category",
    component:Category
  },
  {
    path:"/cart",
    name:"cart",
    component:Cart
  },
  {
    path:"/profile",
    name:"profile",
    component:Profile
  }
  ]
})
