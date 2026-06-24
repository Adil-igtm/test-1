import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import App from '../App'

export const Route = createFileRoute('/')({
  component: App
})

