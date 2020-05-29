import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
export default function SideCart() {
    return (
    <ProductConsumer>
        {value => {
          const { links,cartOpen, handleCart,closeCart } = value;
          return (
            <SideCartWrapper show={cartOpen} onClick={closeCart}>
              <ul>
                {links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.path}
                        className="sidebar-link"
                        onClick={handleCart}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SideCartWrapper>
          );
        }}
      </ProductConsumer>
    );
}
const SideCartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 1px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

