import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brands from '../../assets/images/brands'
export const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  return (
    <Carousel responsive={responsive}>
      {brands && brands.map((item: any, index: number) => {
        return (
          <div key={index} className="cardSlider" style={{ height: "120px" }} >
            <img alt="brandImage" style={{ height: "100px", width: "95%" }} src={item.image}></img>
            <p>{String(item.name).charAt(0).toUpperCase() + String(item.name).slice(1)}</p>
          </div>
        )
      })}
     
    </Carousel>
  )
}
export default CardSlider