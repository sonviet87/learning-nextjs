import { EmptyLayout } from '@/components/layout/empty'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {createEmotionCache,theme }from '@/utility/index';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
      <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
      </CacheProvider>
  )

}
