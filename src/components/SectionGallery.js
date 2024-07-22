import { GalleryData } from "../data/GalleryData";
import "./SectionGalleryStyles.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h3>Our Gallery</h3>
      <div className="gallery-box">
        {GalleryData.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={item.image} alt="" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <div className="card-btn">
              <a href={item.link}>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Gallery;