import { Box, Button, ChakraProps, Heading, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chakra } from '@chakra-ui/react';
import Image from 'next/image';
import bg7 from 'public/images/wp-content/10.webp';
import bg8 from 'public/images/wp-content/pexels-ketut-subiyanto-4350225.webp';
import bg9 from 'public/images/wp-content/service-4.jpg';
import bg10 from 'public/images/wp-content/service-5.jpg';
import bg11 from 'public/images/wp-content/6.webp';
import bg12 from 'public/images/wp-content/7.webp';
import bg13 from 'public/images/wp-content/8.webp';
import bg14 from 'public/images/wp-content/9.webp';
import bg15 from 'public/images/wp-content/service-8.jpg';
import bg16 from 'public/images/wp-content/13.webp';
import bg17 from 'public/images/wp-content/11.webp';
import bg18 from 'public/images/wp-content/12.webp';
import bg19 from 'public/images/wp-content/service-3.jpg';

const NextImage = chakra(Image);

//============  Section3  ==========//
interface Section3CardProps extends ChakraProps {
  num: number;
  title: string;
  image: StaticImageData;
  children: string;
}
function Section3Card({ num, title, image, children }: Section3CardProps) {
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

      <NextImage zIndex={-1} src={image} layout="fill" objectFit="cover" />
    </Wrap>
  );
}

export default function Section3() {
  return (
    <Stack w="100%" maxW="1280px" m="0px auto 20px" p="0px 20px" spacing={0} border="none">
      {/* //=== header ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Box p="0px" w="100%" bg="white" h="auto" maxH="210px" overflow="auto">
          <Heading as="h2" fontFamily="PlayFair Display" fontSize="2em">
            Indental Clinic Services
          </Heading>
          <Text m="20px 0px" fontFamily="Muli" fontSize="1.125rem">
            One Stop Solution untuk kesehatan dan kecantikan gigi Anda
            <Box float="right" w="150px" h="150px" bg="url('images/wp-content/dots.png') no-repeat center center / cover" position="relative" top="-8vh" />
          </Text>
        </Box>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={1} title="Perawatan Gigi Umum" image={bg7}>
            Pemeriksaan gigi, tambal gigi, scaling, dan konsultasi gigi secara umum.
          </Section3Card>
          <Section3Card num={2} title="Behel Gigi" image={bg8}>
            Perawatan behel/kawat gigi oleh dokter gigi spesialis ortodonti profesional.
          </Section3Card>
        </Stack>
      </Stack>
      {/* //=== row ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={3} title="Scaling Gigi" image={bg19}>
            Pembersihan karang gigi untuk atasi bau mulut, gigi kuning, dan gusi berdarah.
          </Section3Card>
          <Section3Card num={4} title="Veneer Gigi" image={bg9}>
            Perawatan restorasi gigi untuk atasi gigi bercelah, berbeda warna, patah, dll.
          </Section3Card>
        </Stack>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={5} title="Operasi Gigi" image={bg10}>
            Operasi gigi geraham bungsu impaksi oleh dokter gigi spesialis bedah mulut.
          </Section3Card>
          <Section3Card num={6} title="Gigi Tiruan" image={bg11}>
            Gigi tiruan cekat & lepasan oleh dokter gigi spesialis prostodonti profesional.
          </Section3Card>
        </Stack>
      </Stack>

      {/* //=== row ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={7} title="Implan Gigi" image={bg12}>
            PeImplan adalah opsi perawatan gigi palsu permanen dengan daya tahan tinggi.
          </Section3Card>
          <Section3Card num={8} title="Whitening" image={bg13}>
            Solusi bagi gigi yang kuning dan kusam agar kembali putih, cerah dan cemerlang.
          </Section3Card>
        </Stack>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={9} title="Perawatan Gigi Anak" image={bg14}>
            Jaga kesehatan gigi si kecil sejak dini bersama dokter gigi spesialis gigi anak.
          </Section3Card>
          <Section3Card num={10} title="Perawatan Saluran Akar" image={bg15}>
            Perawatan saluran akar untuk atasi kerusakan dan infeksi di syaraf pada gigi.
          </Section3Card>
        </Stack>
      </Stack>

      {/* //=== footer ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={11} title="Gum Lifting" image={bg17}>
            Perbaiki estetika senyuman dengan membentuk gusi atau memanjangkan mahkota gigi.
          </Section3Card>
          <Section3Card num={12} title="Berbagai macam aksesoris gigi" image={bg18}>
            Percantik estetika senyuman dengan beragam pilihan aksesoris dan berlian gigi.
          </Section3Card>
        </Stack>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={13} title="Cosmetic Contouring" image={bg16}>
            Sempurnakan senyuman dengan mengubah bentuk & permukaan gigi secara menyeluruh.
          </Section3Card>
          <VStack w="100%" bg="#275c88" h="auto" borderBottomRightRadius="300px" p="0px" alignItems="left">
            <Text fontSize="0.9rem" letterSpacing="2px" mt="30px" ml="30px" color="white" fontWeight={600}>
              <FontAwesomeIcon icon={['fas', 'calendar-days']} />
              <Box ml="5px" display="inline">
                INFORMASI JADWAL DOKTER
              </Box>
            </Text>
            <Box w="100%" h="100%">
              <Button
                mt={['20px', '40px']}
                ml="30px"
                mb="30px"
                bg="#DD4949"
                p="16px 24px"
                w="116px"
                h="auto"
                color="white"
                fontSize="15px"
                fontFamily="inter"
                _hover={{ transform: 'scale(1.1)', transition: '0.3s', opacity: 1, bg: '#d81212' }}
              >
                Klic Disini
              </Button>
            </Box>
          </VStack>
        </Stack>
      </Stack>
    </Stack>
  );
}
