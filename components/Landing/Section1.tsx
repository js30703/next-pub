import { Box, Button, Heading, Text, VStack, Wrap, chakra } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import Whatsapp from 'components/Whatsapp';
import Image from 'next/image';
import bg1 from 'public/images/wp-content/Wafa-Okbah.webp';
import bg2 from 'public/images/wp-content/pexels-summer-breeze-2703766.webp';
import bg3 from 'public/images/wp-content/pexels-christian-diokno-5019878.webp';
import bg4 from 'public/images/wp-content/pexels-alex-green-5692264.webp';
import bg5 from 'public/images/wp-content/Family.webp';
import bg6 from 'public/images/wp-content/Couple.webp';

const NextImage = chakra(Image);
let myCounter = 0;
let timeout: any = null;

export default function Section1() {
  const imgList = [bg1, bg2, bg3, bg4, bg5, bg6];
  const ref = useRef(null);
  const [counter, setCounter] = useState(0);

  myCounter = counter;
  const startInterval = () => {
    timeout = setInterval(() => {
      setCounter((counter) => counter + 1);
      if (myCounter == 6) {
        setCounter(0);
      }
    }, 2.5 * 1000);
  };
  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <Wrap w="100%" h="100%" position="relative" m="0px" spacing={0}>
      <VStack
        m="0px !important"
        w="100%"
        minW="350px"
        bg="transparent"
        bgGradient={`linear-gradient(150deg,rgb(29, 156, 158, 0.5) 64%, rgb(167, 169, 172, 0.5) 77%)`}
      >
        <Heading
          w="100%"
          m={['60px auto 0px', '120px auto 0px', '180px auto 0px']}
          color="white"
          mb="15px"
          as="h1"
          p="0px 20px"
          fontFamily="Playfair Display"
          fontWeight={600}
          fontSize={[32, 45, 56, 60]}
          textAlign="center"
        >
          Indental Clinic Surabaya
        </Heading>
        <Text color="white" mb="100px" fontFamily="Muli" fontWeight="400px" fontSize={[18, 22, 36, 40]}>
          WonderfulLife with Beautiful Smile
        </Text>
        <Box mt={10} opacity="1">
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
        <Box mt={['80px', '120px', '240px']} w="100%" opacity={1}>
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#fff">
            <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
          </svg>
        </Box>
      </VStack>
      {imgList.map((img, index) => {
        if (index == 6) return;
        return (
          <Box
            key={index}
            zIndex={-1}
            position="absolute"
            m="0px"
            top="0px"
            left="0px"
            transition="opacity 0.5s ease-in-out"
            w="100%"
            opacity={index == counter ? 1 : 0}
            h="100%"
          >
            <NextImage src={img} layout="fill" objectFit="cover" quality={90} alt={`bg${index}`} priority />
          </Box>
        );
      })}
    </Wrap>
  );
}
