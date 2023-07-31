import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import CartSection from "../components/CartSection";
import HighQualitySection from "../components/HighQualitySection";
import LocationCard from "../components/LocationCard";
import AddressContainer from "../components/AddressContainer";
import styles from "./Contact.module.css";
const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div className={styles.contact}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline1.svg"
        imageDimensionsText="/akariconssearch1.svg"
        imageDimensionsCode="/akariconsheart1.svg"
        imageCode="/antdesignshoppingcartoutlined1.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <CartSection
        buttonText="Contact"
        actionButtonText="Contact"
        propLeft="622px"
        propWidth="196px"
        propLeft1="60px"
        propWidth1="145px"
      />
      <HighQualitySection
        imageDimensions="/trophy-1.svg"
        imageId="/guarantee1.svg"
        imageCode="/shipping1.svg"
        imageCodeUrl="/customersupport.svg"
        rectangleDiv={false}
        propTop="1560px"
        propLeft="0px"
      />
      <LocationCard propBottom="unset" propLeft="0px" propTop="1860px" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.getInTouch}>Get In Touch With Us</div>
        <div
          className={styles.forMoreInformation}
        >{`For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!`}</div>
        <div className={styles.groupParent}>
          <AddressContainer />
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.groupContainer}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupInner} />
                  <div className={styles.submit}>Submit</div>
                </div>
                <div className={styles.yourNameParent}>
                  <div className={styles.yourName}>Your name</div>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.emailAddressParent}>
                  <div className={styles.emailAddress}>Email address</div>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.abcdefcom}>Abc@def.com</div>
                </div>
                <div className={styles.subjectParent}>
                  <div className={styles.subject}>Subject</div>
                  <div className={styles.groupChild2} />
                  <div className={styles.abcdefcom}>This is an optional</div>
                </div>
                <div className={styles.messageParent}>
                  <div className={styles.subject}>Message</div>
                  <div className={styles.groupChild3} />
                  <div className={styles.abcdefcom}>
                    Hi! i’d like to ask about
                  </div>
                </div>
                <div className={styles.abc}>Abc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
