import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        <div className="image">
          <img src="/img/portfolio/africa_landing_page.png" alt="tumb" />
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/africa_landing_page.png)",
            }}
          ></div>
        </div>
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>AfriCover Analytics</h3>
          <span>Link to the project here: 
            <a href="https://pmascaro.shinyapps.io/Africa/" target="_blank" rel="noreferrer"> AfriCover Analytics Shiny App </a> {/*target="_blank"*/} {/* AfriCover Analytics Shiny App  */}
          </span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
            Step into &apos;AfriCover Analytics&apos; to see Africa&apos;s lands and travel patterns from 2013&mdash;2018. Built with
            R and Shiny, this project lets you click and discover stories of movement and nature. All the charts and maps come from 
            careful study and creative design, ready for you to explore. If you&apos;re curious about how it&apos;s all put together, the code is ready
            for a look on this <a href="https://github.com/pmascaro/Shiny-App-Inbound-arrivals-to-Africa.git" target="_blank" rel="noreferrer"> GitHub Repository</a>.
            It&apos;s data storytelling, inspired by the BBC, made simple for everyone.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              {/* <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li> */}
              <li>
                <span className="first">Author</span>
                <span>Pep Mascaro Monserrat</span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>May 2020</span>
              </li>
              <li>
                <span className="first"> <a href="https://github.com/pmascaro/Shiny-App-Inbound-arrivals-to-Africa.git" target="_blank" rel="noreferrer"> GitHub Repo</a> </span>
              </li>
              <li>
                <span className="first">Share</span>
                <Social />
                {/* END SOCIAL SHARE */}
              </li>
            </ul>
          </div>
        </div>
        {/* main_details */}

        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/africa_img_by_country.png)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/africa_inbound_arrivals.png)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/africa_trends.png)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
