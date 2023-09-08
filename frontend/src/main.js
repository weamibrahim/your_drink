import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomeAPP from './components/Home.vue'
import ProductsAPP from './components/Products.vue'



import UpdateProfileApp from './components/UpdateProfile.vue'
import ProfileApp from './components/Profile.vue'

// dashboard
import DashboardApp from './components/Dashboard/Dashboard.vue'

import UsersAPP from './components/Dashboard/Users/Users.vue'

import UpdateUser from './components/Dashboard/Users/Update.vue'
import DetailsAPP from './components/Dashboard/Users/Details.vue'

import AllProductApp from './components/Dashboard/Products/AllProduct.vue'
import CreateProductApp from './components/Dashboard/Products/CreatProduct.vue'
import UpdateProductApp from './components/Dashboard/Products/UpdateProduct.vue'

import LoginApp from './components/Login.vue'
import SignUpApp from './components/Signup.vue'
import DetailsProductApp from './components/DetailsProduct.vue'
import CartApp from './components/Cart.vue'
import PaymentApp from './components/payment.vue'
import NotFoundApp from './components/NotFound.vue'


//const app = createApp(App);
const routes = [

  { path: '/', component: HomeAPP, alias: '/home' },
  { path: '/products', component: ProductsAPP },
  
  

 



  {path:'/profile',component:ProfileApp},
  {path:'/update',component:UpdateProfileApp},

  {path:'/dashboard',component:DashboardApp},
  {path:'/dashboard/allproduct',component:AllProductApp},
  {path:'/dashboard/createproduct',component:CreateProductApp},
  {path:'/dashboard/updateproduct/:id',component:UpdateProductApp},

  { path: '/dashboard/users', component: UsersAPP},
 
  {path:'/dashboard/update/:id',component:UpdateUser},
  { path: '/dashboard/users/:id', component: DetailsAPP },

   {path:'/login',component:LoginApp},
   {path:'/signup',component:SignUpApp},
   {path:'/product/:id',component:DetailsProductApp},
   {path:'/cart',component:CartApp },
   {path:'/payment',component:PaymentApp},
   {path:'/:catchAll(.*)',component:NotFoundApp}

              ]
// Define the user role globally











const router = createRouter({
  history: createWebHistory(),
  routes
               })


              // Initialize as an empty string
               router.beforeEach((to, from, next) => {
                 const isAdmin = JSON.parse(localStorage.getItem('userData'))?.role === 'admin';
               
                 if (to.path.startsWith('/dashboard') && !isAdmin) {
                   next('/unauthorized'); // Redirect to an "Unauthorized" page
                 } else {
                   next(); // Allow access to the route
                 }
               });              

createApp(App).use(router).mount('#app')
