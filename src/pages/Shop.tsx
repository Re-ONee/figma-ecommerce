import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import ShopSection from "../components/ShopSection";
import FilterSection from "../components/FilterSection";
import PriceContainer from "../components/PriceContainer";
import LocationCard from "../components/LocationCard";
import HighQualitySection from "../components/HighQualitySection";
import styles from "./Shop.module.css";
const Shop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  const onFeaturedProductsContainerClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onCTAContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/product-comparison");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  return (
    <div className={styles.shop}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline4.svg"
        imageDimensionsText="/akariconssearch4.svg"
        imageDimensionsCode="/akariconsheart3.svg"
        imageCode="/antdesignshoppingcartoutlined2.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <ShopSection />
      <FilterSection />
      <div className={styles.shopInner}>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer4Click}
        >
          <div className={styles.groupChild} />
          <div className={styles.frameParent}>
            <PriceContainer
              price="Rp 2.500.000"
              productPrice="Syltherine"
              chairDescription="Stylish cafe chair"
              imageSize="/images@2x.png"
              productImageUrl="/gridiconsshare1.svg"
              itemPrice="/comparesvgrepocom-12.svg"
              itemDimensions="/heart2.svg"
              itemPriceText="Rp 2.500.000"
              productImageAltText="Leviosa"
              chairTitle="Stylish cafe chair"
              imageDimensions="/images1@2x.png"
              imageSizeText="/gridiconsshare1.svg"
              itemImageUrl="/comparesvgrepocom-13.svg"
              itemImageUrlText="/heart2.svg"
              productTitle="Lolito"
              sofaDescription="Luxury big sofa"
              itemImageUrlText2="/images2@2x.png"
              imageDimensionsText="/gridiconsshare1.svg"
              imageSizeText2="/heart2.svg"
              productPriceText="Respira"
              outdoorFurnitureDescripti="Outdoor bar table and stool"
              itemImageAltText="/images3@2x.png"
              imageDimensionsText2="/gridiconsshare1.svg"
              itemImageDimensions="/comparesvgrepocom-11.svg"
              imageDescription="/heart2.svg"
              showFixPrice
              showLabel
              new1={false}
              popUp={false}
              fixPrice2={false}
              label={false}
              showDiscount
              new2={false}
              showPopUp
              new3={false}
              popUp1={false}
              fixPrice3={false}
              discount={false}
              popUp2={false}
              onFeaturedProductsContainerClick={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer1Click={
                onFeaturedProductsContainerClick
              }
              onCTAContainer1Click={onCTAContainerClick}
              onFrameContainer8Click={onFrameContainer2Click}
              onFeaturedProductsContainer2Click={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer3Click={
                onFeaturedProductsContainerClick
              }
            />
            <PriceContainer
              price="Rp 2.500.000"
              productPrice="Syltherine"
              chairDescription="Stylish cafe chair"
              imageSize="/images@2x.png"
              productImageUrl="/gridiconsshare2.svg"
              itemPrice="/comparesvgrepocom-12.svg"
              itemDimensions="/heart.svg"
              itemPriceText="Rp 2.500.000"
              productImageAltText="Leviosa"
              chairTitle="Stylish cafe chair"
              imageDimensions="/images1@2x.png"
              imageSizeText="/gridiconsshare2.svg"
              itemImageUrl="/comparesvgrepocom-13.svg"
              itemImageUrlText="/heart.svg"
              productTitle="Lolito"
              sofaDescription="Luxury big sofa"
              itemImageUrlText2="/images2@2x.png"
              imageDimensionsText="/gridiconsshare2.svg"
              imageSizeText2="/heart.svg"
              productPriceText="Respira"
              outdoorFurnitureDescripti="Outdoor bar table and stool"
              itemImageAltText="/images3@2x.png"
              imageDimensionsText2="/gridiconsshare2.svg"
              itemImageDimensions="/comparesvgrepocom-11.svg"
              imageDescription="/heart.svg"
              showFixPrice
              showLabel
              new1={false}
              popUp={false}
              fixPrice2={false}
              label={false}
              showDiscount
              new2={false}
              showPopUp={false}
              new3={false}
              popUp1={false}
              fixPrice3={false}
              discount={false}
              popUp2={false}
              divPosition="unset"
              divTop="unset"
              divLeft="unset"
              newWidth="249px"
              popUpWidth="249px"
              bGWidth="55.42%"
              bGRight="44.58%"
              newWidth1="138px"
              popUpWidth1="131px"
              bGWidth1="100%"
              bGRight1="0%"
              descriptionCursor="pointer"
              frameDivColor="#b88e2f"
              sortDescriptionCursor="pointer"
              bGWidth2="47.64%"
              bGRight2="52.36%"
              propWidth="224px"
              onFeaturedProductsContainerClick={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer1Click={
                onFeaturedProductsContainerClick
              }
              onCTAContainer1Click={onCTAContainerClick}
              onFrameContainer8Click={onFrameContainer2Click}
              onFeaturedProductsContainer2Click={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer3Click={
                onFeaturedProductsContainerClick
              }
            />
            <PriceContainer
              price="Rp 2.500.000"
              productPrice="Syltherine"
              chairDescription="Stylish cafe chair"
              imageSize="/images@2x.png"
              productImageUrl="/gridiconsshare.svg"
              itemPrice="/comparesvgrepocom-12.svg"
              itemDimensions="/heart.svg"
              itemPriceText="Rp 2.500.000"
              productImageAltText="Leviosa"
              chairTitle="Stylish cafe chair"
              imageDimensions="/images1@2x.png"
              imageSizeText="/gridiconsshare.svg"
              itemImageUrl="/comparesvgrepocom-13.svg"
              itemImageUrlText="/heart.svg"
              productTitle="Lolito"
              sofaDescription="Luxury big sofa"
              itemImageUrlText2="/images2@2x.png"
              imageDimensionsText="/gridiconsshare.svg"
              imageSizeText2="/heart.svg"
              productPriceText="Respira"
              outdoorFurnitureDescripti="Outdoor bar table and stool"
              itemImageAltText="/images3@2x.png"
              imageDimensionsText2="/gridiconsshare.svg"
              itemImageDimensions="/comparesvgrepocom-11.svg"
              imageDescription="/heart.svg"
              showFixPrice
              showLabel
              new1={false}
              popUp={false}
              fixPrice2={false}
              label={false}
              showDiscount
              new2={false}
              showPopUp={false}
              new3={false}
              popUp1={false}
              fixPrice3={false}
              discount={false}
              popUp2={false}
              divPosition="unset"
              divTop="unset"
              divLeft="unset"
              newWidth="249px"
              popUpWidth="249px"
              bGWidth="55.42%"
              bGRight="44.58%"
              newWidth1="138px"
              popUpWidth1="131px"
              bGWidth1="100%"
              bGRight1="0%"
              descriptionCursor="pointer"
              frameDivColor="#b88e2f"
              sortDescriptionCursor="pointer"
              bGWidth2="47.64%"
              bGRight2="52.36%"
              propWidth="224px"
              onFeaturedProductsContainerClick={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer1Click={
                onFeaturedProductsContainerClick
              }
              onCTAContainer1Click={onCTAContainerClick}
              onFrameContainer8Click={onFrameContainer2Click}
              onFeaturedProductsContainer2Click={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer3Click={
                onFeaturedProductsContainerClick
              }
            />
            <PriceContainer
              price="Rp 2.500.000"
              productPrice="Syltherine"
              chairDescription="Stylish cafe chair"
              imageSize="/images@2x.png"
              productImageUrl="/gridiconsshare.svg"
              itemPrice="/comparesvgrepocom-12.svg"
              itemDimensions="/heart.svg"
              itemPriceText="Rp 2.500.000"
              productImageAltText="Leviosa"
              chairTitle="Stylish cafe chair"
              imageDimensions="/images1@2x.png"
              imageSizeText="/gridiconsshare.svg"
              itemImageUrl="/comparesvgrepocom-13.svg"
              itemImageUrlText="/heart.svg"
              productTitle="Lolito"
              sofaDescription="Luxury big sofa"
              itemImageUrlText2="/images2@2x.png"
              imageDimensionsText="/gridiconsshare.svg"
              imageSizeText2="/heart.svg"
              productPriceText="Respira"
              outdoorFurnitureDescripti="Outdoor bar table and stool"
              itemImageAltText="/images3@2x.png"
              imageDimensionsText2="/gridiconsshare.svg"
              itemImageDimensions="/comparesvgrepocom-11.svg"
              imageDescription="/heart.svg"
              showFixPrice
              showLabel
              new1={false}
              popUp={false}
              fixPrice2={false}
              label={false}
              showDiscount
              new2={false}
              showPopUp={false}
              new3={false}
              popUp1={false}
              fixPrice3={false}
              discount={false}
              popUp2={false}
              divPosition="unset"
              divTop="unset"
              divLeft="unset"
              newWidth="249px"
              popUpWidth="249px"
              bGWidth="55.42%"
              bGRight="44.58%"
              newWidth1="138px"
              popUpWidth1="131px"
              bGWidth1="100%"
              bGRight1="0%"
              descriptionCursor="pointer"
              frameDivColor="#b88e2f"
              sortDescriptionCursor="pointer"
              bGWidth2="47.64%"
              bGRight2="52.36%"
              propWidth="224px"
              onFeaturedProductsContainerClick={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer1Click={
                onFeaturedProductsContainerClick
              }
              onCTAContainer1Click={onCTAContainerClick}
              onFrameContainer8Click={onFrameContainer2Click}
              onFeaturedProductsContainer2Click={
                onFeaturedProductsContainerClick
              }
              onFeaturedProductsContainer3Click={
                onFeaturedProductsContainerClick
              }
            />
            <div className={styles.groupParent}>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupInner} />
                <div className={styles.div1}>2</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupInner} />
                <div className={styles.div1}>3</div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.groupChild1} />
                <div className={styles.next}>Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocationCard propBottom="0px" propLeft="-3px" propTop="unset" />
      <HighQualitySection
        imageDimensions="/trophy-11.svg"
        imageId="/guarantee3.svg"
        imageCode="/shipping3.svg"
        imageCodeUrl="/customersupport1.svg"
        rectangleDiv={false}
        propTop="2699px"
        propLeft="calc(50% - 723px)"
      />
    </div>
  );
};

export default Shop;
