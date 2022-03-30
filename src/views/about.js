import React from "react";

import HomeLayout from "../components/HomeLayout";

const About = () => {
  return (
    <HomeLayout>
      <div className="container">
        <h1 className="text-white mb-5 text-center about-header">About Me</h1>
        <div className="row justify-content-round row4">
          <div className="col-9 col-sm-7 col-md-8 col-lg-6">
            <h3 className="text-white">EXPERIENCES</h3>
            <p className="text-white mt-5">
              In 2022, I did final year project, The tittle was”solar powered
              charging station for electric motorcycles.” o In 2021, I had
              academic internship in Rwanda PFUNDA TEA FACTORY(PTC) for 3 months
              in maintenance department and obtained helpful leadership
              experience
            </p>
            <p className="text-white mt-5  p-experiece">
              I've also had experience INTRODUCTION TO COMPUTER MICROSOFT
              OFFICE WORD , MICROSOFT OFFICE EXCEL, MICROSOFT OFFICE POWERPOINT,
              INTRODUCTION TO INTERNET, CAD/CAE/CAM (SOLIDWORK
              AND MATLAB)
            </p>
            {/* <a href="https://github.com/UWAJENEZANadine" target="blank">
              View GitHUB projects
            </a> */}
          </div>
          <div className="col-9 col-sm-7 col-md-1 col-lg-4 px-5">
            <h3 className="text-white">HOBBIES</h3>
            <ul>
              <li className="text-white mt-5"> Computer Designing</li>
              <li className="text-white mt-3"> Text book Reading</li>
              <li className="text-white mt-3"> Rwanda traditional dance</li>
            </ul>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default About;
