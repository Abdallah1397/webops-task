import React,{useState} from "react";
import { ButtonCategory, NavLink, InputCategory,Image,Container,Title,CategoriesContainer} from "./galleryStyle";
import photo from '../../styles/portfolioimg2.jpg';
import Categories from '../categories/categories';
const Gallery = () => {
  const [show,setShow]=useState(false);
 
  return (
    <Container>
      <CategoriesContainer>
      <ButtonCategory onClick={()=>setShow(!show)} >
          FIND CATEGORIES HERE{" "}
      </ButtonCategory>
      <InputCategory type="search" placeholder="SEARCH" />
      { show ?
        <Categories />
        :
        ''}
      </CategoriesContainer>
      <NavLink exact to="/">
        <Image src={photo}/>
      </NavLink>
      <Title> All Image </Title>

    </Container>
  );
};
export default Gallery;
