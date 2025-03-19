import { IconType } from 'react-icons';
import { RiNextjsLine, RiTailwindCssLine } from 'react-icons/ri';

export type TSkillSetLangs = {
  name: string;
  imageUrl: string;
};

export type TWorkExperience = {
  title: string;
  company: string;
  period: string;
  description: { job: string }[];
};

export type TProjects = {
  name: string;
  image: string;
  status: string;
  techStack: { logo: IconType }[];
};

export const SkillSetLang = [
  {
    name: 'Typescript',
    imageUrl: '/images/logo/ts.png',
  },
  {
    name: 'Javascript',
    imageUrl: '/images/logo/js.png',
  },
  {
    name: 'jQuery',
    imageUrl: '/images/logo/jquery.png',
  },
  {
    name: 'React',
    imageUrl: '/images/logo/react.png',
  },
  {
    name: 'Supabase',
    imageUrl: '/images/logo/supabase.png',
  },
  {
    name: 'Tailwind',
    imageUrl: '/images/logo/tailwind.png',
  },
  {
    name: 'Postgre SQL',
    imageUrl: '/images/logo/postgres.png',
  },
  {
    name: 'Node JS',
    imageUrl: '/images/logo/node.png',
  },
  {
    name: 'Git',
    imageUrl: '/images/logo/git.png',
  },
  {
    name: 'Firebase',
    imageUrl: '/images/logo/firebase.png',
  },
] as TSkillSetLangs[];

export const WorkExperience = [
  {
    title: 'Mobile Developer',
    company: '@PT iForce Consulting Indonesia',
    period: 'Jul 2023 - Dec 2024',
    description: [
      {
        job: 'Implemented Redux Persist, Redux Toolkit and React Query for M-Smile React Native',
      },
      {
        job: 'Create a native modules android for Tap to Pay third party feature using React Native.',
      },
      {
        job: 'Implemented custom hooks for seperate logic function intended to be better during maintenance',
      },
      {
        job: 'Revamp M-Smile Project using React Native Framework',
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: '@PT Pasifik Cipta Mandiri',
    period: 'Mar 2022 - Jun 2023',
    description: [
      {
        job: 'Develop and customization mobile apps moodle for utsmart mobile app.',
      },
      {
        job: 'Help work on features and bugs on the system using Moodle PHP.',
      },
      {
        job: 'Wrote and developed code based on mobile apps using Ionic Framework.',
      },
      {
        job: 'Helped team publish Mobile Apps to Google Playstore and Apple Developer',
      },
    ],
  },
  {
    title: 'Mobile Developer',
    company: '@Bandung Techno Park',
    period: 'Feb 2022 - Jan 2023',
    description: [
      {
        job: 'Provide apps build from scratch using React-Native Framework.',
      },
      {
        job: 'Slicing Frontend from Figma to Apps',
      },
      {
        job: 'Implemented API from Backend Team and sync with Apps',
      },
      {
        job: 'Provide github for project structure and monitoring progress',
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: '@Telecom Infra Project',
    period: 'Mar 2021 - Nov 2021',
    description: [
      {
        job: 'Provide apps build from scratch using React-Native Framework.',
      },
      {
        job: 'Helps on team configuration server and network with CISCO.',
      },
      {
        job: 'Provide clean build IoT infrastructure base on 5G Arch.',
      },
    ],
  },
] as TWorkExperience[];

export const Projects = [
  {
    name: 'Job Hunts',
    image: '/images/projects/work1.png',
    status: 'On Development',
    techStack: [
      {
        logo: RiNextjsLine,
      },
      {
        logo: RiTailwindCssLine,
      },
    ],
  },
  {
    name: 'Fidelis Storage',
    image: '/images/projects/work2.png',
    status: 'On Development',
    techStack: [
      {
        logo: RiNextjsLine,
      },
      {
        logo: RiTailwindCssLine,
      },
    ],
  },
] as TProjects[];
