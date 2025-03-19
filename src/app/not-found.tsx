import FuzzyText from '@/components/organism/FuzzyText/FuzzyText';

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto justify-center items-center">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.4}
        enableHover
        fontSize={50}
      >
        404
      </FuzzyText>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.4} enableHover>
        Not Found
      </FuzzyText>
    </div>
  );
}
