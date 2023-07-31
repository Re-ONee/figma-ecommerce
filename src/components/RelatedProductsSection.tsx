import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import FeaturedProductsContainer from "./FeaturedProductsContainer";
import styles from "./RelatedProductsSection.module.css";

type RelatedProductsSectionType = {
  iconCode?: string;
  iconTextCode?: string;
  iconSizeCode?: string;
  new1?: boolean;
  popUp?: boolean;
  fixPrice?: boolean;
  label?: boolean;
  new2?: boolean;
  popUp1?: boolean;
  new3?: boolean;
  popUp2?: boolean;
  fixPrice1?: boolean;
  discount?: boolean;
  popUp3?: boolean;

  /** Style props */
  frameDivTop?: Property.Top;
  gridiconsshareLeft?: Property.Left;
  shareLeft?: Property.Left;

  /** Action props */
  onFeaturedProductsContainerClick?: () => void;
  onFeaturedProductsContainer1Click?: () => void;
  onFeaturedProductsContainer2Click?: () => void;
  onFeaturedProductsContainer3Click?: () => void;
};

const RelatedProductsSection: FunctionComponent<RelatedProductsSectionType> = ({
  iconCode,
  iconTextCode,
  iconSizeCode,
  new1,
  popUp,
  fixPrice,
  label,
  new2,
  popUp1,
  new3,
  popUp2,
  fixPrice1,
  discount,
  popUp3,
  frameDivTop,
  gridiconsshareLeft,
  shareLeft,
  onFeaturedProductsContainerClick,
  onFeaturedProductsContainer1Click,
  onFeaturedProductsContainer2Click,
  onFeaturedProductsContainer3Click,
}) => {
  const groupDiv5Style: CSS.Properties = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  const relatedProductsStyle: CSS.Properties = useMemo(() => {
    return {
      left: gridiconsshareLeft,
    };
  }, [gridiconsshareLeft]);

  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      left: shareLeft,
    };
  }, [shareLeft]);

  return (
    <div className={styles.rectangleParent} style={groupDiv5Style}>
      <div className={styles.groupChild} />
      <div className={styles.relatedProducts} style={relatedProductsStyle}>
        Related Products
      </div>
      <div className={styles.featuredProductsParent} style={frameDiv2Style}>
        <FeaturedProductsContainer
          price="Rp 2.500.000"
          productPrice="Rp 3.500.000"
          productName="Syltherine"
          furnitureName="Stylish cafe chair"
          imageSize="/images@2x.png"
          discountPercentage="-30%"
          productImageUrl="/gridiconsshare.svg"
          itemImageUrl="/comparesvgrepocom-1.svg"
          itemDescription="/heart.svg"
          showFixPrice
          showLabel
          showDiscount
          new1={false}
          popUp={false}
          propWidth="249px"
          propWidth1="249px"
          propWidth2="55.42%"
          propRight="44.58%"
          propCursor="unset"
          propColor="#e89f71"
          propCursor1="unset"
          onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        />
        <FeaturedProductsContainer
          price="Rp 2.500.000"
          productPrice="Rp 3.500.000"
          productName="Leviosa"
          furnitureName="Stylish cafe chair"
          imageSize="/images1@2x.png"
          discountPercentage="-30%"
          productImageUrl="/gridiconsshare.svg"
          itemImageUrl="/comparesvgrepocom-1.svg"
          itemDescription="/heart.svg"
          showFixPrice={false}
          showLabel={false}
          showDiscount
          new1={false}
          popUp={false}
          propWidth="138px"
          propWidth1="131px"
          propWidth2="100%"
          propRight="0%"
          propCursor="unset"
          propColor="#e89f71"
          propCursor1="unset"
          onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        />
        <FeaturedProductsContainer
          price="Rp 7.000.000"
          productPrice="Rp 14.000.000"
          productName="Lolito"
          furnitureName="Luxury big sofa"
          imageSize="/images2@2x.png"
          discountPercentage="-50%"
          productImageUrl="/gridiconsshare.svg"
          itemImageUrl="/comparesvgrepocom-1.svg"
          itemDescription="/heart.svg"
          showFixPrice
          showLabel
          showDiscount
          new1={false}
          popUp={false}
          propWidth="254px"
          propWidth1="254px"
          propWidth2="47.64%"
          propRight="52.36%"
          propCursor="unset"
          propColor="#e89f71"
          propCursor1="unset"
          onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        />
        <FeaturedProductsContainer
          price="Rp 500.000"
          productPrice="Rp 14.000.000"
          productName="Respira"
          furnitureName="Outdoor bar table and stool"
          imageSize="/images3@2x.png"
          discountPercentage="-50%"
          productImageUrl="/gridiconsshare.svg"
          itemImageUrl="/comparesvgrepocom-1.svg"
          itemDescription="/heart1.svg"
          showFixPrice={false}
          showLabel
          showDiscount={false}
          new1
          popUp={false}
          propWidth="224px"
          propWidth1="114px"
          propWidth2="100%"
          propRight="0%"
          propCursor="unset"
          propColor="#e89f71"
          propCursor1="unset"
          onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        />
      </div>
      <div className={styles.showMore}>
        <div className={styles.showMoreChild} />
        <div className={styles.showMore1}>Show More</div>
      </div>
    </div>
  );
};

export default RelatedProductsSection;
