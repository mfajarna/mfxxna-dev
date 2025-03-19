'use client';

import Link from 'next/link';
import React from 'react';

const Links = [
  {
    title: 'Home',
    url: '#home',
  },
  {
    title: 'Work Experience',
    url: '#workexp',
  },
  {
    title: 'Projects',
    url: '#projects',
  },
  {
    title: 'About',
    url: '/#about',
  },
];

export function AppNavbar() {
  const [activeSection, setActiveSection] = React.useState<string>('');

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="hidden md:block">
      <div className="fixed flex max-w-[600px] mx-auto w-full top-0 left-0 right-0 z-50 mt-8 bg-[#1414149c] backdrop-blur-xl transition-all border border-[#353535] rounded-xl py-3">
        <div className="flex items-center mx-auto justify-center gap-11">
          {Links.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={'text-[15px] font-normal transition-colors'}
            >
              {item.title}
              {/* {activeSection === item.url.slice(1) ? (
                <GradientText colors={['#2929a3', '#a64dff', '#2929a3']}>
                  {item.title}
                </GradientText>
              ) : (
                item.title
              )} */}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
