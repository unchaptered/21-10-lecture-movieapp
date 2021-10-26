import React from "react";
import axios from "axios";
import ContentMovie from "./contentMovie";
import styles from "./css/Main.css";
// import PropTypes from "prop-types";

// Dynamic Data
class Main extends React.Component{
    state={
        isLoading: true,
        movies: []
    };

    getMovies=async()=>{
        const { data:{ data: { movies }}}=await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        // console.log(movies);
        this.setState({ movies, isLoading:false });
    }

    componentDidMount(){
        this.getMovies();
    };

    render(){
        const { isLoading, movies }=this.state;
        return(
            <section className="mainChild">
                <div className="mainSearch">
                    <div className="mainSearch__div">
                        <input className="mainSearch__input" placeholder="search"/>
                        <button className="mainSearch__submit"> 검색 </button>
                    </div>
                </div>
                {   isLoading ?
                    // Loading...
                    (   <div className="mainLoading">
                            "Loading..."
                        </div>
                    ) : (
                    // Loaded...
                        <div className="mainLoaded">
                            { movies.map(element=> (
                                <ContentMovie
                                    key={element.id}
                                    id={element.id}
                                    year={element.year}
                                    title={element.title}
                                    summary={element.summary}
                                    poster={element.medium_cover_image}
                                    genres={element.genres}
                                />
                            ))}
                        </div>
                    )
                }
            </section>
        );
    };
};

export default Main;