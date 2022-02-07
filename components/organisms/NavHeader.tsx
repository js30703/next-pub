import { Box, ChakraProps, Image } from '@chakra-ui/react';
import React from 'react';
type NavHeaderProps = ChakraProps;

export default function NavHeader({ ...props }: NavHeaderProps) {
  return (
    <Box w="100%" p="5px 20px" h="66px" {...props}>
      <Image w="120px" src="images/logo.jpg" />
    </Box>
  );
}
