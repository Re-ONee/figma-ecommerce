import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeBannerContainer from "../components/HomeBannerContainer";
import LivingCardContainer from "../components/LivingCardContainer";
import ProductContainer from "../components/ProductContainer";
import ContainerInspirations01 from "../components/ContainerInspirations01";
import ShareContainer from "../components/ShareContainer";
import LocationCard from "../components/LocationCard";
import styles from "./Home.module.css";
const Home: FunctionComponent = () => {
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

  return (
    <div className={styles.home}>
      <HomeBannerContainer />
      <LivingCardContainer />
      <ProductContainer />
      <ContainerInspirations01 />
      <ShareContainer />
      <LocationCard />
    </div>
  );
};

export default Home;
