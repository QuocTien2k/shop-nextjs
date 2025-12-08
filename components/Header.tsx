import React from "react";
import Container from "./Container";
import Logo from "./Header/Logo";
import HeaderMenu from "./Header/HeaderMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* NavButton  */}
        <HeaderMenu />

        <div>Others</div>
        {/* NavAdmin */}
      </Container>
    </header>
  );
};

export default Header;
