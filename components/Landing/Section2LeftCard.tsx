import { Box, ChakraProps, Circle, Heading, Stack, Text, VStack, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Section2LeftCardProps extends ChakraProps {
  title: string;
  icon: any;
  children: string;
}

export default function Section2LeftCard({ title, icon, children, ...props }: Section2LeftCardProps) {
  return (
    <Stack direction={['column', 'row']} w="100%" pt={[3, 8]} pr={[0, 7]} {...props}>
      <Box minH="100%" justifyContent={['center', 'flex-start']} alignItems={['center', 'flex-start']} pr={1}>
        <Circle m={['20px auto', '0px']} p="8px 2px 10px 3px" w="49px" h="49px" fontSize="30px" bgColor="rgba(56,125,255,.08)" color="#1d9c9e">
          <FontAwesomeIcon icon={icon} />
        </Circle>
      </Box>
      <VStack>
        <Heading w="100%" fontSize={20} fontFamily="inter">
          {title}
        </Heading>
        <Text w="100%">{children}</Text>
      </VStack>
    </Stack>
  );
}
