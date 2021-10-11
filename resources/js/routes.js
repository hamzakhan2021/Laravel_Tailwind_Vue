
import {createWebHistory, createRouter} from "vue-router";
import Home from './components/Home.vue';
import About from './components/About.vue';
// import CreateProduct from './components/CreateProduct.vue';
// import EditProduct from './components/EditProduct.vue';
 
export const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/About',
        component: About
    }
    // ,
    // {
    //     name: 'create',
    //     path: '/create',
    //     component: CreateProduct
    // },
    // {
    //     name: 'edit',
    //     path: '/edit/:id',
    //     component: EditProduct
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
console.log('sdf');
console.log(router);
export default router;