import '../styles/globals.css'
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </Layout>
    </QueryClientProvider>
  )
}