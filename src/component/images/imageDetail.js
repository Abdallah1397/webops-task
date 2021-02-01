import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllImageRequest } from "../../store/actions/all_Image";
import { connect } from "react-redux";
import { MainDiv, Container, Image, Title } from "./imageDetailStyle";
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
    <MainDiv>
      {ImgDetail.map((i) => {
        return (
          <Container key={i.id}>
            <Title>{i.title}</Title>
            <Image src={i.image} />
          </Container>
        );
      })}
    </MainDiv>
  );
};
const mapStateToProps = (state) => ({
  image: state.all_Image.image,
});
const mapDispatchToProps = {
  getImageID: getAllImageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
