import React from "react";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { VscProject as ProjectIcon } from "react-icons/vsc";
import { BsBookmarks as ResumeIcon } from "react-icons/bs";
import { BsCodeSquare as SkillIcon } from "react-icons/bs";
import { BiMessageSquareDots as ContactIcon } from "react-icons/bi";

import "../styles/Sidebar.css";

const Sidebar = ({
  HomeIconColor,
  ProjectIconColor,
  ResumeIconColor,
  SkillIconColor,
  ContactIconColor,
}) => {
  if (HomeIconColor === undefined) {
    HomeIconColor = "text-white";
  }
  if (ProjectIconColor === undefined) {
    ProjectIconColor = "text-white";
  }
  if (ResumeIconColor === undefined) {
    ResumeIconColor = "text-white";
  }
  if (SkillIconColor === undefined) {
    SkillIconColor = "text-white";
  }
  if (ContactIconColor === undefined) {
    ContactIconColor = "text-white";
  }

  return (
    <div className="col-md-1 bg-black me-auto h-auto main-row">
      <div className="row mx-auto bg-black">
        <div className="col-md-8 col-12 text-center mx-auto py-3 mt-4">
            <div className={HomeIconColor}>
          <HomeIcon size={30} />{" "}
          <span>Home</span>
          </div>
        </div>
      </div>
      <div className="row mx-auto bg-black">
        <div className="col-md-8 col-12 text-center mx-auto py-4 mt-3">
            <div className={ProjectIconColor}>
          <ProjectIcon size={30} />{" "}
          <span>Projects</span>
        </div>
        </div>
      </div>
      <div className="row mx-auto bg-black">
        <div className="col-md-8 col-12 text-center mx-auto py-4 mt-3">
            <div className={ResumeIconColor}>
          <ResumeIcon size={30} />{" "}
          <span>Resume</span>
        </div>
        </div>
      </div>
      <div className="row mx-auto bg-black">
        <div className="col-md-8 col-12 text-center mx-auto py-4">
            <div className={SkillIconColor}>
          <SkillIcon size={30} />{" "}
          <span>Skills</span>
        </div>
        </div>
      </div>
      <div className="row mx-auto bg-black">
        <div className="col-md-8 col-12 text-center mx-auto mt-4">
        <div className={ContactIconColor}>
          <ContactIcon className="text-white" size={30} />
          <span className="text-white">Contact</span>
        </div>
        </div>
      </div>
      <div className="row mx-auto bg-black mt-5 pt-4">
        <div className="col-md-10 col-12 text-center mx-auto mt-2 pb-5">
         {"<TSD/>"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
