import { Box, Heading, Stack, Text, VStack, Flex, chakra } from '@chakra-ui/react';
import bg from 'public/images/wp-content/drg-Iin-Nurwasis-Sp-Ort.webp';
import Image from 'next/image';
const NextImage = chakra(Image);

export default function Section5() {
  return (
    <Stack w="100%" h="100%" maxW="1280px" m="0px auto" direction={['column-reverse', 'row']} p="10px">
      <Flex
        w="100%"
        maxW="530px"
        minH="680px"
        m="0px auto"
        p="10px"
        h="auto"
        bg="url('images/wp-content/service-6.jpg') no-repeat top 20px left 20px /320px 500px"
        opacity={0.98}
      >
        <Flex pos="relative" ml="auto" mt="auto" w="320px" h="512px" borderBottomRadius="200px">
          <NextImage src={bg} borderBottomRadius="200px" alt="drg_inn" />
        </Flex>
      </Flex>
      <VStack w="100%" spacing="20px" p="10px">
        <Heading w="100%" as="h4">
          Committed To Dental Excellence
        </Heading>
        <Heading w="100%" as="h5" fontFamily="inter" fontSize="21px" fontWeight="600">
          Wonderful Life with Beautiful Smile
        </Heading>
        <Text w="100%" fontFamily="Ubuntu" fontSize="16px" color="#5A5A5A">
          Banyak orang menganggap bahwa perawatan gigi bukanlah suatu prioritas bila dibandingkan dengan perawatan kesehatan lainnya.{' '}
          <strong>Padahal, kesehatan gigi sangatlah penting, baik dari segi fungsional maupun estetika.</strong>
        </Text>
        <Text w="100%" fontFamily="Ubuntu" fontSize="16px" color="#5A5A5A">
          Berdasarkan berbagai penelitian, masalah pada gigi dan gusi diketahui dapat memicu penyakit lain yang lebih serius, seperti gangguan pencernaan,
          penyakit jantung, diabetes, demensia, gangguan kehamilan, stroke, dan lain-lain.
        </Text>
        <Text w="100%" fontFamily="Ubuntu" fontSize="16px" color="#5A5A5A">
          Di samping itu, gigi yang bermasalah tentu juga akan berdampak buruk pada penampilan. Bau mulut, warna gigi yang kekuningan, gigi tonggos, gigi
          ompong, hanyalah sebagian kecil dari bagaimana kondisi gigi dapat mempengaruhi kepercayaan diri Anda.
        </Text>
        <Text w="100%" fontFamily="Ubuntu" fontSize="16px" color="#5A5A5A">
          Karena itulah, Indental Clinic berkomitmen untuk selalu memberikan perawatan kesehatan gigi dan mulut terbaik bagi para pasien kami. Lebih lanjut,
          Indental Clinic juga akan terus meningkatkan kesadaran masyarakat tentang kesehatan gigi dan mulut melalui pelayanan konsultasi di Indental Clinic dan
          edukasi di berbagai platform media sosial yang kami miliki.
        </Text>
        <Box w="100%">
          <Heading w="100%" as="h5" fontFamily="inter" fontSize="21px" fontWeight="600">
            drg. Iin Nurwasis, Sp. Ort
          </Heading>
          <Text w="100%" fontFamily="Ubuntu" fontSize="16px" color="#5A5A5A">
            Direktur Indental Clinic
          </Text>
        </Box>
      </VStack>
    </Stack>
  );
}
