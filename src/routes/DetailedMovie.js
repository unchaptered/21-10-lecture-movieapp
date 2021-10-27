import React from "react";

class DetailedMovie extends React.Component {
    // console.log(props);
    componentDidMount(){
        const { location, history }=this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render(){
        if(this.props.location.state){
            const { year, title, summary, poster, genres }=this.props.location.state;

            return (
                <section className="mainChild">
                    <div className="mainSearch">
                        <div className="mainSearch__div">
                            <input className="mainSearch__input" placeholder="search"/>
                            <button className="mainSearch__submit"> 검색 </button>
                        </div>
                    </div>
                    <div className="mainLoaded">
                        <div className="movie">
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
                                <h6 className="movie__summary">{summary}</h6>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return null;
        }

}
}
export default DetailedMovie;