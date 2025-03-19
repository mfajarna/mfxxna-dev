import { TSkillSetLangs } from '@/app/dummy';
import Image from 'next/image';
import React from 'react';

const SkillLangCard: React.FC<TSkillSetLangs> = ({ name, imageUrl }) => {
  return (
    <div className="inline-flex gap-1.5 items-center mr-10 opacity-55">
      <Image
        src={imageUrl}
        width={35}
        height={35}
        alt={name}
        className="hover:scale-110"
      />

      <span className="text-lg">{name}</span>
    </div>
  );
};

export default SkillLangCard;
