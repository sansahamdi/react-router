import React, { useState } from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'
import '../App.css'

const MovieCard = (props) => {

    const [rating, setRating] = useState(3)

    const handleChange = (value) => {
        setRating(value)
    }

    const { author } = props
    // const {movie}=props
    let gallery = []
    if (props.movie.length >= 1) {
        gallery = props.movie.map((el, i) => {
            return (
                <React.Fragment key={i} >
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                        <div className="ver_mas text-center">
                            <Link to={`Trailer/${el.id}`} className='current' >
                                <span className="lnr lnr-eye">Watch it</span>
                            </Link>
                        </div>
                        <article className="text-left">
                            <h2>{el.title}</h2>
                            <h4>{el.description}</h4>
                            <StarRating
                                count={5}
                                size={20}
                                value={el.rate}
                                activeColor={'yellow'}
                                inactiveColor={'#ddd'}
                                onChange={() => handleChange(rating)}

                            />
                        </article>
                        <img src={el.image} alt={el.title} />
                    </div>
                </React.Fragment>
            )
        })
    }

    else {


        gallery = author.map((el, i) => {
            return (

                <React.Fragment key={i} >
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                        <div className="ver_mas text-center">
                            <Link to={`Trailer/${el.id}`} className='current' >
                                <span className="lnr lnr-eye">Watch it</span>
                            </Link>
                        </div>
                        <article
                            className="text-left"
                            style={{ zIndex: "0" }}
                        >
                            <h2>{el.title}</h2>
                            <h4>{el.description}</h4>
                            {/* <h4>{el.rate}</h4> */}
                            <StarRating
                                count={5}
                                size={20}
                                value={el.rate}
                                activeColor={'yellow'}
                                inactiveColor={'#ddd'}
                                onChange={() => { }}

                            />
                        </article>
                        <img src={el.image} alt={el.title} />
                    </div>
                </React.Fragment>

            )
        }
        )


    }
    return (
        <React.Fragment>
            <h1 className="text-center bg-primary">WELCOME TO EGYBEST</h1>
            <div className="container-fluid contenedor text-center container">
                <div className=" container text-center row">
                    {gallery}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MovieCard