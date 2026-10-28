import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  SiCplusplus,
  SiCss3,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTensorflow,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandVisualStudio,
  TbBrandVscode,
  TbBrandWindows,
  TbChartDots,
  TbChartHistogram,
  TbDatabase,
  TbTextRecognition,
} from "react-icons/tb";

// Use bundled brand logos where available and descriptive icons otherwise.
const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C#", icon: TbBrandCSharp, color: "#bd8bfa" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#6eafe0" },
      { name: "SQL", icon: TbDatabase, color: "#7dd3fc" },
      { name: "C++", icon: SiCplusplus, color: "#659ad2" },
      {
        name: "HTML/CSS",
        icon: SiHtml5,
        secondaryIcon: SiCss3,
        color: "#f08055",
        secondaryColor: "#60a5fa",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#f9a452" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#ff9c42" },
      { name: "Keras", icon: SiKeras, color: "#f56565" },
      { name: "PyTorch", icon: SiPytorch, color: "#f87965" },
    ],
  },
  {
    title: "Computer Vision",
    skills: [
      { name: "OpenCvSharp", icon: SiOpencv, color: "#86ce62" },
      { name: "Tesseract OCR", icon: TbTextRecognition, color: "#94b8fa" },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "#70c4e5" },
      { name: "Pandas", icon: SiPandas, color: "#c2afff" },
      { name: "Matplotlib", icon: TbChartHistogram, color: "#7dd3fc" },
      { name: "Seaborn", icon: TbChartDots, color: "#88ccc3" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "React Native", icon: SiReact, color: "#61dafb" },
      { name: "Expo", icon: SiExpo, color: "#e2e8f0" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29" },
      { name: "Express.js", icon: SiExpress, color: "#e2e8f0" },
      { name: "MongoDB", icon: SiMongodb, color: "#64c96c" },
      { name: ".NET", icon: SiDotnet, color: "#b79aff" },
      { name: "Windows Forms", icon: TbBrandWindows, color: "#69bfff" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#f58068" },
      { name: "GitHub", icon: SiGithub, color: "#f1f5f9" },
      { name: "Visual Studio", icon: TbBrandVisualStudio, color: "#c299f1" },
      { name: "VS Code", icon: TbBrandVscode, color: "#4fb3f6" },
      { name: "Figma", icon: SiFigma, color: "#fa998c" },
    ],
  },
];

function Skills() {
  return (
    <section
      tabIndex={-1}
      id="skills"
      className="section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="skills-title"
            number="04"
            label="MY TOOLKIT"
            title="The right tools."
            accent="A thoughtful approach."
            description="The languages, frameworks, and tools I use to turn ideas into working applications."
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              className={
                group.title === "Tools & Platforms" ? "skills-wide" : ""
              }
              delay={(index % 3) * 0.04}
            >
              <article className="skill-card">
                <div className="skill-heading">
                  <h3>{group.title}</h3>
                  <span aria-hidden="true">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="skill-list">
                  {group.skills.map(
                    ({ name, icon, secondaryIcon, color, secondaryColor }) => {
                      const Icon = icon;
                      const SecondaryIcon = secondaryIcon;
                      return (
                        <li key={name}>
                          <span aria-hidden="true" className="skill-icons">
                            <Icon size={20} style={{ color }} />
                            {SecondaryIcon && (
                              <SecondaryIcon
                                size={20}
                                style={{ color: secondaryColor }}
                              />
                            )}
                          </span>
                          <span>{name}</span>
                        </li>
                      );
                    },
                  )}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
