import React, { lazy, Suspense } from 'react';
import LandingTemplate from 'components/LandingTemplate';
// import { Spinner } from '@chakra-ui/react';
import Section1 from 'components/Landing/Section1';
// import Section2 from 'components/Landing/Section2';
// import Section3 from 'components/Landing/Section3';
// import Section4 from 'components/Landing/Section4';
// import Section5 from 'components/Landing/Section5';
import dynamic from 'next/dynamic';
// const Section1 = dynamic(() => import('components/Landing/Section1'));
const Section2 = dynamic(() => import('components/Landing/Section2'), { ssr: false });
const Section3 = dynamic(() => import('components/Landing/Section3'), { ssr: false });
const Section4 = dynamic(() => import('components/Landing/Section4'), { ssr: false });
const Section5 = dynamic(() => import('components/Landing/Section5'), { ssr: false });

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
