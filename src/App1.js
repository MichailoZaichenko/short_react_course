import {useEffect, useState} from 'react';
import SearchIcon from './search.svg'
import './App.css'
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=29146e9'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovis = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovis('Joker')
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder ="Serch for movies"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="serch"
                    onClick={() => searchMovis(searchTerm)}>
                </img>
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div>
                        <h2>
                            No movies found
                        </h2>
                    </div>
                )}

        </div>
    );
}

export default App;