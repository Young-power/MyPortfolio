import ButtonTop from "./commponents/goTop/ButtonTop";
import Hero from "./commponents/hero/Hero";
import MyMapWrapper from "./commponents/map/MyMapWrapper";
import Project from "./commponents/project/Project";
import Project2 from "./commponents/project/Project2";
import SchoolCarieer from "./commponents/school/SchoolCarieer";
import SkillSender from "./commponents/skills/SkillSender";
import Title from "./commponents/Title";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-stone-900 to-stone-950 h-full">
      <Hero />
      <ButtonTop />
      <Title title="COMPETANCES" style="text-white text-center text-3xl lg:text-5xl mt-28" />
      <SkillSender />
      <Title title="SCHOOL CARIEER" style="text-white text-center text-3xl lg:text-5xl mt-20" />
      <SchoolCarieer />
      <Title title="PROJETS" style="text-white text-center text-3xl lg:text-5xl mt-28 border-b-2 border-white pb-3" />
      <Project />
      <Project2 />
      <Title title="Google Map" style="text-white text-center text-3xl lg:text-5xl mt-10 pb-3" />
      <div className="my-10">
        <MyMapWrapper />
      </div>
    </div>
  );
}
