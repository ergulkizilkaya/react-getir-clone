import Slider from "react-slick";
import Banners from "api/banners.json"
import { useEffect, useState } from "react"
import Title from "components/ui/Title"

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import {useWindowWidth} from '@react-hook/window-size'

function NextButton ({ onClick, className }) {
	return (
		<button className="text-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}


export default function Campaigns() {
  const windowWidth = useWindowWidth()
  const[banners,setBanners] = useState([]);
  
  useEffect(() => {
    setTimeout(()=>setBanners(Banners),1000)
    
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows:true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      }
    ]
  };
  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
       <Slider className="md:-mx-2" {...settings}>
        {
          banners.length && banners.map((banner,index) => (
            <div key={banner.id}>
              <picture className="block md:px-2">
                <img src={banner.image} className="md:rounded-lg"></img>
              </picture>
            </div> 
        ))}      
        </Slider>
    </div>
  )
}
