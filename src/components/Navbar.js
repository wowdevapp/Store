import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import logo from "../images/logo.svg";
export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <h4 className="logo">
                Store<span>Ino</span>
              </h4>
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 1px solid var(--primaryColor);
  max-height: 60px;
  z-index: 1000;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
  .logo {
    text-align: center;
    color: var(--primaryColor);
    font-weight: bold;
    span {
      color: blue;
    }
  }
`;
