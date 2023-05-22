import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '../../router/AppRoutes'
import { CartProvider } from '../../context'

import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'

function App () {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
