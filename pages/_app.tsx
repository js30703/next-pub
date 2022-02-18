import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';

import { withChakraProvider } from 'styles/provider';
import ToggleColorModeButton from 'components/molecules/ToggleColorModeButton';

import Auth from '0auth-sdk';
import { useEffect } from 'react';

import { store } from 'store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { SITE_NAME } from './_document';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  fas,
  faR,
  faCheckSquare,
  faCoffee,
  faLocationDot,
  faCalendarDays,
  faClinicMedical,
  faHandHoldingMedical,
  faCalendarCheck,
  faCommentMedical,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  fas,
  faR,
  faCheckSquare,
  faCoffee,
  faLocationDot,
  faCalendarDays,
  faClinicMedical,
  faWhatsapp,
  faHandHoldingMedical,
  faCalendarCheck,
  faCommentMedical,
);

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);
  return (
    // Provide the client to your App
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
          <Head>
            <title>{SITE_NAME}</title>
          </Head>
          {/* <ToggleColorModeButton /> */}
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default withChakraProvider(MyApp);
