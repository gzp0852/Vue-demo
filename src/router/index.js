import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['../pages/Home/home'], resolve)
const Login = resolve => require(['../pages/Login/logina'], resolve)
const Style = resolve => require(['../pages/Style/style'], resolve)
const Content = resolve => require(['../pages/Style/content'], resolve)
const Show = resolve => require(['../pages/Style/show'], resolve)
const Buy = resolve => require(['../pages/Style/buy'], resolve)
const Good = resolve => require(['../pages/Style/good'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/style',
      name: 'style',
      component: Style,
      children: [{
        path: 'content/:id',
        name: 'content',
        component: Content
      },
      {
        path: 'show',
        name: 'show',
        component: Show
      },
      {
        path: 'buy',
        name: 'buy',
        component: Buy
      },
      {
        path: 'good',
        name: 'good',
        component: Good
      }
      ]
    }
  ]
})
