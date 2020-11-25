import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

const MovieList = (props) => {

    const { film } = props
    const {addMovie}=props

    return (

        <div>
            <MovieCard author={film} movie={props.movie} />
            <AddMovie addMovie={addMovie} />
        </div>

    )
}

export default MovieList