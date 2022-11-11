import React from "react";
import { ChildrenProps } from "src/utils/types";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

export default function Layout({ children }: ChildrenProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
