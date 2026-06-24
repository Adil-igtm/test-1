import './style/style.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.js'

// ⚠️ context обязателен даже в JS
const router = createRouter({
  routeTree,
  context: {}, 
})

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
