import { useState, useEffect } from 'react'
import axios from 'axios';

export const HeaderCarousel = () => {
    const [sliderInfo, setSliderInfo] = useState<any>("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.npoint.io/f89737dc8cf6e47a9636`);
            setSliderInfo(response.data);
        }
        fetchData();
      }, []);
    return (
        <div id="slider" className="mb-4">
            <div className="slides">
                {sliderInfo && sliderInfo.map((item: any, index: number) => {
                     return (
                        <div key={index} className="slider">
                            <div className="legend"></div>
                            <div className="content">
                                <div className="content-txt">
                                    <h1>Lorem ipsum dolor</h1>
                                    <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
                                </div>
                            </div>
                            <div className="image">
                                <img alt="product" src={item.img} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="switch">
                <ul>
                    <li>
                        <div className="on"></div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>
        </div>
    )
}


export default HeaderCarousel