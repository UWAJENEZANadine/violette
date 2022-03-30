import React from "react";
import HomeLayout from "../components/HomeLayout";
import img from "../assets/images/vio.jpg";

const Home = () => {
  return (
    <HomeLayout>
      <div className="container ">
        <div className="row justify-content-around row3 ">
          <div className="col-12 col-sm-12 col-md-6 mt-5 col1">
            <img className="img-fluid col1-image" src={img} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 mt-5 text-white col2">
            <h1 className="mt-5 mb-5 text-white">I'm Violette UWERA a mechanical engineer in option of plant engineering</h1>
            <p>I'm skilled in maintenance,energy production,Matlab,solidworks,plumbing and welding.
              I'm excellenet collaborator and communication</p> 
              <a href="https://drive.google.com/file/d/1KCsAee18Lg-eurTaaeo2CKTiL3HMxLXJ/view?usp=sharing"  className="bg-dark mb-3" style={{textDecoration:"none", 
              borderRadius:"20px", color:"white",
            padding:"15px", marginLeft:"3%"}} target="blank">view MyCV</a>
            
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
export default Home;
