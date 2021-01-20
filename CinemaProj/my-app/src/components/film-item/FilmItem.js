import React from 'react';
import styles from './FilmItem.module.css';
// adult: false
// backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
// genre_ids: (3) [14, 28, 12]
// id: 464052
// original_language: "en"
// original_title: "Wonder Woman 1984"
// overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
// popularity: 2942.16
// poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
// release_date: "2020-12-16"
// title: "Wonder Woman 1984"
// video: false
// vote_average: 7.1
// vote_count: 2853

const imgBuilder = (posterPath,size = 200) => `https://image.tmdb.org/t/p/w${size}${posterPath}`



///aaaaaaaaaaaaaaa

export const FilmItem = (props) => {
    const {title, overview, release_date, vote_average, vote_count, poster_path} = props;
    return (
        <div className={styles.filmItem}>
            <div style={{
                height:200,
                width: '100%',
                backgroundImage:`url(${imgBuilder(poster_path)})`,
            backgroundRepeat: 'no-repeat',
                backgroundSize: '80%',
                backgroundPosition: 'top'
            }}>
                {/*<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${title} poster`}/>*/}
            </div>
            <div>
                <h2>{title}</h2>
                <span>Rating:{vote_average} total votes:{vote_count}</span>
                <p>{overview}</p>
                <span>Release data:{release_date}</span>
            </div>
        </div>
    )
}
