import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const HomeAPP = () => import('./components/Home.vue');
const ProductsAPP = () => import('./components/Products.vue');
const UpdateProfileApp = () => import('./components/UpdateProfile.vue');
const ProfileApp = () => import('./components/Profile.vue');
const DashboardApp = () => import('./components/Dashboard/Dashboard.vue');
const UsersAPP = () => import('./components/Dashboard/Users/Users.vue');
const UpdateUser = () => import('./components/Dashboard/Users/Update.vue');
const DetailsAPP = () => import('./components/Dashboard/Users/Details.vue');
const AllProductApp = () => import('./components/Dashboard/Products/AllProduct.vue');
const CreateProductApp = () => import('./components/Dashboard/Products/CreatProduct.vue');
const UpdateProductApp = () => import('./components/Dashboard/Products/UpdateProduct.vue');
const LoginApp = () => import('./components/Login.vue');
const SignUpApp = () => import('./components/Signup.vue');
const DetailsProductApp = () => import('./components/DetailsProduct.vue');
const CartApp = () => import('./components/Cart.vue');
const PaymentApp = () => import('./components/payment.vue');
const NotFoundApp = () => import('./components/NotFound.vue');







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
