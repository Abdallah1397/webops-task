import React from "react";
import Styled from "styled-components";
const Pagination = ({ photoPerPage, totalPhotos, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPhotos / photoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <NavList>
      {pageNumbers.map((num) => (
        <ItemList key={num}>
          <PageNum href="#" onClick={() => paginate(num)}>
            {num}
          </PageNum>
        </ItemList>
      ))}
    </NavList>
  );
};
export default Pagination;
const NavList = Styled.nav`
        display:block;
        width:70%;
        height:50%;
        overflow: hidden;
        position: relative;
        overflow: hidden;
        margin-left:auto;
        margin-right:auto;
        padding-top:5%;
        padding-left:10%;

        `;

const ItemList = Styled.li`
        display: inline-block;
        float:left;
        `;

const PageNum = Styled.a`
        padding: 8px 16px;
        text-decoration: none;
        display:block;
        border: 1px solid #ddd;
        transition: all 100ms ease-in-out 0s;
        background-color: #F7F7F8;
        border-radius: 5px 5px 5px 5px;
        color: #69696E;
        display: block;
        font: 12px/30px Arial, sans-serif;
        height: 30px;
        margin: 0 3px;
        overflow: hidden;
        position: relative;
        text-align: center;
        text-decoration: none;
        width: 30px;
        &:hover{
        background-color:#000;
        color:#fff;
        }



    `;
