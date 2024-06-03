import React, { FC } from "react";
import styled from "styled-components";
import analytics from "../../analytics";

const MastheadStyles = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 16px;
  border-top-left-radius: 8px;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2)
  );

  .link {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    opacity: 0.5;
    transition: opacity 120ms ease;
  }

  &:hover .link {
    opacity: 1;
  }
`;

const Masthead: FC = () => {
  return (
    <MastheadStyles>
      <a
        href="https://www.berkersoz.online"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
        onClick={() => {
          analytics.event({ category: "Outbound", action: "Visit Website" });
        }}
      >
        <span>{"🚀"}</span> ile Berk tarafından yapılmıştır.
      </a>
    </MastheadStyles>
  );
};

export default Masthead;
