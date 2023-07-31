import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import AsgaardSofaSection from "../components/AsgaardSofaSection";
import AsgaardSofaSection2 from "../components/AsgaardSofaSection2";
import RelatedProductsSection from "../components/RelatedProductsSection";
import LocationCard from "../components/LocationCard";
import styles from "./SingleProduct.module.css";
const SingleProduct: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  const onFeaturedProductsContainerClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onSingleProductContainerClick = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div
      className={styles.singleProduct}
      onClick={onSingleProductContainerClick}
    >
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline3.svg"
        imageDimensionsText="/akariconssearch3.svg"
        imageDimensionsCode="/akariconsheart2.svg"
        imageCode="/antdesignshoppingcartoutlined.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <AsgaardSofaSection propBackgroundColor="#f9f1e7" />
      <AsgaardSofaSection2 />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.descriptionParent}>
          <div className={styles.description}>Description</div>
          <div className={styles.additionalInformation}>
            Additional Information
          </div>
          <div className={styles.reviews5}>Reviews [5]</div>
        </div>
        <div className={styles.embodyingTheRawWaywardSpiParent}>
          <div className={styles.embodyingTheRaw}>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </div>
          <div className={styles.weighingInUnder}>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/group-109@2x.png" />
        <div className={styles.lineDiv} />
      </div>
      <RelatedProductsSection
        iconCode="/comparesvgrepocom-11.svg"
        iconTextCode="/comparesvgrepocom-11.svg"
        iconSizeCode="/heart.svg"
        new1={false}
        popUp={false}
        fixPrice={false}
        label={false}
        new2={false}
        popUp1={false}
        new3={false}
        popUp2={false}
        fixPrice1={false}
        discount={false}
        popUp3={false}
        frameDivTop="1787px"
        gridiconsshareLeft="564px"
        shareLeft="100px"
        onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer1Click={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer2Click={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer3Click={onFeaturedProductsContainerClick}
      />
      <LocationCard propBottom="unset" propLeft="0px" propTop="2552px" />
    </div>
  );
};

export default SingleProduct;
