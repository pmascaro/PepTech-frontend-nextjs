import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/presentation.jpeg",
    name: "Pep Martí Mascaró Monserrat",
    designation: "Senior Data Scientist & Generative AI Lead",
    text: (
      <>
        <p>
        Living by the principle of &apos;starting with WHY&apos;, my focus centers on personal growth and meaningful impact. 
        Inwardly, I strive to become closer to my true self; outwardly, I aim to be an agent of change, creating a positive 
        impact on the world around me. One of the ways I bring this philosophy to life is by leveraging the transformative 
        power of data analytics and AI to solve real-world challenges.
        </p>
        <p>
        As a Senior Data Scientist and Generative AI Lead at British Airways, my commitment to growth and impact is ever-present. 
        On a technical level, I build AI products designed to make a difference, from streamlining operational processes to 
        enhancing customer experiences. Alongside this technical work, I collaborate with cross-functional teams, guiding projects to 
        successful completion while nurturing valuable relationships with my colleagues and stakeholders.
        </p>
        <p>
        This website is a personal canvas. It&apos;s where I showcase work that I believe is impactful, offer solutions that I hope can help others, 
        and reflect on my experiences.
        I invite you to explore my portfolio, reach out with any questions, or even propose a collaboration on future projects. Welcome to my space.
        {/* My vision is that while individual efforts can shine, it&apos;s the impact we have on others  */}
        {/* that truly defines us. */}
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
