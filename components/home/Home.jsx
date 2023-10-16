import React from "react";
import Typed from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h5 className="name" style={{fontSize: '1.9em'}}>Pep Martí Mascaró Monserrat</h5>
            <h4 className="typer">
              <Typed
                strings={[
                  "Senior Data Scientist",
                  "Generative AI Specialist",
                  /*"Mathematician",*/
                  /*"Writer",*/
                ]}
                loop
                typeSpeed={80} style={{fontSize: '0.9em'}}
              />
            </h4>

            <p className="job" style={{fontSize: '0.9em'}}>
            My driving purpose is to uplift the world through innovative applications of Data Science. 
            This website serves as both a portfolio and a journal, where I showcase projects that are 
            close to my heart. It's also a space where I document my ongoing journey to master 
            Data Science, MLOps, and Software Engineering.
            </p>
            <p className="job-added-msg" style={{fontStyle: 'italic', marginBottom: '20px'}} >
            Dive in and enjoy discovering what I've been up to!
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
