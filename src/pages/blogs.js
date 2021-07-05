import Nav from "../components/nav";
import { AiFillStar } from "react-icons/ai";
import Arrow from "../images/arrow.png";
import btncr from "../images/Icon.png";
import img2ndCol2 from "../images/img-2ndCol.png";
import blbg from "../images/shape312wd.png";
import BlogCards from "../components/blogCard";
import ProjectCard from "../components/projectCard";
import TalkCard from "../components/talkCard";
import { FiChevronRight } from "react-icons/fi";
import L1 from "../images/l1.png";
import L2 from "../images/l2.png";
import C1 from "../images/1.png";
import L3 from "../images/l3.png";

import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import imgq321 from "../images/imgq321.png";
function App() {
  return (
    <>
      <Nav hasBlue={true} />
      <section>
        <div className="container">
          <div className="d-flex">
            <div className="iasfnfas">
              <h3 className>marketing</h3>
              <h1 className="nainerofsdv">
                Lorem ipsum dolor sit amet, consetetur
              </h1>

              <div className="nkkasdfoef">
                <img src={imgq321} />
                <p>by Kyle Graham - May 26, 2021</p>
              </div>

              <div className="ojoasfwrjwfcxs">
                <div className="ijirdfdfsd iishasdsn">
                  <a>
                    Read Blog{" "}
                    <span>
                      <FiChevronRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="idjsoisgde">
              <img src={img2ndCol2} className="oasiofjaswd" alt="" />
            </div>
          </div>
        </div>
        <div className="ihasfuasyefhzsfsg1" >
          
        </div>
        {/* <img src={blbg} className="ijasdgoiset" /> */}
      </section>

      <section>
        <div className="container">
          <div>
            <h1 className="ohiaosdgsidoer1">
              Recent <span>Blogs</span>
            </h1>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>

            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>

            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
            <div className="m-2 noaisfoesrv">
              <BlogCards
                date="May 24, 2021"
                img={C1}
                type="CODING"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="jhasdif9ewefow">
        <div className="container">
          <div className="jaisefoef">
            <div>
              <h1> Get in touch</h1>
              <p className="ijasidf02iek">
                Lorem ipsum dolor sit amet, consetetur.
              </p>
            </div>
            <div className="ojasdffwew">
              <p>Email:</p>
              <div className="d-flex align-items-center">
                <GoMail className="jiasofjs-sdas" />
                <p className="mt-1 ml-2">hello@kylegraham.com</p>
              </div>
            </div>
            <div className="ojasdffwew">
              <p>Phone:</p>
              <div className="d-flex align-items-center">
                <IoCallOutline className="jiasofjs-sdas" />{" "}
                <p className="mt-1 ml-2">hello@kylegraham.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bjdsif1 m-0">
        <div className="container">
          <div className="ijsdiaenqqwsx hnaisufesodif">
            <div>
              <div>
                <img src={L1} />
                <img className="ml-2" src={L3} />
              </div>
              <p className="mt-5 mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
              </p>
              <div className="cseinasdvsiff">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
            <div className="pioejawdasd">
              <h5 className="sajoisddidnsa">Navigation</h5>
              <p>Home</p>
              <p>About Kyle</p>
              <p>Blog</p>
              <p>Projects</p>
            </div>
            <div className="pioejawdasd">
              <h5 className="sajoisddidnsa">Kyle’s Projects</h5>
              <p>10 Minute Funnels</p>
              <p>Project 2</p>
              <p>Project 3</p>
              <p>Project 4</p>
            </div>
            <div className="pioejawdasd">
              <h5 className="sajoisddidnsa">Kyle’s Talks</h5>
              <p>SF15 11 10 Minute Funnel Overview</p>
              <p>The Future of Marketing</p>
              <p>Who is Kyle Graham</p>
            </div>
          </div>

          <div className="ihasdhuwesf">
            <div>
              <p>© Copyright 2021 Kyle Graham. All Rights Reserved.</p>
            </div>
            <div>
              <p>Privacy Policy | Terms of Use</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
