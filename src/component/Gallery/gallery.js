import React, { useState, useEffect } from "react";
import { getAllCategoriesRequest } from "../../store/actions/all_Categories";
import { connect } from "react-redux";
import {
  ButtonCategory,
  NavLink,
  InputCategory,
  Image,
  Container,
  Title,
  CategoriesContainer,
  Form,
  Icon
} from "./galleryStyle";
import photo from "../../styles/portfolioimg2.jpg";
import Categories from "../categories/categories";
const Gallery = ({ categories, getCategories }) => {
  const [show, setShow] = useState(false);
  const [searchCategory, setSearchCategory] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCategory(value);
  };

  const handleSubmit = (e) => {
    setSubmited(true);
    e.preventDefault();
    const resultSearch = categories.filter((item) => {
      return item.title == category;
    });

    setSearchCategory(resultSearch);
  };

  const Searched = () => {
    return (
      <>
        {searchCategory.length != 0 ? (
          <>
            <NavLink to={`/category/${searchCategory[0].id}`}>
              <Image src={searchCategory[0].image} />
            </NavLink>
            <Title>{searchCategory[0].title}</Title>
          </>
        ) : (
          
          <Title>No Data Found</Title>
        )}
      </>
    );
  };

  return (
    <Container>
      <CategoriesContainer>
        <ButtonCategory onClick={() => setShow(!show)}>
          FIND CATEGORIES HERE{" "}
        </ButtonCategory>
        <Form onSubmit={handleSubmit}>
          <InputCategory
            type="search"
            placeholder="SEARCH BY TITLE"
            onChange={handleSearch}
          />
        </Form>
        {show ? <Categories /> : ""}
      </CategoriesContainer>
      {submited ? (
        <Searched />
      ) : (
        <>
          <NavLink exact to="/">
            <Image src={photo} />
          </NavLink>
          <Title> All Images </Title>
        </>
      )}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  categories: state.all_Categories.categories,
});
const mapDispatchToProps = {
  getCategories: getAllCategoriesRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
