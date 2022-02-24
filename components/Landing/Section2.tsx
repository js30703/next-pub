import { Box, ChakraProps, Circle, Heading, Stack, Text, VStack, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section2LeftCard from './Section2LeftCard';

// import dynamic from 'next/dynamic';
// const Section2LeftCard = dynamic(() => import('./Section2LeftCard'));

export default function Section2() {
  return (
    <Stack direction={['column', 'row']} w="100%" p="104px 20px 160px" maxW="1280px" m="0px auto 20px">
      <VStack w={['100%', '50%']}>
        <Heading w="100%" as="h2" fontFamily="PlayFair Display" fontSize={25}>
          Welcome to Indental Clinic Surabaya
        </Heading>
        <Text fontFamily="Ubuntu" fontSize={16} color="#5A5A5A">
          Indental Clinic Surabaya adalah <strong>One Stop Clinic</strong> dimana pasien tidak perlu repot-repot mencari dokter gigi spesialis penunjang yang
          dibutuhkan untuk kasusnya. Karena dokter gigi spesialis yang dibutuhkan ada dalam satu tempat dan semua kasus gigi dapat dirawat dalam satu atap
          sehingga perawatan menjadi lebih terkoordinasi, lebih cepat dan lebih baik.
        </Text>
        <Section2LeftCard icon={['fas', 'clinic-medical']} title="Perawatan Oleh Dokter Gigi Spesialis">
          Mulai dari spesialis ortodonti (SpOrt), spesialis bedah mulut (SpBM), spesialis konservasi gigi (SpKG), spesialis prostodonti (SpPros), hingga
          spesialis kedokteran gigi anak (SpKGA).
        </Section2LeftCard>
        <Section2LeftCard icon={['fas', 'thumbs-up']} title="Dipercaya oleh 8.000+ pasien">
          Sejak 2011, Indental Clinic telah dipercaya oleh ribuan pasien untuk merawat permasalahan gigi dan mulut demi mewujudkan senyuman yang sempurna.
        </Section2LeftCard>
        <Section2LeftCard icon={['fas', 'fa-medkit']} title="Menerima Asuransi Kesehatan">
          Indental Clinic telah bekerjasama dengan berbagai asuransi kesehatan terkemuka, di antaranya seperti Admedika, Halodoc, Fullerton, BNI Life, BRI Life,
          Orix Indonesia Finance, dan lain-lain.
        </Section2LeftCard>
        <Section2LeftCard icon={['fas', 'fa-check']} title="Tetap buka pada hari Sabtu">
          Bagi Anda yang memiliki rutinitas padat di hari kerja, atau Anda yang mengalami kasus dental emergency, tak perlu khawatir karena Indental Clinic
          tetap BUKA pada hari Sabtu.
        </Section2LeftCard>
        <Box
          as="a"
          w="100%"
          p="10px"
          href="https://www.google.com/maps/place/Indental+Clinic+Surabaya/@-7.3024223,112.7591007,15z/data=!4m2!3m1!1s0x0:0x2968f60ef4e7d59d?sa=X&ved=2ahUKEwil9b76gIrwAhXRT30KHW7uCo8Q_BIwGXoECC0QBQ"
          color="#387dff"
          cursor="pointer"
        >
          <Box display="inline-block" mr="10px">
            <FontAwesomeIcon icon={['fas', 'location-dot']} />
          </Box>
          View On Google Map
        </Box>
      </VStack>
      <Flex w={['100%', '50%']} position="relative" height={['100%', 'auto']}>
        <Flex
          bg={[
            "url('images/wp-content/Perawatan-e1616944220783.webp') no-repeat top right / 300px ",
            "url('images/wp-content/Perawatan-e1616944220783.webp') no-repeat top right / 82% ",
            "url('images/wp-content/Perawatan-e1616944220783.webp') no-repeat center / 50%",
          ]}
          pt={['240px', '0px']}
          transition="background 0.6s"
          w="100%"
          h="100%"
        >
          <Flex w="100%" h="100%" bg="url('images/wp-content/dots.png') no-repeat center left / 170px ">
            <Flex
              bg="url('images/wp-content/Ruang-Konsultasi-dan-Perawatan.webp') no-repeat center center /cover"
              w="95%"
              m="0px auto"
              h="300px"
              alignSelf="flex-end"
              alignItems="flex-end"
            >
              <Flex w="100%" h="130px">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#fff">
                  <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                </svg>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
