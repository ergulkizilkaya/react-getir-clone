import {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from 'react-flags-select';
import {FaFacebook} from "react-icons/fa"
import {useWindowWidth} from '@react-hook/window-size'

export default function HeroSection() {
  const windowWidth = useWindowWidth()
  const [selected, setSelected] = useState('TR');
  const flags = {
		US: '+1',
		GB: '+5',
		FR: '+70',
		DE: '+30',
		IT: '+11',
		TR: '+90',
	}
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {
        windowWidth>= 768 && 
          <Slider {...settings}>
            <div>
              <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"></img>
            </div>
            <div>
              <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"></img>
            </div>
          </Slider>
        }
       <div className="md:container relative md:absolute flex justify-between items-center top-0 left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className='hidden md:block'>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
          <h3 className="mt-8 text-4xl font-semibold text-white">Dakikalar içinde <br /> kapınızda</h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
          <div className='grid gap-y-2'>
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(flags)}
                customLabels={flags}
                placeholder="Select Language"
                selected={selected}
                onSelect={code => setSelected(code)}
                className="flag-select"
              />
              <label className='flex-1 relative group block cursor-pointer'>
                <input required className='h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2' />
                <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs '>Telefon Numarası</span>
              </label>
            </div>
            <button className='bg-brand-yellow text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color transition-all  h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold '>
                Telefon Numarası ile Devam Et
            </button>
            <hr className='h-[1px] bg-gray-300 my-2'/>
            <button className='bg-blue-700 bg-opacity-10 px-4 text-blue-700 text-opacity-80 hover:text-white hover:bg-blue-700 transition-all  h-12 flex items-center rounded-md w-full text-sm font-semibold '>
                <FaFacebook size={24}/> 
                <span  className='mx-auto'>
                  Facebook ile Devam Et
                </span>
               
            </button>
          </div>
        </div>
       </div>
      </div>
    )
  }
  