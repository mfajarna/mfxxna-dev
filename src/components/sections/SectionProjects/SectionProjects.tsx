'use client';

import { Projects } from '@/app/dummy';
import CardProjects from '@/components/organism/CardProjects/CardProjects';
import TitleSection from '@/components/organism/TitleSection/TitleSection';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';

const SectionProjects = () => {
  return (
    <section id="projects" className="border-t mt-[20rem]">
      <div className="max-w-6xl mx-auto mt-14">
        <TitleSection
          title="My Work"
          subtitle="Projects"
          desc="Creation showcase projects what i have done using any framework for the company"
        />

        <div className="mt-8" data-aos="flip-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {Projects.map((item, index) => (
              <CardProjects key={index} item={item} />
            ))}
          </div>
        </div>

        <Button
          data-aos="fade-up"
          className="w-full py-6 mt-10 rounded-full text-md bg-[#111] border border-[#353535] text-white/70 hover:bg-neutral-950 hover:text-white"
          onClick={() =>
            window.open(
              'https://github.com/mfajarna?tab=repositories',
              '_blank'
            )
          }
        >
          More projects on
          <GithubIcon />
        </Button>
      </div>
    </section>
  );
};

export default SectionProjects;
