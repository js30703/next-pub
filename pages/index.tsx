import { Box, Button, Center, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NavHeader from 'components/organisms/NavHeader';
import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import LandingTemplate from 'components/templates/LandingTemplate';
import Whatsapp from 'components/icons/System/Whatsapp';

function CardTop() {
  return (
    <VStack m={0} p={0} w="100%" opacity={0.8} bgGradient="linear-gradient(150deg,#1d9c9e 64%,#a7a9ac 77%)">
      <Heading mt="200px" color="white" mb="15px" as="h1" fontFamily="Playfair Display" fontWeight={600} fontSize={56}>
        Indental Clinic Surabaya
      </Heading>
      <Text color="white" mb="100px" fontFamily="Muli" fontWeight="400px" fontSize={22}>
        WonderfulLife with Beautiful Smile
      </Text>
      <Box mt={10}>
        <Button
          mt="100px"
          bgColor="#d81212"
          borderRadius="15px"
          fontFamily="Arial"
          fontSize="15px"
          color="white"
          _hover={{ transform: 'scale(1.1)', transition: '0.3s', opacity: 1 }}
        >
          <Whatsapp w={6} h={5} mr="5px" />
          Reservasi Sekarang
        </Button>
        <ChevronDownIcon color="white" m="0px auto" display="block" w={12} h={12} />
      </Box>
      <Box mt="240px" w="100%" bgColor="transparent">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#fff">
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>
      </Box>
    </VStack>
  );
}

export default function index() {
  return (
    <LandingTemplate>
      <HStack w="100%" p="104px 0 160px">
        <VStack w="50%">
          <Text>Welcome to Indental Clinic Surabaya</Text>
        </VStack>
        <Box w="50%"></Box>
      </HStack>
    </LandingTemplate>
  );
}
