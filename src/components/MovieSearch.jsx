import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieProvider';

function MovieSearch({ title, data }) {
  const { handelTrailer } = useContext(MovieContext);

  return (
    <div className="pb-10">
      <p className="uppercase text-xl font-bold mb-3">{title}</p>
      <div className="movie grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-2 sm:grid-cols-3">
        {data && data.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden inline-block"
              onClick={() => handelTrailer(item.id)}
            >
              <img
                className="w-[200px] h-[300px] group-hover:scale-105 object-cover transition duration-300 ease-in-out"
                src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                alt="{item.title}"
              />
              <div className="bg-black absolute w-full h-full top-0 left-0 opacity-40" />
              <div className="nameMovie uppercase absolute bottom-0 p-4">
                {item.title || item.original_title}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
// MovieSearch.PropTypes = {
//   title: PropTypes.string.isRequired,
//   data: PropTypes.array.isRequired
// }
MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      original_title: PropTypes.string,
    })
  ).isRequired,
};
export default MovieSearch;
