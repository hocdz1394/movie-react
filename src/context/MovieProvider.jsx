import { useState, createContext } from "react";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import PropTypes  from "prop-types";

const MovieContext = createContext();
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const MovieProvider = ({ children }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');
    
  const handelTrailer = async (id) => {
    setTrailerKey('');
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_IPA_KEY}`
        }
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      console.log(data);
      setTrailerKey(data.results[0].key)
      setmodalIsOpen(true);
    } catch (error) {
      setmodalIsOpen(false);
      console.log(error);
    }
  }
  return (
    <MovieContext.Provider value={{handelTrailer}}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() =>setmodalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      ><YouTube videoId={trailerKey} opts={opts}/></Modal>
    </MovieContext.Provider>
  )
}
MovieProvider.PropTypes = {
  children: PropTypes.node,
}
export { MovieProvider, MovieContext}