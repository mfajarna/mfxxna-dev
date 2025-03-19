import React from 'react';
import { PiStarFourBold } from 'react-icons/pi';
import ShinyText from '../ShinyText/ShinyText';

type TitleSectionProps = {
  title: string;
  subtitle: string;
  desc: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subtitle,
  desc,
}) => {
  return (
    <div data-aos="fade-right" className="pointer-events-none">
      <div className="inline-flex items-center mb-3">
        <PiStarFourBold className="mr-3 text-indigo-500" />

        <ShinyText text={title} className="text-indigo-500 text-lg" speed={2} />
      </div>
      <h3 className="text-5xl font-semibold">{subtitle}</h3>
      <div className="text-white/70 text-[14px] mt-3">{desc}</div>
    </div>
  );
};

export default TitleSection;
