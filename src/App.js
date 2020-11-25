import React, { useState } from 'react'
import DataCard from './components/DataCard'
import MovieList from './components/MovieList';
import Search from './components/Search';
import Trailer from './components/Trailer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';







const App = () => {

  const [film, setFilm] = useState(DataCard)


  const [array, setArray] = useState([])

  const addMovie = (x) => {
    return setFilm([...film, x])
  }

  const searchMovie = (search) => {
    const test = film.filter((x) => x.title.toLowerCase().includes(search))
    return setArray(test)
  }

  const searchRating = (rating) => {
    const test = film.filter((x) => x.rate >= rating)
    return setArray(test)
  }

  return (
    <React.Fragment>
      <Search searchMovie={searchMovie} searchRating={searchRating} />
      <Router>
        <Switch>
          <Route exact path='/'>
            <div>
              <MovieList film={film} movie={array} addMovie={addMovie} />
            </div>
          </Route>
          <Route exact path='/Trailer/:id' render={(props)=>
          
            <Trailer arr={film} {...props} />
          }>
          </Route>
        </Switch>
      
      </Router>

    </React.Fragment>
  )
}

export default App;
