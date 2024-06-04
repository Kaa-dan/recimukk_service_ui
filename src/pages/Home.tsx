import { TfiMenu } from "react-icons/tfi";
import { FaOpencart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import shamme from "../assets/recyLogo.jpg";
const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header-navigation">
          <div className="header-menu">
            <TfiMenu />
          </div>
          <div className="header-logo">recymukk.in</div>
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
            <h3>MEGA</h3>
          </div>
          <div className="banner-header2">
            <h2>ANIME TSHIRT'S DESIGNS</h2>
          </div>
          <div className="banner-header3">
            <h3>BUNDLE</h3>
          </div>
          <div>
            <button  className="banner-button">Contact for service</button>
          </div>
        </div>
        <div>
          <img className="banner-image" src={shamme} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
