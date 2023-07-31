import { FunctionComponent } from "react";
import MillennialDesignContainer from "./MillennialDesignContainer";
import styles from "./RecentPostsContainer.module.css";
const RecentPostsContainer: FunctionComponent = () => {
  return (
    <div className={styles.recentPostsParent}>
      <div className={styles.recentPosts}>Recent Posts</div>
      <MillennialDesignContainer
        articleTitle="Going all-in with millennial design"
        imageDescription="/rectangle-69@2x.png"
      />
      <MillennialDesignContainer
        articleTitle="Exploring new ways of decorating"
        imageDescription="/rectangle-691@2x.png"
        propTop="181px"
        propWidth="241px"
        propWidth1="149px"
        propWidth2="149px"
      />
      <MillennialDesignContainer
        articleTitle="Handmade pieces that took time to make"
        imageDescription="/rectangle-692@2x.png"
        propTop="300px"
        propWidth="252px"
        propWidth1="160px"
        propWidth2="160px"
      />
      <MillennialDesignContainer
        articleTitle="Modern home in Milan"
        imageDescription="/rectangle-693@2x.png"
        propTop="419px"
        propWidth="211px"
        propWidth1="119px"
        propWidth2="119px"
      />
      <MillennialDesignContainer
        articleTitle="Colorful office redesign"
        imageDescription="/rectangle-694@2x.png"
        propTop="538px"
        propWidth="211px"
        propWidth1="119px"
        propWidth2="119px"
      />
    </div>
  );
};

export default RecentPostsContainer;
