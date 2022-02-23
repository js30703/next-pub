import { Box, Button, Center, ChakraProps, Circle, Heading, Stack, Text, VStack, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import LandingTemplate from 'components/templates/LandingTemplate';
import Whatsapp from 'components/icons/System/Whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useSelector, useDispatch } from 'react-redux';
// import { count } from 'store/section1Slice';
// import { RootState } from 'store';

//============Section 1==========//
let myCounter = 0;
let timeout: any = null;

function Section1() {
  const imgList = [
    'Wafa-Okbah.webp',
    'pexels-summer-breeze-2703766.webp',
    'pexels-christian-diokno-5019878.webp',
    'pexels-alex-green-5692264.webp',
    'Family.webp',
    'Couple.webp',
    'Couple.webp',
  ];
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
      <VStack m="0px !important" w="100%" minW="350px" bg="transparent">
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
      {imgList.map((url, index) => {
        if (index == 6) return;
        return (
          <WrapItem
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
            bg={`linear-gradient(150deg,rgb(29, 156, 158, 0.5) 64%, rgb(167, 169, 172, 0.5) 77%), url(images/wp-content/${url}) no-repeat center center / cover`}
          ></WrapItem>
        );
      })}
    </Wrap>
  );
}

//============Section 2==========//
interface Section2LeftCardProps extends ChakraProps {
  title: string;
  icon: any;
  children: string;
}

function Section2LeftCard({ title, icon, children, ...props }: Section2LeftCardProps) {
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

function Section2() {
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
            "url('images/wp-content/Perawatan-e1616944220783.webp') no-repeat top right / 82% ",
            "url('images/wp-content/Perawatan-e1616944220783.webp') no-repeat top right / 82% ",
            "url('images/wp-content/Perawatan-e1616944220783.webp') no-repeat center / 62%",
          ]}
          pt={['240px', '0px']}
          transition="background 0.6s"
          w="100%"
          h="100%"
        >
          <Flex w="100%" h="100%" bg="url('images/wp-content/dots.png') no-repeat center left / 170px ">
            <Flex
              bg="url('images/wp-content/Ruang-Konsultasi-dan-Perawatan.webp') no-repeat center center /cover"
              w={['72%', '72%', '100%']}
              h="360px"
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

//============  Section3  ==========//
interface Section3CardProps extends ChakraProps {
  num: number;
  title: string;
  image: string;
  children: string;
}
function Section3Card({ num, title, image, children }: Section3CardProps) {
  function numberWithPlace(s: number) {
    const n = String(s); //문자열 변환
    const width = 2;
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }
  return (
    <VStack
      spacing={2}
      w="100%"
      p="30px"
      h="auto"
      bg={`linear-gradient(rgba(29, 49, 87, 0.64),rgba(29, 49, 87, 0.64)) , url(/images/wp-content/${image}) no-repeat center center / cover`}
      _hover={{ bg: `linear-gradient(rgba(29, 49, 87, 0.8),rgba(29, 49, 87, 0.8) ), url(/images/wp-content/${image}) no-repeat center center / cover` }}
    >
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
  );
}

function Section3() {
  return (
    <Stack w="100%" maxW="1280px" m="0px auto 20px" p="0px 20px" spacing={0} border="none">
      {/* //=== header ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Box p="0px" w="100%" bg="white" h="100%" maxH="210px" overflow="auto">
          <Heading as="h2" fontFamily="PlayFair Display" fontSize="2em">
            Indental Clinic Services
          </Heading>
          <Text m="20px 0px" fontFamily="Muli" fontSize="1.125rem">
            One Stop Solution untuk kesehatan dan kecantikan gigi Anda
            <Box float="right" w="150px" h="150px" bg="url('images/wp-content/dots.png') no-repeat center center / cover" position="relative" top="-8vh" />
          </Text>
        </Box>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={1} title="Perawatan Gigi Umum" image="10.webp">
            Pemeriksaan gigi, tambal gigi, scaling, dan konsultasi gigi secara umum.
          </Section3Card>
          <Section3Card num={2} title="Behel Gigi" image="pexels-ketut-subiyanto-4350225.webp">
            Perawatan behel/kawat gigi oleh dokter gigi spesialis ortodonti profesional.
          </Section3Card>
        </Stack>
      </Stack>
      {/* //=== row ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={3} title="Scaling Gigi" image="service-3.jpg">
            Pembersihan karang gigi untuk atasi bau mulut, gigi kuning, dan gusi berdarah.
          </Section3Card>
          <Section3Card num={4} title="Veneer Gigi" image="service-4.jpg">
            Perawatan restorasi gigi untuk atasi gigi bercelah, berbeda warna, patah, dll.
          </Section3Card>
        </Stack>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={5} title="Operasi Gigi" image="service-5.jpg">
            Operasi gigi geraham bungsu impaksi oleh dokter gigi spesialis bedah mulut.
          </Section3Card>
          <Section3Card num={6} title="Gigi Tiruan" image="6.webp">
            Gigi tiruan cekat & lepasan oleh dokter gigi spesialis prostodonti profesional.
          </Section3Card>
        </Stack>
      </Stack>

      {/* //=== row ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={7} title="Implan Gigi" image="7.webp">
            PeImplan adalah opsi perawatan gigi palsu permanen dengan daya tahan tinggi.
          </Section3Card>
          <Section3Card num={8} title="Whitening" image="8.webp">
            Solusi bagi gigi yang kuning dan kusam agar kembali putih, cerah dan cemerlang.
          </Section3Card>
        </Stack>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={9} title="Perawatan Gigi Anak" image="9.webp">
            Jaga kesehatan gigi si kecil sejak dini bersama dokter gigi spesialis gigi anak.
          </Section3Card>
          <Section3Card num={10} title="Perawatan Saluran Akar" image="service-8.jpg">
            Perawatan saluran akar untuk atasi kerusakan dan infeksi di syaraf pada gigi.
          </Section3Card>
        </Stack>
      </Stack>

      {/* //=== footer ==// */}
      <Stack w="100%" direction={['column', 'column', 'row']} spacing={0} border="none">
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={11} title="Gum Lifting" image="11.webp">
            Perbaiki estetika senyuman dengan membentuk gusi atau memanjangkan mahkota gigi.
          </Section3Card>
          <Section3Card num={12} title="Berbagai macam aksesoris gigi" image="12.webp">
            Percantik estetika senyuman dengan beragam pilihan aksesoris dan berlian gigi.
          </Section3Card>
        </Stack>
        <Stack w="100%" direction={['column', 'row']} spacing={0} border="none">
          <Section3Card num={13} title="Cosmetic Contouring" image="13.webp">
            Sempurnakan senyuman dengan mengubah bentuk & permukaan gigi secara menyeluruh.
          </Section3Card>
          <VStack w="100%" bg="#275c88" h="auto" borderBottomRightRadius="300px" p="30px" alignItems="left">
            <Text fontSize="0.9rem" letterSpacing="2px" color="white" fontWeight={600}>
              <FontAwesomeIcon icon={['fas', 'calendar-days']} />
              <Box ml="5px" display="inline">
                INFORMASI JADWAL DOKTER
              </Box>
            </Text>
            <Button
              mt={['20px', '40px']}
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
          </VStack>
        </Stack>
      </Stack>
    </Stack>
  );
}
//============  Section4  ==========//

function Section4() {
  return (
    <Stack direction={['column', 'row']} w="100%" minH="100%" bg="linear-gradient(90deg,#1d9c9e 80%,rgba(56,125,255,0) 80%)" p="30px 10px">
      <VStack maxW="60%" minH="100%" color="white" spacing={2} m="0px">
        <Text w="100%" textAlign="right">
          <Box mr={2} display="inline-block">
            <FontAwesomeIcon icon={['fas', 'clinic-medical']} />
          </Box>
          OPENING HOURS
        </Text>
        <Text w="100%" fontFamily="inter" fontSize={24} fontWeight={600} textAlign="right">
          MON - FRI | 9 AM - 9 PM
        </Text>
        <Text w="100%" fontFamily="inter" fontSize={24} fontWeight={600} textAlign="right">
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

//============  Section5  ==========//
function Section5() {
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
        <Flex
          ml="auto"
          mt="auto"
          w="320px"
          h="512px"
          bg="url('images/wp-content/drg-Iin-Nurwasis-Sp-Ort.webp') no-repeat center center / cover"
          borderBottomRadius="200px"
        ></Flex>
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

//============  index  ==========//
export default function index() {
  return (
    <LandingTemplate>
      <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </>
    </LandingTemplate>
  );
}
