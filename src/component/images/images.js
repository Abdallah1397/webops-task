import React, { useEffect,useState} from "react";
import { getAllImageRequest } from "../../store/actions/all_Image";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Image,
  SearchDiv,
  ImageDiv,
  Title,
  Button,
  SearchBar,
  Container,
} from "./imageStyle";
import Pagination from '../pagination/pagination'
const Images = ({ image, getImage }) => {
  useEffect(() => {
    getImage();
  }, []);
  const [currentPage,setCurrentPage]=useState(1);
  const [photoPerPage,setPhotoPerPage]=useState(3);
  const indexOfLastPage=currentPage*photoPerPage;
  const indexOfFirstPage=indexOfLastPage-photoPerPage;
  const currentPhotos=image.slice(indexOfFirstPage,indexOfLastPage);
  const total =image.length;
  console.log(total);
  console.log(image);
  const paginate=(pageNum)=>setCurrentPage(pageNum)

  const displayAllImage = currentPhotos.map((item) => {
    return (
      <ImageDiv>
        <NavLink to={`/photo/${item.id}`}>
          <Image src={item.image} />
        </NavLink>
      </ImageDiv>
    );
  });
  return (
    <Container>
      <SearchDiv>
        <Button>Apply</Button>
        <SearchBar type="search"></SearchBar>
      </SearchDiv>
      {displayAllImage}
      <Pagination photoPerPage={photoPerPage} totalPhotos={total} paginate={paginate} />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  image: state.all_Image.image,
});
const mapDispatchToProps = {
  getImage: getAllImageRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Images);
