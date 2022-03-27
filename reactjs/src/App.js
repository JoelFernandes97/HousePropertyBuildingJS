/* eslint-disable jsx-a11y/alt-text */
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "react-slick";

const house = new URL("./images/house3.png", import.meta.url);
const housepool = new URL("./images/housepool.jpg", import.meta.url);
const houseslider1 = new URL("./images/houseslider1.jpg", import.meta.url);
const houseslider2 = new URL("./images/houseslider2.jpg", import.meta.url);
const houseslider3 = new URL("./images/houseslider3.jpg", import.meta.url);
const houseslider4 = new URL("./images/houseslider4.jpg", import.meta.url);
const houseslider5 = new URL("./images/houseslider5.jpg", import.meta.url);
const houseslider6 = new URL("./images/houseslider6.jpg", import.meta.url);

const Yamaha = new URL("./images/Yamaha.png", import.meta.url);
const Namura = new URL("./images/namura.png", import.meta.url);
const mailchimp = new URL("./images/mailchimp.png", import.meta.url);
const Splunk = new URL("./images/splunk.png", import.meta.url);
const Otokoc = new URL("./images/otokoc.png", import.meta.url);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

function App() {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <header>
        <Router>
          <Navbar />
        </Router>
      </header>

      <body>
        <div className="absolute w-full h-full">
          <section className=" relative h-full w-full bg-gray-50 ">
            <div>
              <img
                className="z-2 absolute w-3/5 h-3/4 top-32 right-0"
                src={house}
              />
            </div>

            <div className="absolute w-22 h-10 top-52 pl-44">
              <h1 className=" text-6xl font-bold text-left top-10 ">
                Easy To Find Your Next <br /> Perfect Place
              </h1>
              <p className=" relative text-lg text-left top-14 text-gray-500 ">
                An agency, in broad terms, is any relationship between two
                <br />
                parties in which one, the agent, represents the other, the
                <br />
                principal, in day-to-day transaction.
              </p>
              <button className=" relative text-small text-left top-20 bg-blue-500 h-10 w-32 text-center text-white">
                Learn More
              </button>
            </div>

            <div className=" pl-40 pt-40 relative top-2/4">
              <button className=" relative text-small text-left bg-blue-100 h-10 w-16 text-center font-medium text-blue-600 rounded-l-lg">
                Rent
              </button>
              <button className=" relative text-small text-left bg-blue-100 h-10 w-16 text-center font-medium text-gray-600">
                Buy
              </button>
              <button className=" relative text-small text-left bg-blue-100 h-10 w-16 text-center font-medium text-gray-600 rounded-r-lg">
                Sell
              </button>
            </div>

            <div className=" w-2/4 h-24 pl-24 pt-5 ml-40 relative top-2/4 bg-white">
              <div className=" w-20 h-10 relative bottom-38  ">
                Location
                <form className="relative w-36 h-18 ">
                  <label>
                    <input type="text" placeholder="Zindabazar, Sylhet" />
                  </label>
                </form>
              </div>
              <div className=" pl-40 relative bottom-10 ">
                Home Type
                <form className="relative w-36 h-18">
                  <label>
                    <input type="text" placeholder="Duplex House, 2400m" />
                  </label>
                </form>
              </div>
              <div className=" pl-40 relative bottom-24 pt-2 left-48">
                Range Home
                <form className="relative w-36 h-18">
                  <label>
                    <input type="text" placeholder="$10,000 - $60,000" />
                  </label>
                </form>
                <button className=" relative text-small text-left  relative bottom-10 left-48  bg-blue-500 h-10 w-32 text-center text-white">
                  Search Property
                </button>
              </div>
            </div>

            <div className=" absolute w-3/4 h-24 pl-24 ml-20 top-3/4 mt-40">
              <div className=" inline-block pr-10">
                <img
                  className="absolute w-30 h-24  top-32 left-10"
                  src={Yamaha}
                />
              </div>
              <div className="inline-block pr-10">
                <img
                  className="absolute w-18 h-14 top-36 left-1/4"
                  src={Namura}
                />
              </div>
              <div className="inline-block pr-10">
                <img
                  className="absolute w-18 h-14 pl-10 top-36 left-2/4"
                  src={mailchimp}
                />
              </div>
              <div className=" inline-block pr-10">
                <img
                  className="absolute w-18 h-14 pl-10 top-36 left-3/4"
                  src={Splunk}
                />
              </div>
              <div className=" inline-block pr-10">
                <img
                  className="absolute w-18 h-14 top-36 left-full"
                  src={Otokoc}
                />
              </div>
            </div>
          </section>

          <section className="relative -z-10 bottom-0 pb-10 pt-80 bg-gray-50 ">
            <div className="absolute w-2/6 h-2/5 left-0 top-30 rounded-r-3xl bg-blue-100"></div>
            <div className=" absolute left-1/2 text-xl text-blue-500 font-bold  ">
              About us
            </div>
            <div className="absolute left-1/2 pt-10">
              <div className=" relative text-4xl text-black font-bold  ">
                We Are Providing The Top
              </div>
              <div className=" relative text-4xl text-blue-500 font-bold  ">
                Real State
                <div className=" relative left-44 bottom-10 text-4xl text-black font-bold  ">
                  Property
                </div>
              </div>
              <div className=" relative text-lg text-gray-500    ">
                It's very likely that most people visiting a real estate About
                Us <br /> page are qualified leads. So it helps to think of this
                page as your <br /> virtual business card. The better it answers
                the question people <br /> have.
              </div>
              <div className=" relative text-lg text-gray-500    ">
                The better impression it would make. An agency, in broad terms,
                <br /> is any relationship between two parties in which..
              </div>
              <button className=" relative h-10 w-32 mt-10 text-center text-small bg-blue-500  text-white">
                Learn more
              </button>
              <button className=" relative h-10 w-32 mt-10 ml-10 text-center text-small outline outline-1 outline-blue-500  text-blue-500 ">
                Contact Us
              </button>
            </div>

            <div className=" relative pl-20 mt-16 mb-44 ">
              <img
                className="w-2/5 h-2/5 right-0 rounded-r-3xl"
                src={housepool}
              />
            </div>
          </section>

          <section className="relative z-10 bottom-0 pb-40 pt-5 bg-gray-50 ">
            <div className="absolute left-20 top-0">
              <div className=" relative text-4xl text-black font-bold  ">
                Our Most Popular Trending
              </div>
              <div className=" relative text-4xl text-blue-500 font-bold  ">
                Property
              </div>
              <div className=" relative text-lg text-gray-500 pt-5">
                The better impression it would make. An agency, in broad terms,
                <br /> is any relationship between two parties in which..
              </div>
            </div>
            <section>
              <div className="relative top-60 ">
                <Slider {...settings}>
                  <div>
                    <img
                      className="w-2/4 h-2/4 rounded-3xl"
                      src={houseslider1}
                    />
                    <h3>1</h3>
                  </div>
                  <div>
                    <img
                      className="w-2/4 h-2/4 rounded-3xl"
                      src={houseslider2}
                    />
                    <h3>2</h3>
                  </div>
                  <div>
                    <img
                      className="w-2/4 h-2/4 rounded-3xl"
                      src={houseslider3}
                    />
                    <h3>3</h3>
                  </div>
                  <div>
                    <img
                      className="w-2/4 h-2/4 rounded-3xl"
                      src={houseslider4}
                    />
                    <h3>4</h3>
                  </div>
                  <div>
                    <img
                      className="w-2/4 h-2/4 rounded-3xl"
                      src={houseslider5}
                    />
                    <h3>5</h3>
                  </div>
                  <div>
                    <img
                      className="w-2/4 h-2/4  rounded-3xl"
                      src={houseslider6}
                    />
                    <h3>6</h3>
                  </div>
                </Slider>
              </div>
            </section>
          </section>
        </div>
        <script src="../script.js"></script>
      </body>
    </div>
  );
}

export default App;
