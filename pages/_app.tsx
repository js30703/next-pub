import type { AppProps } from 'next/app';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';

import { withChakraProvider } from 'styles/provider';

import Auth from '0auth-sdk';
import { useEffect } from 'react';

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

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);
  return (
    // Provide the client to your App

    <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      {/* <ToggleColorModeButton /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withChakraProvider(MyApp);
