import { Box, ChakraProps } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import logo from 'public/images/logo.jpg';
type NavHeaderProps = ChakraProps;

export default function NavHeader({ ...props }: NavHeaderProps) {
  return (
    <Box w="100%" p="5px 20px" h="66px" {...props}>
      <Image width="120px" height="60px" src={logo} alt="logo" priority />
    </Box>
  );
}
