import { nanoid } from "@reduxjs/toolkit";
import { personalInfo } from "../.././personalInfo";
import SkillsInner from "./SkillsInner";

function SectionSkills() {
  return (
    <>
      {personalInfo.map((sectionInfo) => (
        <SkillsInner
          key={nanoid()}
          title={sectionInfo.title}
          icon={sectionInfo.icon}
          list={sectionInfo.list}
        />
      ))}
    </>
  );
}

export default SectionSkills;
