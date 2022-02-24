import { ChakraProps, Heading, Text, VStack, Wrap } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

const NextImage = chakra(Image);

interface Section3CardProps extends ChakraProps {
  num: number;
  title: string;
  image: StaticImageData;
  children: string;
}
export default function Section3Card({ num, title, image, children }: Section3CardProps) {
  function numberWithPlace(s: number) {
    const n = String(s); //문자열 변환
    const width = 2;
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }
  return (
    <Wrap
      w="100%"
      h="100%"
      position="relative"
      m="0px"
      spacing={0}
      bg={`linear-gradient(rgba(29, 49, 87, 0.64),rgba(29, 49, 87, 0.64))`}
      _hover={{ bg: `linear-gradient(rgba(29, 49, 87, 0.8),rgba(29, 49, 87, 0.8) )` }}
    >
      <VStack spacing={2} w="100%" p="30px">
        <Heading as="h4" w="100%" fontFamily="inter" fontSize="20px" color="white">
          {numberWithPlace(num)}.
        </Heading>
        <Heading as="h4" w="100%" fontFamily="inter" fontSize="20px" color="white">
          {title}
        </Heading>
        <Text w="100%" fontFamily={'Ubuntu'} fontSize={16} color="white">
          {children}
        </Text>
      </VStack>

      <NextImage zIndex={-1} src={image} layout="fill" objectFit="cover" quality={40} alt={`${num}pic`} />
    </Wrap>
  );
}
