import { Box, Button, Center, Heading, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import LandingTemplate from 'components/templates/LandingTemplate';
import Whatsapp from 'components/icons/System/Whatsapp';

function Section1() {
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
      <Stack direction={['column', 'row']} w="100%" p="104px 20px 160px">
        <VStack>
          <Heading w="100%" as="h2" fontFamily="PlayFair Display" fontSize={25}>
            Welcome to Indental Clinic Surabaya
          </Heading>
          <Text fontFamily="Ubuntu" fontSize={16} color="#5A5A5A">
            Indental Clinic Surabaya adalah <strong>One Stop Clinic</strong> dimana pasien tidak perlu repot-repot mencari dokter gigi spesialis penunjang yang
            dibutuhkan untuk kasusnya. Karena dokter gigi spesialis yang dibutuhkan ada dalam satu tempat dan semua kasus gigi dapat dirawat dalam satu atap
            sehingga perawatan menjadi lebih terkoordinasi, lebih cepat dan lebih baik.
          </Text>
        </VStack>
        <Box>hihihih</Box>
      </Stack>
    </LandingTemplate>
  );
}
