import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MagicButton from "./MagicButton";
import { GrContactInfo } from "react-icons/gr";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  date: string;
  icon: string;
  iconBg: string;
  desc: string;
  thumbnail: string;
  technologies?: string[];
}

const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineer Coop",
    company: "Ontario Power Generation",
    date: "May 2024 - December 2024",
    icon: "/OPG.png",
    iconBg: "#383E56",
    desc: "Led the development and deployment of enterprise-grade applications on Azure using Angular, .NET C#, and SQL Server, serving 1000+ employees. Engineered APIs with JWT authentication, automated email systems saving $30K/month, and CI/CD pipelines with Azure DevOps, boosting efficiency and performance by 30%.",
    thumbnail: "/OPG.png",
    technologies: ["Angular", ".NET CORE", "TypeScript", "C#", "Azure"]
  },
  {
    id: 2,
    title: "Teaching Assistant",
    company: "University of Guelph",
    date: "September 2023 - Present",
    icon: "/UniversityofGuelphIcon.jpg",
    iconBg: "#E6DEDD",
    desc: "As a TA at the University of Guelph, I’ve helped 500+ students across courses like Programming, Intermediate Programming, Data Structures, and Software Systems Development. Mentored 100+ during office hours, breaking down tough concepts. It’s a full-circle moment teaching what I once struggled with, showing my flexibility in guiding diverse computer science topics effectively.",
    thumbnail: "/UniversityofGuelphThumbnail.jpg",
    technologies: ["C", "Python", "JavaScript", "Web Servers", "SQLite"]
  }
];

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3
    }
  }
};

interface ExperienceCardProps {
  experience: WorkExperience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element "
    contentStyle={{
      background: "transparent",
      padding: 0,
      border: "none",
      boxShadow: "none"
    }}
    contentArrowStyle={{ borderRight: "7px solid rgb(4,7,29)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company}
          className="w-3/5 h-3/5 object-contain"
        />
      </div>
    }
    visible={true}
  >
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Button
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: "rgb(4,7,29)",
          backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          borderRadius: `calc(1.75rem * 0.96)`
        }}
        className="w-full text-white border-neutral-200 dark:border-slate-800 cursor-default"
      >
        <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-4">
          <img
            src={experience.thumbnail}
            alt={experience.company}
            className="lg:w-32 md:w-20 w-16"
          />
          <div className="lg:ms-5 flex-1">
            <h1 className="text-start text-xl md:text-2xl font-bold">
              {experience.title}
            </h1>
            <p className="text-start text-purple font-semibold mt-1">
              {experience.company}
            </p>
            <p className="text-start text-white-100 mt-3 font-semibold leading-relaxed">
              {experience.desc}
            </p>
            {experience.technologies && (
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-purple font-semibold mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="px-3 py-1 bg-purple bg-opacity-20 rounded-full text-sm text-purple"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Button>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience: React.FC = () => {
  return (
    <div className="relative py-20 w-full min-h-screen" id="experience">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <p className="text-lg text-purple mb-2">What I have done so far</p>
        <h1 className="heading">
          My <span className="text-purple">Work Experience</span>
        </h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {workExperience.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>

      <motion.div 
        className="flex items-center justify-center mt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <MagicButton
          title="View My Resume"
          icon={<GrContactInfo />}
          position="right"
          handleClick={() => window.open("/Jashanjot_s_Resume.pdf", "_blank")}
        />
      </motion.div>
    </div>
  );
};

export default Experience;