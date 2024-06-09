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

import recishop2 from "../assets/shopimage/recyshop2.jpg";

import recishop4 from "../assets/shopimage/recyshop4.jpg";
import recishop5 from "../assets/shopimage/recishop5.jpg";
import recishop6 from "../assets/shopimage/recishop6.jpg";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import ModalComponent from "./Modal";
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
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
  { default: recishop4 },
  { default: recishop5 },
  { default: recishop6 },

  { default: recishop2 },
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
            <button className="call-button">Contact now</button>
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
            <h3 className="vishamikanda">വിഷമിക്കണ്ട 😉</h3>
            <button className="banner-button blink_me">
              Click for service
            </button>{" "}
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
          <h2 className="offer-content1 " style={{ color: "red" }}>
            free pickup and delivery
          </h2>
          <img className="offer-image" src={delivery} alt="" />
          <div className="offer-imagediv">
            <h1 className="offer-content1">
              ഒറ്റ DIAL മതി Technician വീടിനു മുന്നിൽ ....!
            </h1>
          </div>
        </div>
        <div className="detail-section-product3">
          <img className="offer-image-3" src={cryingGirl} alt="" />
          <h2 className="section-font-2">
            Displays start from{" "}
            <h1 style={{ display: "inline", color: "yellow" }}>₹ 1499/-</h1>
          </h2>
          <h1 className="section-font-3">
            {" "}
            <span style={{ fontSize: "5vh", color: "yellow" }}>3</span> Months
            warranty{" "}
            <span className="section-font-4">(for selected models)</span>{" "}
          </h1>
        </div>
        <div className="detail-section-product2">
          <div className="detail-section-product2-div">
            <img className="offer-image2" src={freee} alt="" />
            <img className="offer-image33" src={headsetOffer} alt="" />
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
          <h1 className="shop-header">Our Products</h1>
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
      <footer className="footer">
        <div className="footer-div-style">
          <h2>shop</h2>
          <div className="shopfont-style">
            <span>Karamana</span>
            <button className="location-button">
              {" "}
              <CiLocationOn />
              Location
            </button>
          </div>
          <div className="shopfont-style">
            <span>Attukal {" "}</span>
            <button className="location-button">
              {" "}
              <CiLocationOn />
              Location
            </button>
          </div>
        </div>

        <div
        className="contact-details"
        
        >
          <h2>Contact</h2>
          <span> 7907444987</span>

          <span className="whatsapplogo" >
            <FaWhatsappSquare />
            <span> Whatsapp</span>
          </span>

          <span className="instagramLogo" >
            <GrInstagram /> Instagram
          </span>
        </div>

        <div className="recimukk">
          <span>© 2024, Recy_mukk.</span>
        </div>
      </footer>
      <ModalComponent />
    </div>
  );
};

export default Home;
