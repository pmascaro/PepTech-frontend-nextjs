import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/presentation.jpeg",
    name: "Pep Martí Mascaró Monserrat",
    designation: "Senior Data Scientist & Generative AI Specialist",
    text: (
      <>
        <p>
        Hello! I&apos;Sm Pep. For me, &apos;Start with <i>WHY</i>&apos; is more than just a phrase; 
        it&apos;Ss the compass guiding all I do. 
        My mission is to enhance our lives throughout understanding people&apos;Ss stories and needs.
        Beyond just numbers or algorithms, I&apos;m passionate about finding solutions to real challenges, 
        often leveraging the power of AI.
        </p>
        <p>
        While I emphasise collective impact and the importance of teams, this website is a personal canvas. 
        It&apos;s where I showcase my work, share my solutions, and reflect on my experiences. 
        My vision is that while individual efforts can shine, it&apos;s the impact we have on others 
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
