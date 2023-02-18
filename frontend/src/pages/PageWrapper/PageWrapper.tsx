import Header from "../../modules/Header/Header";
import styles from "./PageWrapper.module.scss";

interface RouteProps {
  children?: JSX.Element | React.ReactNode;
}

const PageWrapper = (props: RouteProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.padding}>
        { props.children }
      </div>
    </div>
  );
};

export default PageWrapper;
