import React, { useState } from 'react'
import StarRating from './StarRating'
import '../App.css'

const Search = (props) => {

    const { searchMovie } = props

    const [search, setSearch] = useState('')

    const [rating, setRating] = useState(0)

    const handleChange = (value) => {
        setRating(value)
    }

    const {searchRating}=props

    return (

        <div className='headerSearch'>
            <StarRating className='mb-2'
                count={5}
                size={40}
                value={rating}
                activeColor={'yellow'}
                inactiveColor={'#ddd'}
                onChange={searchRating} />
            <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4 mt-4">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline ml-auto">
                        <div className="md-form my-0">
                            <input onChange={(e) => setSearch(e.target.value)} className="form-control " type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        <button onClick={(e) => { 
                            e.preventDefault();
                            handleChange(rating)
                            searchMovie(search)
                            }} href="/" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            
        </div>
    )
}

export default Search