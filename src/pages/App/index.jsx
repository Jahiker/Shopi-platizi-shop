import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '../../router/AppRoutes'

import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
