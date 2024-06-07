import { TfiMenu } from "react-icons/tfi";
import shamme from "../assets/logo/shammiLogo.png";
import reciMukk from "../assets/logo/recymukkLogo.png";
import samsungLogo from "../assets/mobileLogos/samsungLogo.jpg";
import iphoneLogo from "../assets/mobileLogos/iphoneLogo.jpg";
import itelLogo from "../assets/mobileLogos/itelLogo.jpg";
import nokiaLog from "../assets/mobileLogos/nokiaLogo.jpg";
import miLogo from "../assets/mobileLogos/miLogo.jpg";
import panasonicLogo from "../assets/mobileLogos/panasonicLogo.jpg";
import oppoLogo from "../assets/mobileLogos/oppoLogo.jpg";
import vivoLogo from "../assets/mobileLogos/vivoLogo.jpg";
import realmeLogo from "../assets/mobileLogos/realmeLogo.jpg";
import cryingGirl from "../assets/logo/cryinggirlLogo.png";
// import acceries from "../assets/offerSection/acceries.png";
import delivery from "../assets/offerSection/delivery.png";
import freee from "../assets/offerSection/Freee.png";
import headsetOffer from "../assets/offerSection/headsetoffer.png";

import recishop1 from "../assets/shopimage/recyshop1.jpg";
import recishop2 from "../assets/shopimage/recyshop2.jpg";
import recishop3 from "../assets/shopimage/recyshop3.jpg";

interface Logo {
  default: string;
}

const logoArray: Logo[] = [
  { default: samsungLogo },
  { default: realmeLogo },
  { default: panasonicLogo },
  { default: itelLogo },
  { default: vivoLogo },
  { default: oppoLogo },
  { default: iphoneLogo },
  { default: miLogo },
  { default: nokiaLog },
  { default: samsungLogo },
  { default: realmeLogo },
  { default: panasonicLogo },
  { default: itelLogo },
  { default: vivoLogo },
  { default: oppoLogo },
  { default: iphoneLogo },
  { default: miLogo },
  { default: nokiaLog },
  { default: samsungLogo },
  { default: realmeLogo },
  { default: panasonicLogo },
  { default: itelLogo },
  { default: vivoLogo },
  { default: oppoLogo },
  { default: iphoneLogo },
  { default: miLogo },
  { default: nokiaLog },
  { default: samsungLogo },
  { default: realmeLogo },
  { default: panasonicLogo },
  { default: itelLogo },
  { default: vivoLogo },
  { default: oppoLogo },
  { default: iphoneLogo },
  { default: miLogo },
  { default: nokiaLog },
  { default: samsungLogo },
  { default: realmeLogo },
  { default: panasonicLogo },
  { default: itelLogo },
  { default: vivoLogo },
  { default: oppoLogo },
  { default: iphoneLogo },
  { default: miLogo },
  { default: nokiaLog },
  { default: samsungLogo },
  { default: realmeLogo },
  { default: panasonicLogo },
  { default: itelLogo },
  { default: vivoLogo },
  { default: oppoLogo },
  { default: iphoneLogo },
  { default: miLogo },
  { default: nokiaLog },
];
const shopArray: Logo[] = [
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
  { default: recishop1 },
  { default: recishop2 },
  { default: recishop3 },
];
const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header-navigation">
          <div className="header-menu">
            <TfiMenu />
          </div>
          <div className="recy-logo-all">
            <img className="header-recy-logo" src={reciMukk} alt="" />
            <div className="header-logo">recymukk.in</div>
          </div>
          <div className="header-icons">
            {/* <CiUser /> */}
            {/* <CiSearch />
            <FaOpencart /> */}
            <button className="call-button blink_me2">Contact now</button>
          </div>
        </div>
      </header>
      <section className="banner-section">
        <div className="banner-font-section">
          <div className="banner-header1">
            <h3>എടാ മോനേ ...!</h3>
          </div>
          <div className="banner-header2">
            <h2>
              MOBILE <span className="banner-header2-span">പൊട്ടിയോ...? </span>{" "}
            </h2>
          </div>
          <div className="banner-header3">
            <h3 style={{ fontSize: "30px", fontStyle: "italic" }}>
              വിഷമിക്കണ്ട 😉
            </h3>
            <button className="banner-button blink_me">
              Click for service
            </button>{" "}
            <div></div>
          </div>
        </div>
        <div>
          <img className="banner-image" src={shamme} alt="" />
        </div>
      </section>

      <section className="sliding-banner">
        <div className="sliding-banner-content">
          <h2 className="sliding-banner-header1">Fast and Quality Service</h2>
          <h4 className="sliding-banner-header2">
            service available for all brands
          </h4>
        </div>
        <div className="slider">
          <div className="slide-track ">
            {logoArray.map((value, index) => (
              <div key={index} className="slide">
                <img
                  className="sliding-banner-img"
                  src={value.default}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-section">
        <div className="detail-section-product1">
          <h2 className="offer-content1 blink_me" style={{ color: "red" }}>
            free pickup and delivery
          </h2>
          <img className="offer-image" src={delivery} alt="" />
          <div className="offer-imagediv">
            <h1 className="offer-content1">
              ഒറ്റ DIAL മതി Technician വീടിനു മുന്നിൽ ....!
            </h1>
          </div>
        </div>
        <div
          style={{
            width: "30vw",
            backgroundColor: "rgba(100, 112, 188, 255)",
            height: "60vh",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "30vh", width: "20vw" }}
            src={cryingGirl}
            alt=""
          />
          <h2>
            Displays start from{" "}
            <h1 style={{ display: "inline", color: "yellow" }}>₹ 1499/-</h1>
          </h2>
          <h1>
            {" "}
            <span style={{ fontSize: "5vh", color: "yellow" }}>3</span> Months
            warranty{" "}
            <span style={{ color: "yellow", fontSize: "3vh" }}>
              (for selected models)
            </span>{" "}
          </h1>
        </div>
        <div className="detail-section-product2">
          <div style={{ display: "flex" }}>
            <img className="offer-image2" src={freee} alt="" />
            <img
              style={{ height: "30vh", marginLeft: "-20px", width: "20vw" }}
              src={headsetOffer}
              alt=""
            />
          </div>
          <div className="offer-imagediv">
            <h1 className="offer-content2">
              HEADSET WORTH -299/- TEMPARED WORTH-299/- MOBILE CASE WORTH -299/-
            </h1>
          </div>
        </div>
      </section>

      <section className="clothing-section">
        <div className="clothing-section-content">
          <h1 style={{ fontStyle: "bold", fontSize: "9vh" }}>Our Products</h1>
        </div>
        <div className="slider2">
          <div className="slide-track2 ">
            {shopArray.map((value, index) => (
              <div key={index} className="slide2">
                <img
                  className="sliding-banner-img2"
                  src={value.default}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
