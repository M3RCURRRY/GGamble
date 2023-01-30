import Header from "../../components/Header/Header";

import styles from "./RouteWrapper.module.scss";

interface RouteProps {
  children?: JSX.Element | React.ReactNode;
}

const RouteWrapper = (props: RouteProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      { props.children }
    </div>
  );
};

export default RouteWrapper;
