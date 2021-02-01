import React, { useEffect, useState } from "react";
import { getAllImageRequest } from "../../store/actions/all_Image";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {
  Image,
  SearchDiv,
  ImageDiv,
  Title,
  Button,
  SearchBar,
  Container,
} from "./imageStyle";
import Pagination from "../pagination/pagination";
const Images = ({ image, getImage }) => {
  useEffect(() => {
    getImage();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [photoPerPage, setPhotoPerPage] = useState(6);
  const indexOfLastPage = currentPage * photoPerPage;
  const indexOfFirstPage = indexOfLastPage - photoPerPage;
  const currentPhotos = image.slice(indexOfFirstPage, indexOfLastPage);
  const total = image.length;

  const paginate = (pageNum) => setCurrentPage(pageNum);
  const [searchImage, setSearchImage] = useState([]);
  const [submited, setSubmited] = useState(false);

  const displayAllImage = currentPhotos.map((item) => {
    return (
      <ImageDiv key={item.id}>
        <NavLink to={`/photo/${item.id}`}>
          <Image src={item.image} />
        </NavLink>
        <Title>{item.title}</Title>
      </ImageDiv>
    );
  });
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchImage(value);
    if (value == "") {
      setSubmited(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    const result = image.filter((item) => {
      return item.title == searchImage;
    });
    setSearchImage(result);
  };
  const Searched = () => {
    return (
      <ImageDiv>
        {searchImage.length != 0 ? (
          <>
            <Image src={searchImage[0].image} />
            <Title>{searchImage[0].title}</Title>
          </>
        ) : (
          <Title>No Data Found</Title>
        )}
      </ImageDiv>
    );
  };

  return (
    <Container>
      <SearchDiv onSubmit={handleSubmit}>
        <Button onClick={handleSubmit}>Apply</Button>
        <SearchBar
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleSearch}
        ></SearchBar>
      </SearchDiv>
      {submited ? <Searched /> : <>{displayAllImage}</>}

      <Pagination
        photoPerPage={photoPerPage}
        totalPhotos={total}
        paginate={paginate}
      />
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
