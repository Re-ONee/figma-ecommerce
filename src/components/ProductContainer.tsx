import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PriceContainer from "./PriceContainer";
import styles from "./ProductContainer.module.css";
const ProductContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFeaturedProductsContainerClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onCTAContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/product-comparison");
  }, [navigate]);

  const onShowMoreContainerClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <div className={styles.ourProducts}>
      <div className={styles.showMore} onClick={onShowMoreContainerClick}>
        <div className={styles.showMoreChild} />
        <div className={styles.showMore1}>Show More</div>
      </div>
      <PriceContainer
        price="Rp 2.500.000"
        productPrice="Syltherine"
        chairDescription="Stylish cafe chair"
        imageSize="/images@2x.png"
        productImageUrl="/gridiconsshare.svg"
        itemPrice="/comparesvgrepocom-11.svg"
        itemDimensions="/heart.svg"
        itemPriceText="Rp 2.500.000"
        productImageAltText="Leviosa"
        chairTitle="Stylish cafe chair"
        imageDimensions="/images1@2x.png"
        imageSizeText="/gridiconsshare.svg"
        itemImageUrl="/comparesvgrepocom-11.svg"
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
        itemImageDimensions="/comparesvgrepocom-14.svg"
        imageDescription="/heart.svg"
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
        divPosition="absolute"
        divTop="80px"
        divLeft="0px"
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
        onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer1Click={onFeaturedProductsContainerClick}
        onCTAContainer1Click={onCTAContainerClick}
        onFrameContainer8Click={onFrameContainer2Click}
        onFeaturedProductsContainer2Click={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer3Click={onFeaturedProductsContainerClick}
      />
      <PriceContainer
        price="Rp 1.500.000"
        productPrice="Grifo"
        chairDescription="Night lamp"
        imageSize="/images4@2x.png"
        productImageUrl="/gridiconsshare.svg"
        itemPrice="/comparesvgrepocom-11.svg"
        itemDimensions="/heart.svg"
        itemPriceText="Rp 150.000"
        productImageAltText="Muggo"
        chairTitle="Small mug"
        imageDimensions="/images5@2x.png"
        imageSizeText="/gridiconsshare.svg"
        itemImageUrl="/comparesvgrepocom-11.svg"
        itemImageUrlText="/heart.svg"
        productTitle="Pingky"
        sofaDescription="Cute bed set"
        itemImageUrlText2="/images6@2x.png"
        imageDimensionsText="/gridiconsshare.svg"
        imageSizeText2="/heart.svg"
        productPriceText="Potty"
        outdoorFurnitureDescripti="Minimalist flower pot"
        itemImageAltText="/images7@2x.png"
        imageDimensionsText2="/gridiconsshare.svg"
        itemImageDimensions="/comparesvgrepocom-14.svg"
        imageDescription="/heart.svg"
        showFixPrice={false}
        showLabel={false}
        new1={false}
        popUp={false}
        fixPrice2={false}
        label
        showDiscount={false}
        new2
        showPopUp={false}
        new3={false}
        popUp1={false}
        fixPrice3={false}
        discount={false}
        popUp2={false}
        divPosition="absolute"
        divTop="558px"
        divLeft="0px"
        newWidth="127px"
        popUpWidth="127px"
        bGWidth="70.87%"
        bGRight="29.13%"
        newWidth1="109px"
        popUpWidth1="109px"
        bGWidth1="80.73%"
        bGRight1="19.27%"
        descriptionCursor="unset"
        frameDivColor="#e89f71"
        sortDescriptionCursor="unset"
        bGWidth2="40.55%"
        bGRight2="59.45%"
        propWidth="168px"
        onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer1Click={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer2Click={onFeaturedProductsContainerClick}
        onFeaturedProductsContainer3Click={onFeaturedProductsContainerClick}
      />
      <b className={styles.title}>Our Products</b>
    </div>
  );
};

export default ProductContainer;
