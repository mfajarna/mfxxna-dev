'use client';

import SectionAbout from '@/components/sections/SectionAbout/SectionAbout';
import SectionHome from '@/components/sections/SectionHome/SectionHome';
import SectionProjects from '@/components/sections/SectionProjects/SectionProjects';
import SectionWorkExp from '@/components/sections/SectionWorkExp/SectionWorkExp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div className="px-28">
      <SectionHome />
      <SectionWorkExp />
      <SectionProjects />
      <SectionAbout />
    </div>
  );
}
