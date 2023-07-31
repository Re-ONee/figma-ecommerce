import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import FeaturedProductsContainer from "./FeaturedProductsContainer";
import styles from "./PriceContainer.module.css";

type PriceContainerType = {
  price?: string;
  productPrice?: string;
  chairDescription?: string;
  imageSize?: string;
  productImageUrl?: string;
  itemPrice?: string;
  itemDimensions?: string;
  itemPriceText?: string;
  productImageAltText?: string;
  chairTitle?: string;
  imageDimensions?: string;
  imageSizeText?: string;
  itemImageUrl?: string;
  itemImageUrlText?: string;
  productTitle?: string;
  sofaDescription?: string;
  itemImageUrlText2?: string;
  imageDimensionsText?: string;
  imageSizeText2?: string;
  productPriceText?: string;
  outdoorFurnitureDescripti?: string;
  itemImageAltText?: string;
  imageDimensionsText2?: string;
  itemImageDimensions?: string;
  imageDescription?: string;
  showFixPrice?: boolean;
  showLabel?: boolean;
  new1?: boolean;
  popUp?: boolean;
  fixPrice2?: boolean;
  label?: boolean;
  showDiscount?: boolean;
  new2?: boolean;
  showPopUp?: boolean;
  new3?: boolean;
  popUp1?: boolean;
  fixPrice3?: boolean;
  discount?: boolean;
  popUp2?: boolean;

  /** Style props */
  divPosition?: Property.Position;
  divTop?: Property.Top;
  divLeft?: Property.Left;
  newWidth?: Property.Width;
  popUpWidth?: Property.Width;
  bGWidth?: Property.Width;
  bGRight?: Property.Right;
  newWidth1?: Property.Width;
  popUpWidth1?: Property.Width;
  bGWidth1?: Property.Width;
  bGRight1?: Property.Right;
  descriptionCursor?: Property.Cursor;
  frameDivColor?: Property.Color;
  sortDescriptionCursor?: Property.Cursor;
  bGWidth2?: Property.Width;
  bGRight2?: Property.Right;
  propWidth?: Property.Width;

  /** Action props */
  onFeaturedProductsContainerClick?: () => void;
  onFeaturedProductsContainer1Click?: () => void;
  onCTAContainer1Click?: () => void;
  onFrameContainer8Click?: () => void;
  onFeaturedProductsContainer2Click?: () => void;
  onFeaturedProductsContainer3Click?: () => void;
};

const PriceContainer: FunctionComponent<PriceContainerType> = ({
  price,
  productPrice,
  chairDescription,
  imageSize,
  productImageUrl,
  itemPrice,
  itemDimensions,
  itemPriceText,
  productImageAltText,
  chairTitle,
  imageDimensions,
  imageSizeText,
  itemImageUrl,
  itemImageUrlText,
  productTitle,
  sofaDescription,
  itemImageUrlText2,
  imageDimensionsText,
  imageSizeText2,
  productPriceText,
  outdoorFurnitureDescripti,
  itemImageAltText,
  imageDimensionsText2,
  itemImageDimensions,
  imageDescription,
  showFixPrice,
  showLabel,
  new1,
  popUp,
  fixPrice2,
  label,
  showDiscount,
  new2,
  showPopUp,
  new3,
  popUp1,
  fixPrice3,
  discount,
  popUp2,
  divPosition,
  divTop,
  divLeft,
  newWidth,
  popUpWidth,
  bGWidth,
  bGRight,
  newWidth1,
  popUpWidth1,
  bGWidth1,
  bGRight1,
  descriptionCursor,
  frameDivColor,
  sortDescriptionCursor,
  bGWidth2,
  bGRight2,
  propWidth,
  onFeaturedProductsContainerClick,
  onFeaturedProductsContainer1Click,
  onCTAContainer1Click,
  onFrameContainer8Click,
  onFeaturedProductsContainer2Click,
  onFeaturedProductsContainer3Click,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  const descriptionStyle: CSS.Properties = useMemo(() => {
    return {
      width: newWidth,
    };
  }, [newWidth]);

  const priceStyle: CSS.Properties = useMemo(() => {
    return {
      width: popUpWidth,
    };
  }, [popUpWidth]);

  const productNameStyle: CSS.Properties = useMemo(() => {
    return {
      width: bGWidth,
      right: bGRight,
    };
  }, [bGWidth, bGRight]);

  const descriptionStyle1: CSS.Properties = useMemo(() => {
    return {
      width: newWidth1,
    };
  }, [newWidth1]);

  const priceStyle1: CSS.Properties = useMemo(() => {
    return {
      width: popUpWidth1,
    };
  }, [popUpWidth1]);

  const productNameStyle1: CSS.Properties = useMemo(() => {
    return {
      width: bGWidth1,
      right: bGRight1,
    };
  }, [bGWidth1, bGRight1]);

  const cTAStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: descriptionCursor,
    };
  }, [descriptionCursor]);

  const addToCartStyle: CSS.Properties = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: sortDescriptionCursor,
    };
  }, [sortDescriptionCursor]);

  const productNameStyle2: CSS.Properties = useMemo(() => {
    return {
      width: bGWidth2,
      right: bGRight2,
    };
  }, [bGWidth2, bGRight2]);

  const descriptionStyle2: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.featuredProductsParent} style={frameDiv1Style}>
      <FeaturedProductsContainer
        price="Rp 2.500.000"
        productPrice="Rp 3.500.000"
        productName="Syltherine"
        furnitureName="Stylish cafe chair"
        imageSize="/images@2x.png"
        discountPercentage="-30%"
        productImageUrl="/gridiconsshare1.svg"
        itemImageUrl="/comparesvgrepocom-12.svg"
        itemDescription="/heart2.svg"
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
        productImageUrl="/gridiconsshare1.svg"
        itemImageUrl="/comparesvgrepocom-13.svg"
        itemDescription="/heart2.svg"
        showFixPrice={false}
        showLabel={false}
        showDiscount
        new1={false}
        popUp
        propWidth="138px"
        propWidth1="131px"
        propWidth2="100%"
        propRight="0%"
        propCursor="pointer"
        propColor="#b88e2f"
        propCursor1="pointer"
        onFeaturedProductsContainerClick={onFeaturedProductsContainerClick}
        onCTAContainer13Click={onCTAContainerClick}
        onFrameContainer71Click={onFrameContainer2Click}
      />
      <FeaturedProductsContainer
        price="Rp 7.000.000"
        productPrice="Rp 14.000.000"
        productName="Lolito"
        furnitureName="Luxury big sofa"
        imageSize="/images2@2x.png"
        discountPercentage="-50%"
        productImageUrl="/gridiconsshare1.svg"
        itemImageUrl="/comparesvgrepocom-14.svg"
        itemDescription="/heart2.svg"
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
        productImageUrl="/gridiconsshare1.svg"
        itemImageUrl="/comparesvgrepocom-11.svg"
        itemDescription="/heart2.svg"
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
  );
};

export default PriceContainer;
