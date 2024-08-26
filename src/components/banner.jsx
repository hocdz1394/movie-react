import ImgStar from '../assets/rating.png';
import ImgStarHalf from '../assets/rating-half.png';
import ImgThumbnai from '../assets/temp-1.jpeg';
import ImgBtn from '../assets/play-button.png';
function banner() {
  return (
    <div className="bg-banner w-full md:h-[600px] h-[1000px] bg-cover bg-no-repeat bg-center relative" >
      <div className="w-full md:h-[600px] h-[1000px] bg-black opacity-40 " />
      <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
        <div className="p-10 md:w-[50%] w-full flex items-center">
          <div className="">
          <p className="bg-gradient-to-r from-red-700 to-red-300 inline-block px-6 py-2">TV Show</p>
          <div className="pt-[24px]">
            <h1 className="text-[40px] font-bold">Nghe nói em thích tôi</h1>
            <div className="w-8 flex gap-3 my-1">
              <img src={ImgStar} alt="" />
              <img src={ImgStar} alt="" />
              <img src={ImgStar} alt="" />
              <img src={ImgStar} alt="" />
              <img src={ImgStarHalf} alt="" />
            </div>
            <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>
          </div>
          <div className="flex gap-6 mt-4">
            <button className='cursor-pointer bg-black py-2 px-4 font-bold'>Chi tiết</button>
            <button className='cursor-pointer bg-red-700 py-2 px-4 font-bold'>Xem Phim</button>
          </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex justify-center">
          <img className='w-[300px] h-[400px] object-cover relative' src={ImgThumbnai} alt="" />
          <button className='w-[300px] h-[400px]  backdrop-blur-sm transition duration-500 ease-in-out  hover:opacity-100 absolute opacity-0 items-center justify-center flex'>
            <img src={ImgBtn} className='w-[70px]' alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default banner