import React, { useEffect } from "react";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import HomePagdData from "../data/HomePagdData.json";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Skill from "../components/Skill";

export default function Home() {
  const {
    hero,
    socialBtns,
    about,
    skill,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Skill data={skill} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      {/* <Testimonial data={testimonial} /> */}
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
