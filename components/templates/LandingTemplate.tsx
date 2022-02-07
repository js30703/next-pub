import { Box, Center, ChakraProps } from '@chakra-ui/react';
import NavHeader from 'components/organisms/NavHeader';
import React from 'react';
interface LandingTemplate extends ChakraProps {
  children: JSX.Element;
}

export default function LandingTemplate({ children, ...props }: LandingTemplate) {
  return (
    <Box w="100%" minH="100vh">
      <Center>
        <NavHeader maxW={1024} />
      </Center>
      {children}
    </Box>
  );
}
