import CircularText from '@/components/organism/CircularText/CircularText';
import TitleSection from '@/components/organism/TitleSection/TitleSection';
import Image from 'next/image';

const SectionAbout = () => {
  return (
    <section id="about" className="border-t mt-[15rem]">
      <div className="max-w-6xl mx-auto pt-14 items-center">
        <TitleSection
          title="Discuss about"
          subtitle="My Profile"
          desc="My information profile due to personal branding (?)"
        />

        <div className="mt-10 flex flex-col md:flex-row px-10">
          <div className="relative">
            <Image
              src={'/images/fotoPP.jpg'}
              alt="photo profile"
              width={300}
              height={300}
              className="rounded-b-full"
            />

            <div className="group absolute bottom-0 right-0 grid aspect-square rounded-full h-fit w-[40%] place-content-center ronded-full bg-black p-3 shadow">
              <CircularText
                text="HELLO*IM JEY*"
                onHover="speedUp"
                spinDuration={20}
              />
            </div>
          </div>

          <div className="ml-10 w-full h-full space-y-6">
            <h1 className="text-balance lg:text-6xl font-semibold">
              A <span className="text-indigo-500">frontend developer</span> &
              digital designer
            </h1>

            <p className="text-balance text-white/70">
              I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
