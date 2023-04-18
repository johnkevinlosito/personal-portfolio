import React from "react";
import Headroom from "react-headroom";
import ThemeSwitch from "./ThemeSwitch";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <Headroom style={{ zIndex: 50 }}>
      <header className="relative z-50 py-6 backdrop-blur-md">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />

            <div>
              <ThemeSwitch />
            </div>
          </div>
        </Container>
      </header>
    </Headroom>
  );
};

export default Header;
