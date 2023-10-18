import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/presentation.jpeg",
    name: "Pep Martí Mascaró Monserrat",
    designation: "Senior Data Scientist & Generative AI Specialist",
    text: (
      <>
        <p>
        Hello! I'm Pep. For me, 'Start with <i>WHY</i>' is more than just a phrase; 
        it's the compass guiding everything I do. 
        Throughout understanding people's stories and needs, my mission is to make life better. 
        Beyond just numbers or algorithms, I'm passionate about finding solutions to real challenges, 
        often leveraging the power of AI.
        </p>
        <p>
        While I emphasise collective impact and the importance of teams, this website is a personal canvas. 
        It's where I showcase my work, share my solutions, and reflect on my experiences. 
        My vision is that while individual efforts can shine, it's the impact we have on others 
        that truly defines us. So I want to welcome you to my space, where I bridge the gap between technology 
        and human narratives, one solution at a time.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
