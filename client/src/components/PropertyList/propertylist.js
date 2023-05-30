import { baseURL } from '../../baseURL/baseURL';
import useFetch from '../../hooks/useFetch';
import './propertylist.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { SearchContext } from '../../Context/searchContext';
// import {Link} from 'react-router-dom'

const Propertylist = () => {

  const photoData = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const { data, loading } = useFetch(`${baseURL}/hotel/countByType?limit=5`);

  const navigate = useNavigate();
  const { destination, dates, options, dispatch } = useContext(SearchContext);
  dispatch({ type: "RESET_SEARCH" });
  const handleClick = (type) => {
    navigate('/hotels', { state: { destination, type, dates, options } });
    dispatch({ type: "NEW_SEARCH", payload: { type: type } });
    // console.log("Dispatched from Hotel Search List's handleClick");
  };

  return (
    <div>
      {
        loading ? <h1>Loading...</h1> :
          <div className="pList">
            {(data).map((data, index) => (
              <div onClick={() => handleClick(data.type)} className='pListItem' key={index}>
                <img src={photoData[index]}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data?.type}</h1>
                  <h2>{data?.count} {data?.type} properties</h2>
                </div>
              </div>
            ))}
          </div>
      }
    </div>
  );
}

export default Propertylist