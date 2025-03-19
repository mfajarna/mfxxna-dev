'use client';

import { WorkExperience } from '@/app/dummy';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import ClickSpark from '../ClickSpark/ClickSpark';

const AccordionWorkExp = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ClickSpark className="py-4 space-y-4">
      {WorkExperience.map((item, index) => (
        <div
          key={index}
          className={`border-b border-gray-800 overflow-hidden transition-all duration-300`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left px-2 py-3 flex items-center justify-between"
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center space-x-6">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  {item.title}
                </h2>
                <div className="flex items-center mt-1 space-x-2 text-sm">
                  <span className="text-gray-400">{item.company}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{item.period}</span>
                </div>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-gray-400">
              {/* {item.description} */}
              <ul className="list-disc list-inside space-y-2">
                {item.description.map((item, index) => (
                  <div key={index}>
                    <li className="text-sm">{item.job}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </ClickSpark>
  );
};

export default AccordionWorkExp;
