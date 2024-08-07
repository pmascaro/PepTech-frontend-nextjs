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
                backgroundImage: "url(/img/slider/home.jpg)",
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
                  /*"Mathematician",*/
                  /*"Writer",*/
                ]}
                loop
                typeSpeed={80} style={{fontSize: '0.9em'}}
              />
            </h4>

            <p className="job" style={{fontSize: '0.9em'}}>
            My driving purpose is to uplift the world through innovative applications of Data Science/AI. 
            This website serves as both a portfolio and a journal, where I showcase projects that are 
            close to my heart. It&apos;s also a space where I document my ongoing journey to master 
            Data Science and AI.
            </p>
            <p className="job-added-msg" style={{fontStyle: 'italic', marginBottom: '20px'}} >
            <i><b>Dive in and enjoy discovering what I&apos;ve been up to!</b></i>
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
