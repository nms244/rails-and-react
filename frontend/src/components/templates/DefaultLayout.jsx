import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children, WDAYS } = props;
  return (
    <>
      <Header WDAYS={WDAYS} />
      <div className="max-w-screen-lg mx-auto mt-7">
          {children}
      </div>
      <Footer />
    </>
  );
};
