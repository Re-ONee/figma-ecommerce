import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import CartSection from "../components/CartSection";
import BillingDetailsForm from "../components/BillingDetailsForm";
import HighQualitySection from "../components/HighQualitySection";
import LocationCard from "../components/LocationCard";
import styles from "./Checkout.module.css";
const Checkout: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div className={styles.checkout}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline1.svg"
        imageDimensionsText="/akariconssearch1.svg"
        imageDimensionsCode="/akariconsheart1.svg"
        imageCode="/antdesignshoppingcartoutlined1.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <CartSection
        buttonText="Checkout"
        actionButtonText="Checkout"
        propLeft="604px"
        propWidth="233px"
        propLeft1="78px"
        propWidth1="157px"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupParent}>
          <BillingDetailsForm />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.groupContainer}>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupInner} />
                <div className={styles.placeOrder}>Place order</div>
              </div>
              <div className={styles.product}>Product</div>
              <div className={styles.subtotal}>Subtotal</div>
              <b className={styles.rs25000000}>Rs. 250,000.00</b>
              <div className={styles.subtotal1}>Subtotal</div>
              <div className={styles.total}>Total</div>
              <div className={styles.asgaardSofa}>Asgaard sofa</div>
              <div className={styles.x}>X</div>
              <div className={styles.div}>1</div>
              <div className={styles.rs250000001}>Rs. 250,000.00</div>
              <div className={styles.rs250000002}>Rs. 250,000.00</div>
              <div className={styles.yourPersonalDataContainer}>
                <span
                  className={styles.yourPersonalData}
                >{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
                <span className={styles.privacyPolicy}>privacy policy.</span>
              </div>
              <div className={styles.lineDiv} />
              <div className={styles.directBankTransferParent}>
                <div className={styles.directBankTransfer}>
                  Direct Bank Transfer
                </div>
                <div className={styles.makeYourPayment}>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </div>
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.directBankTransferGroup}>
                <div className={styles.cashOnDelivery}>
                  Direct Bank Transfer
                </div>
                <div className={styles.groupChild1} />
              </div>
              <div className={styles.cashOnDeliveryParent}>
                <div className={styles.cashOnDelivery}>Cash On Delivery</div>
                <div className={styles.groupChild1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HighQualitySection
        imageDimensions="/trophy-1.svg"
        imageId="/guarantee1.svg"
        imageCode="/shipping1.svg"
        imageCodeUrl="/customersupport.svg"
        rectangleDiv={false}
        propTop="2245px"
        propLeft="0px"
      />
      <LocationCard propBottom="unset" propLeft="0px" propTop="2515px" />
    </div>
  );
};

export default Checkout;
