import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FeaturedProductsContainer.module.css";

type FeaturedProductsContainerType = {
  price?: string;
  productPrice?: string;
  productName?: string;
  furnitureName?: string;
  imageSize?: string;
  discountPercentage?: string;
  productImageUrl?: string;
  itemImageUrl?: string;
  itemDescription?: string;
  showFixPrice?: boolean;
  showLabel?: boolean;
  showDiscount?: boolean;
  new1?: boolean;
  popUp?: boolean;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
  propRight?: Property.Right;
  propCursor?: Property.Cursor;
  propColor?: Property.Color;
  propCursor1?: Property.Cursor;

  /** Action props */
  onFeaturedProductsContainerClick?: () => void;
  onCTAContainer13Click?: () => void;
  onFrameContainer71Click?: () => void;
};

const FeaturedProductsContainer: FunctionComponent<
  FeaturedProductsContainerType
> = ({
  price,
  productPrice,
  productName,
  furnitureName,
  imageSize,
  discountPercentage,
  productImageUrl,
  itemImageUrl,
  itemDescription,
  showFixPrice,
  showLabel,
  showDiscount,
  new1,
  popUp,
  propWidth,
  propWidth1,
  propWidth2,
  propRight,
  propCursor,
  propColor,
  propCursor1,
  onFeaturedProductsContainerClick,
  onCTAContainer13Click,
  onFrameContainer71Click,
}) => {
  const descriptionStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const priceStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const productNameStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
      right: propRight,
    };
  }, [propWidth2, propRight]);

  const cTAStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const addToCartStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <div
      className={styles.featuredProducts}
      onClick={onFeaturedProductsContainerClick}
    >
      <div className={styles.bg} />
      <div className={styles.description} style={descriptionStyle}>
        <div className={styles.price} style={priceStyle}>
          <div className={styles.fixPriceParent}>
            <div className={styles.fixPrice}>{price}</div>
            {showFixPrice && (
              <div className={styles.fixPrice1}>{productPrice}</div>
            )}
          </div>
        </div>
        <div className={styles.productName} style={productNameStyle}>
          <div className={styles.productName1}>{productPrice}</div>
          <div className={styles.sortDescription}>{chairDescription}</div>
        </div>
      </div>
      <img className={styles.imagesIcon} alt="" src={imageSize} />
      {showLabel && (
        <div className={styles.label}>
          {showDiscount && (
            <div className={styles.discount}>
              <div className={styles.discountChild} />
              <div className={styles.div}>{discountPercentage}</div>
            </div>
          )}
          {!new1 && (
            <div className={styles.new}>
              <div className={styles.newChild} />
              <div className={styles.new1}>New</div>
            </div>
          )}
        </div>
      )}
      {!popUp && (
        <div className={styles.popUp}>
          <div className={styles.overlay} />
          <div className={styles.button}>
            <div
              className={styles.cta}
              style={cTAStyle}
              onClick={onCTAContainer13Click}
            >
              <div className={styles.bg1} />
              <div className={styles.addToCart} style={addToCartStyle}>
                Add to cart
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.gridiconsshareParent}>
                <img
                  className={styles.gridiconsshare}
                  alt=""
                  src={productImageUrl}
                />
                <div className={styles.fixPrice}>Share</div>
              </div>
              <div
                className={styles.gridiconsshareParent}
                style={frameDivStyle}
                onClick={onFrameContainer71Click}
              >
                <img className={styles.gridiconsshare} alt="" src={itemPrice} />
                <div className={styles.fixPrice}>Compare</div>
              </div>
              <div className={styles.gridiconsshareParent}>
                <img className={styles.heartIcon} alt="" src={itemDimensions} />
                <div className={styles.fixPrice}>Like</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProductsContainer;
