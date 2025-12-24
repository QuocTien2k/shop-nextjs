import React from "react";
import Container from "./Container";
import Logo from "./Header/Logo";
import HeaderMenu from "./Header/HeaderMenu";
import SearchBar from "./Header/SearchBar";
import CartIcon from "./Header/CartIcon";
import FavoriteButton from "./Header/FavoriteButton";
import MobileMenu from "./Header/MobileMenu";
import AuthModal from "./Header/AuthModal";
// import { currentUser } from "@clerk/nextjs/server";
// import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  // 🔧 fake auth – sau này thay bằng logic thật
  const isLoggedIn = false;
  // const user = null;

  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />

          {/* Auth UI */}
          {!isLoggedIn && <AuthModal />}

          {isLoggedIn && (
            <button className="text-sm font-medium">Tài khoản</button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
