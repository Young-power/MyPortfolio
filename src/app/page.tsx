import CircleContainer from "./components/circle/CircleContainer";
import ButtonTop from "./components/goTop/ButtonTop";
import Hero from "./components/hero/Hero";
import MyMapWrapper from "./components/map/MyMapWrapper";
import Project from "./components/project/Project";
import Project2 from "./components/project/Project2";
import Project3 from "./components/project/Project3";
import Projet4 from "./components/project/Projet4";
import SchoolCarieer from "./components/school/SchoolCarieer";
import SkillSender from "./components/skills/SkillSender";
import Title from "./components/Title";

export default function Home() {

  return (
    <div className="w-full bg-white/40 dark:bg-linear-to-br  dark:from-stone-900 dark:to-stone-950 h-full   ">
      <Hero />
      <ButtonTop />
      <Title title="COMPETANCES" style="text-muted-foreground dark:text-white font-bold text-center text-3xl lg:text-5xl mt-28" />
      <SkillSender />
      <CircleContainer />
      <Title title="SCHOOL CARIEER" style="text-muted-foreground font-bold dark:text-white text-center text-3xl lg:text-5xl mt-20" />
      <SchoolCarieer />
      <Title title="PROJETS" style="text-muted-foreground font-bold dark:text-white text-center text-3xl lg:text-5xl mt-28 border-b-2 border-muted-foreground dark:border-white pb-3" />
      <Title title="Projet Web" style="text-muted-foreground italic dark:text-white text-center text-xl lg:text-2xl mt-16  border-white pb-3" />
      <Project />
      <Project2 />
      <Project3 />
      <Title title="⭐  RandomJwt" style="text-muted-foreground dark:text-white text-center mt-10 text-xl lg:text-2xl lg:mt-16 font-bold border-white " />
      <Projet4 />
      <Title title="Google Map" style="text-muted-foreground dark:text-white font-bold text-center text-3xl  lg:text-5xl mt-10 pb-3" />
      <div className="my-10">
        <MyMapWrapper />
      </div>
    </div>
  );
}
