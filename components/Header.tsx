import React from "react";
import Container from "./Container";
import Logo from "./Header/Logo";
import HeaderMenu from "./Header/HeaderMenu";
import SearchBar from "./Header/SearchBar";
import CartIcon from "./Header/CartIcon";
import FavoriteButton from "./Header/FavoriteButton";
import SignIn from "./Header/SignIn";
import MobileMenu from "./Header/MobileMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between  text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          {/* Logo */}
          <MobileMenu />
          <Logo />
        </div>

        {/* NavButton  */}
        <HeaderMenu />

        {/*Other */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
