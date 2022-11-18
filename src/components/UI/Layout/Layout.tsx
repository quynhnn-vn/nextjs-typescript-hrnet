import React from "react";
import { ChildrenProps } from "src/utils/types";
import Header from "src/components/UI/Header/Header";
import Footer from "src/components/UI/Footer/Footer";

export default function Layout({ children }: ChildrenProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
