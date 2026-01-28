"use client";

import { FaReact, FaNodeJs, FaDatabase, FaLaptopCode, FaPython } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
const skills = [
  { title: "React", level: 65, icon: <FaReact className="text-blue-500 text-3xl" /> },
  { title: "Linux", level: 35, icon: <FcLinux className="text-gray-800 text-3xl " /> },
  { title: "NestJS", level: 54, icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { title: "TypeScript", level: 85, icon: <FaLaptopCode className="text-blue-700 text-3xl" /> },
  { title: "MySQL", level: 80, icon: <FaDatabase className="text-orange-500 text-3xl" /> },
  { title: "Python", level: 30, icon: <FaPython className="text-yellow-400 text-3xl" /> },
];

export default function About() {
  return (
    <section className="max-w-6xl  mx-auto px-4 py-16 text-white ">
      {/* Introduction */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Salut, je suis Mahine-K</h1>
        <p className="text-gray-600 text-lg lg:text-xl">
          Développeur full-stack passionné par le web et le mobile. Je transforme des idées en applications modernes et intuitives.
        </p>
      </div>

      {/* Parcours */}
      <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-linear-to-br from-stone-800 to-stone-950 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Mon parcours</h2>
          <p className="text-gray-300 lg:text-lg">
            Après ma première année de BTS en Informatique, je poursuis ma deuxième année en me spécialisant en développement web et mobile. Je crée des projets personnels et professionnels pour perfectionner mes compétences.
          </p>
        </div>
        <div className="bg-linear-to-br from-stone-800 to-stone-950 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Objectif</h2>
          <p className="text-gray-300 lg:text-lg">
            Créer des applications web et mobiles performantes et esthétiques, tout en apprenant continuellement et en relevant des défis techniques stimulants.
          </p>
        </div>
      </div>

      {/* Compétences */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-muted-foreground ">Mes compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="bg-linear-to-br from-stone-800 to-stone-950 p-6 rounded-2xl shadow-lg flex flex-col items-center">
              {skill.icon}
              
              <h3 className="text-xl font-bold mt-3">{skill.title}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <span className="mt-2 text-gray-300">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact / Call to action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Envie de collaborer ?</h2>
        <p className="text-gray-800 mb-6">
          Découvrez mes projets ou contactez-moi pour discuter d&lsquo;une collaboration.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
