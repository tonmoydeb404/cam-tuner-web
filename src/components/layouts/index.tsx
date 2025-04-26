import { ReactNode } from "react";
import Navbar from "./navbar";

type Props = {
  children: ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
