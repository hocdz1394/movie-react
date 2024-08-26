
import { useEffect, useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import ListMove from "./components/listmovie";
import MovieSearch from "./components/movieSearch";
import { MovieProvider } from "./context/MovieProvider";


function App() {
  const [movie, setMovie] = useState([]);
  const [topRate, setToprate] = useState([]);
  const [searchData, setSearchData] = useState([]);


  const handelSearch = async (value) => {
    setSearchData([]);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_IPA_KEY}`
      }
    };

    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`;
    if (value === "") return setSearchData([]);
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setSearchData(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    
    const fechMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_IPA_KEY}`
        }
      };

      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ])
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setToprate(data2.results);
    }
    fechMovie();
  }, [])
  
  return (
    <MovieProvider>
    <div className="bg-black w-full h-full text-white min-h-screen b-10">
      <Header onSearch={handelSearch} />
      <Banner />
      <div className="p-10">
        {searchData.length > 0 ? (
          <MovieSearch title={"Kết quả tìm kiếm"} data={searchData} />
        ) : (
          <>
            <ListMove title={"Phim hot"} data={movie} />
            <ListMove title={"Phim đề cử"} data={topRate} />
          </>
        )}
      </div>
    </div>
    </MovieProvider>
  );
}

export default App
