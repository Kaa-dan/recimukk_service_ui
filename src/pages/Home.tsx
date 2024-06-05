import { TfiMenu } from "react-icons/tfi";
import { FaOpencart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
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
import cryinggirlLogo from "../assets/logo/cryinggirlLogo.png";
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
            <CiUser />
            <CiSearch />
            <FaOpencart />
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
            <h3 style={{fontSize:"30px",fontStyle:"italic"}}>വിഷമിക്കണ്ട 😉</h3>
            <button className="banner-button">Click for service</button>{" "}
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
        <div className="sliding-banner-mainimgdiv">
          {logoArray.map((value, index) => (
            <div className="sliding-banner-imgdiv" key={index}>
              <img className="sliding-banner-img" src={value.default} alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
