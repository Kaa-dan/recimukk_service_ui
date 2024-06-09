import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import shoeImage from "../assets/modelImage/shoe.png";
import tshirtImage from "../assets/modelImage/tshirt.png";
import bgSale from "../assets/modelImage/bgsale.png";
import { ImCancelCircle } from "react-icons/im";

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "75vh",
    width: "60vw",
    overflow: "hidden",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    zIndex:"4"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};

Modal.setAppElement("#root");

const ModalComponent: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hasOpenedAutomatically, setHasOpenedAutomatically] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const subtitle = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!hasOpenedAutomatically) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasOpenedAutomatically(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [hasOpenedAutomatically]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ backgroundColor: "transparent" }}>
          <ImCancelCircle
            style={{
              color: "red",
              fontSize: isMobile ? "2vh" : "4vh",
              backgroundColor: "white",
            }}
            onClick={() => closeModal()}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "green",
            border: "none",
            display: "flex",
            flexDirection: isMobile ? "column" : "column",
          }}
        >
          <div
            style={{
              fontSize: isMobile ? "1vh" : "3vh",
              fontWeight: "bold",
              color: "yellow",
              padding: "15px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span>Anniversary Offer</span>
            <h1 style={{ fontSize: isMobile ? "3vh" : "4vh" }}>June 10 - 17</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: isMobile ? "15vh" : "30vh",
                  width: isMobile ? "30vw" : "25vw",
                }}
                src={bgSale}
                alt=""
              />
              <img
                src={tshirtImage}
                style={{
                  height: isMobile ? "10vh" : "25vh",
                  width: isMobile ? "30vw" : "15vw",
                }}
                alt=""
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
              }}
            >
              <img
                style={{
                  height: isMobile ? "15vh" : "35vh",
                  width: isMobile ? "20vw" : "30vw",
                  // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
                }}
                src={shoeImage}
                alt=""
              />
              <h2
                style={{
                  color: "yellow",
                  fontSize: isMobile ? "2vh" : "3vh",
                  fontWeight: "bolder",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                അന്നേ ദിവസങ്ങളിൽ നേടൂ 1 ₹ Tshirt, Shoes, Flip, etc........
              </h2>
              {/* <h1
                style={{
                  color: "yellow",
                  fontSize: isMobile ? "1.5vh" : "2vh",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)",
                  
                }}
              > */}
              <h1
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: isMobile ? "2vh" : "3vh",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)",
                }}
              ></h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
