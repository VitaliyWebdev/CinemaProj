import React, {useEffect, useState} from 'react';
import {useRouteMatch, useParams} from 'react-router-dom'
import {movieService} from "../../services";

export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const {id, ...rest} = useParams();

    const getMovieDetails = async () => {
        try {
            setIsLoading(true)
            const data = await movieService.getMovieDetailsById(id);
            setFilmDetails(data);
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }

    }
    useEffect(() => {
        getMovieDetails();
    }, [])

    if ((isLoading && !filmDetails) || isLoading === null) {
        return (<div>Loading...</div>)
    }
    console.log(filmDetails);
    return (
        <div>

            {/*<div>{filmDetails.map(item=>(<img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt=""/>))}</div>*/}
            <h1>{filmDetails.original_title}</h1>
            <h2>{filmDetails.tagline}</h2>
            {/*{!!filmDetails && filmDetails.map(el=> <span key={el.id}>{el.name}</span>)}*/}
            <p>{filmDetails.overview}</p>
        </div>
    )
}
