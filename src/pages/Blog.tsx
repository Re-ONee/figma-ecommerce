import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import CartSection from "../components/CartSection";
import HighQualitySection from "../components/HighQualitySection";
import LocationCard from "../components/LocationCard";
import CategoryContainer from "../components/CategoryContainer";
import MillennialDesignContainer1 from "../components/MillennialDesignContainer1";
import RecentPostsContainer from "../components/RecentPostsContainer";
import styles from "./Blog.module.css";
const Blog: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  return (
    <div className={styles.blog}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline1.svg"
        imageDimensionsText="/akariconssearch1.svg"
        imageDimensionsCode="/akariconsheart1.svg"
        imageCode="/antdesignshoppingcartoutlined1.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <CartSection
        buttonText="Blog"
        actionButtonText="Blog"
        propLeft="667px"
        propWidth="107px"
        propLeft1="15px"
        propWidth1="115px"
      />
      <HighQualitySection
        imageDimensions="/trophy-1.svg"
        imageId="/guarantee4.svg"
        imageCode="/shipping4.svg"
        imageCodeUrl="/customersupport.svg"
        rectangleDiv={false}
        propTop="3184px"
        propLeft="0px"
      />
      <LocationCard propBottom="0px" propLeft="0px" propTop="unset" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <CategoryContainer />
        <div className={styles.groupParent}>
          <MillennialDesignContainer1
            articleTitle="Going all-in with millennial design"
            imageDescription="/rectangle-68@2x.png"
            decoratingMaterial="Wood"
            designDimensions="/uiscalender.svg"
          />
          <MillennialDesignContainer1
            articleTitle="Exploring new ways of decorating"
            imageDescription="/rectangle-681@2x.png"
            decoratingMaterial="Handmade"
            designDimensions="/uiscalender1.svg"
            propTop="848px"
            propWidth="393px"
            propWidth1="122px"
          />
          <MillennialDesignContainer1
            articleTitle="Handmade pieces that took time to make"
            imageDescription="/rectangle-682@2x.png"
            decoratingMaterial="Wood"
            designDimensions="/uiscalender2.svg"
            propTop="1696px"
            propWidth="349px"
            propWidth1="78px"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <RecentPostsContainer />
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div1}>2</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div1}>3</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <div className={styles.next}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
