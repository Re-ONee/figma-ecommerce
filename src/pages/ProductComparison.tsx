import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import ProductComparisonSection from "../components/ProductComparisonSection";
import FormContainer from "../components/FormContainer";
import HighQualitySection from "../components/HighQualitySection";
import LocationCard from "../components/LocationCard";
import styles from "./ProductComparison.module.css";
const ProductComparison: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/cart-sidebar");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <div className={styles.productComparison}>
      <ContainerCardFormFilter
        imageDimensions="/mdiaccountalertoutline2.svg"
        imageDimensionsText="/akariconssearch2.svg"
        imageDimensionsCode="/akariconsheart.svg"
        imageCode="/antdesignshoppingcartoutlined.svg"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <ProductComparisonSection />
      <div className={styles.goToProductPageForMorePrParent}>
        <div className={styles.goToProductContainer}>
          <span className={styles.goToProductContainer1}>
            <p
              className={styles.goToProduct}
            >{`Go to Product page for more `}</p>
            <p className={styles.goToProduct}>Products</p>
          </span>
        </div>
        <div className={styles.asgaardSofa}>Asgaard Sofa</div>
        <div className={styles.outdoorSofaSet}>Outdoor Sofa Set</div>
        <div className={styles.general}>{`General `}</div>
        <div className={styles.dimensions}>Dimensions</div>
        <div className={styles.warranty}>Warranty</div>
        <div className={styles.product}>{`Product `}</div>
        <div className={styles.salesPackage}>Sales Package</div>
        <div className={styles.width}>Width</div>
        <div className={styles.warrantySummary}>Warranty Summary</div>
        <div className={styles.sectionalSofa}>1 sectional sofa</div>
        <div className={styles.threeSeater2}>
          1 Three Seater, 2 Single Seater
        </div>
        <div className={styles.cm}>265.32 cm</div>
        <div className={styles.yearManufacturingWarranty}>
          1 Year Manufacturing Warranty
        </div>
        <div className={styles.yearManufacturingWarranty1}>
          1.2 Year Manufacturing Warranty
        </div>
        <div className={styles.cm1}>265.32 cm</div>
        <div className={styles.tfcbligrbl6srhs}>TFCBLIGRBL6SRHS</div>
        <div className={styles.dtubligrbl568}>DTUBLIGRBL568</div>
        <div className={styles.cm2}>76 cm</div>
        <div className={styles.cm3}>76 cm</div>
        <div className={styles.foam}>Foam</div>
        <div className={styles.matte}>Matte</div>
        <div className={styles.fillingMaterial}>Filling Material</div>
        <div className={styles.finishType}>Finish Type</div>
        <div className={styles.adjustableHeadrest}>Adjustable Headrest</div>
        <div className={styles.maximumLoadCapacity}>Maximum Load Capacity</div>
        <div className={styles.originOfManufacture}>Origin of Manufacture</div>
        <div className={styles.modelNumber}>Model Number</div>
        <div className={styles.height}>Height</div>
        <div className={styles.warrantyServiceTypeContainer}>
          <span className={styles.goToProductContainer1}>
            <p className={styles.goToProduct}>{`Warranty Service `}</p>
            <p className={styles.goToProduct}>Type</p>
          </span>
        </div>
        <div className={styles.secondaryMaterial}>Secondary Material</div>
        <div className={styles.depth}>Depth</div>
        <div className={styles.coveredInWarranty}>Covered in Warranty</div>
        <div className={styles.solidWood}>Solid Wood</div>
        <div className={styles.solidWood1}>Solid Wood</div>
        <div className={styles.cm4}>167.76 cm</div>
        <div className={styles.forWarrantyClaims}>
          For Warranty Claims or Any Product Related Issues Please Email at
          operations@trevifurniture.com
        </div>
        <div className={styles.forWarrantyClaims1}>
          For Warranty Claims or Any Product Related Issues Please Email at
          support@xyz.com
        </div>
        <div className={styles.cm5}>167.76 cm</div>
        <div className={styles.brightGrey}>{`Bright Grey & Lion`}</div>
        <div className={styles.brightGrey1}>{`Bright Grey & Lion`}</div>
        <div className={styles.configuration}>Configuration</div>
        <div className={styles.weight}>Weight</div>
        <div className={styles.lShaped}>L-shaped</div>
        <div className={styles.lShaped1}>L-shaped</div>
        <div className={styles.kg}>45 KG</div>
        <div className={styles.kg1}>65 KG</div>
        <div className={styles.no}>No</div>
        <div className={styles.yes}>yes</div>
        <div className={styles.upholsteryMaterial}>Upholstery Material</div>
        <div className={styles.seatHeight}>Seat Height</div>
        <div className={styles.fabricCotton}>Fabric + Cotton</div>
        <div className={styles.fabricCotton1}>Fabric + Cotton</div>
        <div className={styles.cm6}>41.52 cm</div>
        <div className={styles.warrantyAgainstManufacturing}>
          Warranty Against Manufacturing Defect
        </div>
        <div className={styles.warrantyOfThe}>
          Warranty of the product is limited to manufacturing defects only.
        </div>
        <div className={styles.cm7}>41.52 cm</div>
        <div className={styles.kg2}>280 KG</div>
        <div className={styles.kg3}>300 KG</div>
        <div className={styles.upholsteryColor}>Upholstery Color</div>
        <div className={styles.legHeight}>Leg Height</div>
        <div className={styles.brightGrey2}>{`Bright Grey & Lion`}</div>
        <div className={styles.brightGrey3}>{`Bright Grey & Lion`}</div>
        <div className={styles.cm8}>5.46 cm</div>
        <div className={styles.cm9}>5.46 cm</div>
        <div className={styles.india}>India</div>
        <div className={styles.india1}>India</div>
        <div className={styles.viewMoreParent}>
          <div className={styles.viewMore}>View More</div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.groupItem} />
        <div className={styles.groupParent} onClick={onGroupContainer2Click}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupInner} />
          </div>
          <img
            className={styles.outdoorSofaSet1}
            alt=""
            src="/outdoor-sofa-set-1@2x.png"
          />
        </div>
        <div className={styles.groupWrapper} onClick={onGroupContainer4Click}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <img
              className={styles.asgaardSofa3}
              alt=""
              src="/asgaard-sofa-3@2x.png"
            />
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.rs25000000}>Rs. 250,000.00</div>
        <div className={styles.rs22400000}>Rs. 224,000.00</div>
        <div className={styles.div}>4.2</div>
        <div className={styles.div1}>4.7</div>
        <img className={styles.groupIcon} alt="" src="/group-882.svg" />
        <img className={styles.groupChild3} alt="" src="/group-882.svg" />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.review}>204 Review</div>
        <div className={styles.review1}>145 Review</div>
        <div className={styles.groupContainer} onClick={onGroupContainer6Click}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild6} />
            <div className={styles.addAProduct}>Add A Product</div>
            <div className={styles.chooseAProduct}>Choose a Product</div>
            <img className={styles.vectorIcon} alt="" src="/vector-63.svg" />
          </div>
        </div>
        <div className={styles.groupChild7} />
        <FormContainer />
      </div>
      <HighQualitySection
        imageDimensions="/trophy-1.svg"
        imageId="/guarantee2.svg"
        imageCode="/shipping2.svg"
        imageCodeUrl="/customersupport.svg"
        rectangleDiv={false}
        propTop="3173px"
        propLeft="0px"
      />
      <LocationCard propBottom="unset" propLeft="0px" propTop="3443px" />
    </div>
  );
};

export default ProductComparison;
