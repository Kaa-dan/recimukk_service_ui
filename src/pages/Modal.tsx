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
    // border:"1px green solid"
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)", // Make the overlay transparent
  },
};

Modal.setAppElement("#root");

const ModalComponent: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hasOpenedAutomatically, setHasOpenedAutomatically] = useState(false);
  const subtitle = useRef<HTMLHeadingElement | null>(null);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

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

      return () => clearTimeout(timer); // Clean up the timeout on component unmount
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
            style={{ color: "red", fontSize: "4vh", backgroundColor: "white" }}
            onClick={() => closeModal()}
          />
        </div>

        {/* <h2 ref={subtitle}>Hello</h2> */}
        <div
          style={{
            textAlign: "center",
            backgroundColor: "green",
            border: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "3vh",
              fontWeight: "bold",
              color: "yellow",
              padding: "15px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span>Anniversary Offer</span>
            <h1 style={{ fontSize: "4vh" }}>june 10 - 17</h1>
            {/* <h1
              style={{ fontSize: "4vh", color: "orange", fontWeight: "bold",textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"  }}
            >
              {" "} 
              Call 8075391294
            </h1> */}
          </div>
          <div style={{ display: "flex" }}>
            {/* <img style={{ height: "35vh" }} src={limitedOffer} alt="" />
            <img style={{ height: "35vh" }} src={saleImage} alt="" /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "30vh", width: "25vw" }}
                src={bgSale}
                alt=""
              />
              <img
                src={tshirtImage}
                style={{
                  height: "25vh",
                  width: "15vw",
                  //   transform: "rotate(-90deg)", // Rotates the image by 30 degrees
                }}
                alt=""
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                style={{
                  height: "35vh",
                  width: "30vw",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
                }}
                src={shoeImage}
                alt=""
              />
              <h2
                style={{
                  color: "yellow",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                അന്നേ ദിവസങ്ങളിൽ നേടൂ
              </h2>
              <span
                style={{
                  color: "yellow",
                  fontSize: "2vh",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)",
                }}
              >
                <h1
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "3vh",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)",
                  }}
                >
                  1 ₹{" "}
                </h1>{" "}
                Tshirt, Shoes, Flip, etc........
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
