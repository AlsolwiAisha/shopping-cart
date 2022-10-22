
import Layout from '../components/layout'
import '../styles/globals.css'
import deleteFromArray from 'delete-from-array'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
