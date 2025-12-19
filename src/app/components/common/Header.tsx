import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import FavouriteButton from "./FavouriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-shop-light">
        <div className="w-1/3 md:1/3 flex items-center gap-5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="flex w-auto md:w-1/3 items-center justify-end gap-5">
          <SearchBar />
          <CartButton />
          <FavouriteButton />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
