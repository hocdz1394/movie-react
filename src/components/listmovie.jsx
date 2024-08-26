
// import ImgThumbnai from '../assets/temp-1.jpeg';
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext, MovieProvider } from "../context/MovieProvider";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function listmovie({ title, data }) {
  const { handelTrailer } = useContext(MovieContext);

  return (
    <div className="pb-10">
      <p className="uppercase text-xl font-bold mb-3">{ title }</p>
        <Carousel className="movieflex" responsive={responsive}>
          {data && data.length > 0 && data.map((item) => (
            <div key={item.id} className="relative group overflow-hidden inline-block"
            onClick={() => handelTrailer(item.id)}>
              <img
                className='w-[200px] h-[300px] group-hover:scale-105 object-cover transition duration-300 ease-in-out'
                src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                alt="{item.title}" />
              <div className="bg-black absolute w-full h-full top-0 left-0 opacity-40" />
              <div className="nameMovie uppercase absolute bottom-0 p-4">{item.title || item.original_title}</div>
            </div>
          ))}
      </Carousel>
      </div>
  

  )
}

export default listmovie