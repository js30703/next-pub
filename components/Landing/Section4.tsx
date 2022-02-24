import { Box, Button, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import Whatsapp from 'components/Whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Section4() {
  return (
    <Stack direction={['column', 'row']} w="100%" minH="100%" bg="linear-gradient(90deg,#1d9c9e 80%,rgba(56,125,255,0) 80%)" p="30px 10px">
      <VStack maxW="60%" minH="100%" color="white" spacing={2} m="0px">
        <Text w="100%" textAlign="right">
          <Box mr={2} display="inline-block">
            <FontAwesomeIcon icon={['fas', 'clinic-medical']} />
          </Box>
          OPENING HOURS
        </Text>
        <Text w="100%" fontFamily="inter" fontSize={['14px', '20px']} fontWeight={600} textAlign="right">
          MON - FRI | 9 AM - 9 PM
        </Text>
        <Text w="100%" fontFamily="inter" fontSize={['14px', '20px']} fontWeight={600} textAlign="right">
          SAT | 9 AM - 5 PM
        </Text>
        <Heading as="h3">Perawatan Nyaman di Indental Clinic</Heading>
        <Text w="100%" textAlign="left">
          <Box display="inline-block" mr={2}>
            <FontAwesomeIcon icon={['fas', 'hand-holding-medical']} />
          </Box>
          10 Protokol Kesehatan
        </Text>
        <Text w="100%" textAlign="left">
          <Box display="inline-block" mr={2}>
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </Box>
          Reservasi via Whatsapp
        </Text>
        <Text w="100%" textAlign="left">
          <Box display="inline-block" mr={2}>
            <FontAwesomeIcon icon={['fas', 'calendar-check']} />
          </Box>
          Tetap buka hari Sabtu
        </Text>
        <Text w="100%" textAlign="left">
          <Box display="inline-block" mr={2}>
            <FontAwesomeIcon icon={['fas', 'comment-medical']} />
          </Box>
          Konsultasi Online
        </Text>
      </VStack>
      <Center w="100%" h="auto" pt={[2, 50]}>
        <Button
          m="0px auto"
          p="10px"
          bgColor="#d81212"
          borderRadius="15px"
          fontFamily="Arial"
          fontSize="20px"
          color="white"
          _hover={{ transform: 'scale(1.1)', transition: '0.3s', opacity: 1 }}
        >
          <Whatsapp w={6} h={5} mr="5px" />
          Reservasi Sekarang
        </Button>
        <Box float="right" w="150px" h="150px" bg="url('images/wp-content/dots.png') no-repeat bottom right / cover" position="relative"></Box>
      </Center>
    </Stack>
  );
}
