import React from "react";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div className="Layout">
      <header>
        <button>Back</button>
      </header>
      <section className="Layout_section">{children}</section>
      <footer>Our footer</footer>
    </div>
  );
};
