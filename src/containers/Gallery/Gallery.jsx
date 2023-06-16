import {useRef, useState} from 'react'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsInstagram} from 'react-icons/bs'
import images from "../../assets"
import Secheading from '../../components/Secheading/Secheading'
import './gallery.css'

let photos = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]




// const scrollRef = useRef(null);

// const scroll = (direction) => {
//   const { current } = scrollRef;

//   if (direction === "left") {
//     current.scrollLeft -= 300;
//   } else {
//     current.scrollLeft += 300;
//   }
// };

const Gallery = () => {
    const scrollRef = useRef();

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

  return (
    <div className="gallery container sec__padding">
      <div className="gallery-content">
        <Secheading title="Instagram" caught="Photo Gallery" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" id='gallery-more' className="main-button">
          View More
        </button>
      </div>
      <div className="gallery-images">
        <div className="images-container" ref={scrollRef}>
          {photos.map((photo, index) => {
            return (
              <div className="images-container-card container" key={index}>
                <img src={photo} alt={`galllery-img-${index + 1}`} />
                <BsInstagram />
              </div>
            );
          })}
        </div>
        <div className="gallery-images-btns">
          <BsFillArrowLeftCircleFill role='button' onClick={() => scroll("left")} />
          <BsFillArrowRightCircleFill role='button' onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
}

export default Gallery