import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllImageRequest } from "../../store/actions/all_Image";
import { connect } from "react-redux";
import {
  Image,
  SearchDiv,
  ImageDiv,
  Title,
  Button,
  SearchBar,
  Container,
} from "./imageStyle";
const ImageDetail = ({ image, getImageID }) => {
  const [ImgDetail, setImgDetail] = useState([]);
  const params = useParams();
  console.log(image, "hi");
  useEffect(() => {
    getImageID();
    const result = image.filter((item) => {
      return item.id == params.id;
    });
    setImgDetail(result);
  }, []);

  return (
    <ImageDiv>
      {ImgDetail.map((i) => {
        return (
          <div  key={i.id}>
            <Title >{i.id}</Title>
            <Image src={i.image} />
          </div>
        );
      })}
    </ImageDiv>
  );
};
const mapStateToProps = (state) => ({
  image: state.all_Image.image,
});
const mapDispatchToProps = {
  getImageID: getAllImageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
