import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";
const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
    </div>
  );
};

export default GroupComponent;
