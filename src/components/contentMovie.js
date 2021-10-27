import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import styles from "../css/contentMovie.css";

function ContentMovie({id, year, title, summary, poster, genres}){
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }} className="movie">
            <div className="movie__img">
                <img className="movie__poster" src={poster} alt={title} title={title} />
            </div>
            <div className="movie__data">
                <div className="movie__imp">
                    <h3 className="movie__title">{title}({year})</h3>
                    <h5 className="movie__actor">Alega, Seuo</h5>
                </div>
                {/* <ul className="movie__genres">
                    {genres.map(
                        (element, index)=>( <li key={index} className="movie__genresContent"> {element} </li> )
                    )}
                </ul> */}
                <h6 className="movie__summary">{summary.slice(0,500)}</h6>
            </div>
        </Link>
    );
};

ContentMovie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContentMovie;