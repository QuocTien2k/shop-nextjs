import React from "react";
import Container from "./Container";
import Logo from "./Header/Logo";
import HeaderMenu from "./Header/HeaderMenu";
import SearchBar from "./Header/SearchBar";
import CartIcon from "./Header/CartIcon";
import FavoriteButton from "./Header/FavoriteButton";
import SignIn from "./Header/SignIn";
import MobileMenu from "./Header/MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="bg-white py-5 ">
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
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
