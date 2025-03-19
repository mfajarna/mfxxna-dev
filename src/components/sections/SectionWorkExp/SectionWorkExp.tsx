'use client';

import AccordionWorkExp from '@/components/organism/AccordionWorkExp/AccordionWorkExp';
import TitleSection from '@/components/organism/TitleSection/TitleSection';

const SectionWorkExp = () => {
  return (
    <section id="workexp" className="border-t pt-4">
      <div className="max-w-6xl mx-auto pt-14 flex flex-col md:flex-row">
        <TitleSection
          title="Work History"
          subtitle="Experience"
          desc="I have worked with some of the most innovative industry leaders to
            help build their top-notch products."
        />

        <div className="w-full px-4" data-aos="fade-left">
          <AccordionWorkExp />
        </div>
      </div>
    </section>
  );
};

export default SectionWorkExp;
