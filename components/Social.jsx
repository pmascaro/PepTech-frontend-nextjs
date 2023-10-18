import React from "react";

const SocialShare = [
  {
    iconName: "twitter",
    link: "https://twitter.com/pepmarti23",
  },
  { iconName: "github", link: "https://github.com/pmascaro" },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/pep-mart%C3%AD-mascaró-monserrat/",
  }
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
