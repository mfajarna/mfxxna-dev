'use client';

import { TProjects } from '@/app/dummy';
import Image from 'next/image';
import React from 'react';
import { WiStars } from 'react-icons/wi';
import SpotlightCard from '../SpotlightCard/SpotlightCard';

type CardProjectsProps = {
  item: TProjects;
};

const CardProjects: React.FC<CardProjectsProps> = ({ item }) => {
  return (
    <div className="transition-all">
      <SpotlightCard
        className="w-full py-5 hover:scale-105"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <WiStars className="w-14 h-14 text-indigo-500" />

        <Image
          src={item.image}
          alt="work"
          width={1000}
          height={1000}
          className="rounded-md mt-2"
        />

        <div className="mt-4">
          <div className="text-2xl font-semibold">{item.name}</div>
          <div className="text-sm text-white/70">{item.status}</div>
        </div>

        <div className="inline-flex items-center gap-2 mt-2">
          {item.techStack.map((techStack, index) => (
            <techStack.logo key={index} />
          ))}
        </div>
      </SpotlightCard>
    </div>
  );
};

export default CardProjects;
