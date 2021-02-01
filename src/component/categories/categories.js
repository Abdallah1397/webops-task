import React, { useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-elastic-carousel";
import { Container, Title, MainDiv, NavLink, Icon } from "./categoriesStyle";
import { getAllCategoriesRequest } from "../../store/actions/all_Categories";
const Categories = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const DisplayAllCategories = categories.map((item) => {
    return (
      <Container key={item.id}>
        <Icon className={item.icon} />
        <NavLink to={`/category/${item.id}`}>
          <Title>{item.title}</Title>
        </NavLink>
      </Container>
    );
  });
  return (
    <MainDiv>
      <Carousel breakPoints={breakPoints}>{DisplayAllCategories}</Carousel>
    </MainDiv>
  );
};
const mapStateToProps = (state) => ({
  categories: state.all_Categories.categories,
});
const mapDispatchToProps = {
  getCategories: getAllCategoriesRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
