import Nav from "../components/nav";
import { AiFillStar } from "react-icons/ai";
import Arrow from "../images/arrow.png";
import btncr from "../images/Icon.png";
import img2ndCol2 from "../images/img-2ndCol2.png";
import blbg from "../images/shape.png";
import BlogCard from "../components/blogCard";
import ProjectCard from "../components/projectCard";
import TalkCard from "../components/talkCard";
import { FiChevronRight } from "react-icons/fi";
import L1 from "../images/l1.png";
import L2 from "../images/l2.png";
import L3 from "../images/l3.png";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import BlogCards from "../components/MultiCarosal";
import C1 from "../images/imgfdsaf.png";
import Image1 from "../images/Image1.png";

function App() {
  return (
    <>
      <Nav hasBlue={false} />
      <section>
        <div className="container">
          <div className="d-flex">
            <div className="iasfnfas">
              <h3 className>KYLE GRAHAM is a</h3>
              <h1>Technology Entrepreneur</h1>
              <div className="sdkfsder">
                <img src={Arrow} alt="" />
              </div>
              <p>
                Since learning to code at the age of 8, he has a proven track
                record of building disruptive, first-to-market technologies and
                growing companies around them.
              </p>
              <div className="auifeifr">
                <div>
                  <button className="btn btn-primary knsdfereof">
                    About Kyle <FiChevronRight />
                  </button>
                </div>
                <div className="d-flex">
                  <button className="btn knsdfereof23 joasawewr">
                    Watch Video <img src={btncr} />
                  </button>
                </div>
              </div>
            </div>
            <div className="idjsoisgde">
              <img src={img2ndCol2} alt="" />
            </div>
          </div>
        </div>
        <div className="ihasfuasyefhzsfsg" >
          
        </div>
        {/* <img src={blbg} className="ijasdgoiset" /> */}
      </section>

      <section className="marodsfjse">
        <div className="container">
          <div>
            <h1 className="oasjfisew">
              Kyle is currently the CEO and Chief engineer at
            </h1>

            <p>
              Kyle is currently the CEO and Chief engineer at 10 Minute Funnels
            </p>
          </div>
        </div>
      </section>

      <section className="bjdsif">
        <div className="container">
          <div className="joasinferf">
            <div className="jidgsdrtrt">
              <h1 className="jodfgrdtg">30k+</h1>
              <div>
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
              </div>
              <p className="ojasdfofe">Paying Subscribers</p>
            </div>
            <div className="jidgsdrtrt">
              <h1 className="jodfgrdtg">200k+</h1>
              <div>
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
                <AiFillStar color="#FFBA01" />
              </div>
              <p className="ojasdfofe">Overall websites built</p>
            </div>
          </div>

          <div>
            <h1 className="ohiaosdgsidoer aoasndfdfew">
              Kyle’s Recent <span>Blogs</span>
            </h1>
          </div>

          <BlogCards property={[0, 1, 2, 3]} />

          <div>
            <h1 className="ohiaosdgsidoer">
              Kyle’s Current & On-going <span>Projects</span>
            </h1>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <ProjectCard
              img={Image1}
              cstatus="Current Project"
              title="10 Minute Funnels"
              para="The world’s easiest to use and most powerful sales"
            />
            <ProjectCard
              img={Image1}
              cstatus="Current Project"
              title="10 Minute Funnels"
              para="The world’s easiest to use and most powerful sales"
            />
            <ProjectCard
              img={Image1}
              cstatus="Current Project"
              title="10 Minute Funnels"
              para="The world’s easiest to use and most powerful sales"
            />
            <ProjectCard
              img={Image1}
              cstatus="Current Project"
              title="10 Minute Funnels"
              para="The world’s easiest to use and most powerful sales"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <h1 className="ohiaosdgsidoer1">
              More of Kyle Graham <span>Talks</span>
            </h1>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <TalkCard img={C1} head="SF15 11 10 Minute Funnel Overview" />
            <TalkCard img={C1} head="SF15 11 10 Minute Funnel Overview" />
            <TalkCard img={C1} head="SF15 11 10 Minute Funnel Overview" />
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
