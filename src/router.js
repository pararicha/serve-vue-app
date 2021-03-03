import Router from 'vue-router'
import Sum from './components/Sort.vue'
//import Abc from "./components/Abc.vue"
import todo from "./components/todo.vue"
import bubble from "./components/bubble.vue"
import WordCount from "./components/wordcount.vue"
import LoginPage from "./components/loginPage.vue"
import Main from "./components/main.vue"
import EXP1 from "./components/exp1.vue"
import homepage from "./components/homepage.vue"
import Vue from 'vue'
import longestWord from "./components/longestWord.vue"
import confirmEnding from "./components/confirmEnding"
import repeatString from "./components/repeatString"

Vue.use(Router)
export default new Router(
  {
      
    mode: "history",
    routes : [

      //{path:'/', component:Abc,name:"home"},
      {path:'/serve-vue-app/', component:LoginPage,name:"LoginPage"},
      {path:'/serve-vue-app/repeatString',component:repeatString,name:"repeatString"},
      {path:'/serve-vue-app/longestWord', component:longestWord,name:"longestWord"},
      {path:'/serve-vue-app/confirmEnding',component:confirmEnding,name:"confirmEnding"},
      {path:'/serve-vue-app/homepage',component:homepage,name:"homepage"},
      {path:'/serve-vue-app/Sum', component:Sum,name:"Sum"},
      {path:'/serve-vue-app/output', component:todo,name:"todo",props: true},
      {path:'/serve-vue-app/bubble', component:bubble,name:"bubble"},
      {path:'/serve-vue-app/WordCount', component:WordCount,name:"WordCount"},
      {path:'/serve-vue-app/Main', component:Main,name:"Main"},
      {path:'/serve-vue-app/EXP1', component:EXP1,name:"EXP1"},


    ]
  }
)