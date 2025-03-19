import { SkillSetLang } from '@/app/dummy';
import ClickSpark from '@/components/organism/ClickSpark/ClickSpark';
import LetterGlitch from '@/components/organism/LetterGlitch/LetterGlitch';
import ShinyText from '@/components/organism/ShinyText/ShinyText';
import SkillLangCard from '@/components/organism/SkillLangCard/SkillLangCard';
import { StatusBadge } from '@/components/organism/status-badge';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const SectionHome = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 md:pb-60 pt-32" id="home">
      <StatusBadge />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-semibold mb-6 mt-10">
            Hello, I&apos;m Jey
          </h1>
          {/* <SplitText
            text=""
            className="text-[16px] text-white/70 font-light mt-4"
          /> */}

          <p className="text-[16px] text-white/70 font-light mt-4">
            Talented software development professional with experience in Web
            and Mobile applications also work with React Ecosystem.
          </p>

          <div className="flex gap-4 mt-20">
            <ClickSpark>
              <a href="/images/pdf/cv.pdf" download={'Muhammad Fajar Resume'}>
                <Button className="gap-2" variant={'default'}>
                  Download CV <ArrowDown className="w-4 h-4 animate-bounce" />
                </Button>
              </a>
            </ClickSpark>

            <ClickSpark>
              <a href="#about">
                <Button
                  variant={'ghost'}
                  className="bg-[#111] border border-[#353535] text-white"
                >
                  <ShinyText text="More about me" />
                </Button>
              </a>
            </ClickSpark>
          </div>

          <div className="flex gap-6 mt-5">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative md:w-full md:h-[292px] size-[290px]">
          <div className="aspect-square rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-3xl absolute -z-10" />
          <LetterGlitch
            glitchColors={['#2929a3', '#a64dff', '#2929a3']}
            glitchSpeed={50}
            centerVignette
            outerVignette={false}
            smooth
          />
        </div>
      </div>

      <div className="mt-20 relative overflow-x-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20"></div>
        <Marquee pauseOnHover>
          {SkillSetLang.map((item) => (
            <SkillLangCard
              key={item.name}
              name={item.name}
              imageUrl={item.imageUrl}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SectionHome;
