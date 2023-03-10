import { Routes } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'

import './styles/global.css'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
