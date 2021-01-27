import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllImageRequest } from "../../store/actions/all_Image";
import { connect } from "react-redux";

const ImageDetail = ({ image, getImageID }) => {
  const [ImgDetail, setImgDetail] = useState([]);
  const params = useParams();
  console.log(image, "toot");
  useEffect(() => {
    getImageID();
    const result = image.filter((item) => {
      return item.id == params.id;
    });
    setImgDetail(result);
  }, []);

  return (
    <div>
      {ImgDetail.map((i) => {
        return (
          <div  key={i.id}>
            <p >{i.id}</p>
            <img src={i.image} />
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  image: state.all_Image.image,
});
const mapDispatchToProps = {
  getImageID: getAllImageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
