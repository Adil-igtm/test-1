import tanstackRouter from "@tanstack/router-plugin/vite";
import Home from "./pages/Home";
import Products from "./pages/Products";
import path from "node:path";
import { Component } from "lucide-react";
// import{
//     RouterProvider,
//     createRoute,
//     createRouter,
//     createRootRoute,
// }from @tanstack/react-router

const rootRoute=createRootRoute

const homeRoute=createRoute({
    getParentRoute:()=> rooteRoute,
    path:"/",
    Component:Home,
})

const productsRoute=createRoute({
    getParentRoute:()=> rooteRoute,
    path:"/products",
    Component:Products,
})

const routeTree=rootRouter([
    homeRoute,
    productsRoute
])

const router= createRouter({
    routeTree,
})

export default function App(){
    return( <RootProvider router={router}/>)
}