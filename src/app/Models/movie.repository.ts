import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "Film 1", description: "film 1 açıklama", imgUrl: "1.jpg", isPopular:true, datePublish: new Date(1990,10,10) },
            { id: 2, title: "Film 2", description: "film 2 açıklama", imgUrl: "2.jpg", isPopular:true, datePublish: new Date(1990,10,10) },
            { id: 3, title: "Film 3", description: "film 3 açıklama", imgUrl: "3.jpg", isPopular:true, datePublish: new Date(1990,10,10) },
            { id: 4, title: "Film 4", description: "film 4 açıklama", imgUrl: "4.jpg", isPopular:false, datePublish: new Date(1990,10,10) }
        ];

    }

    getMovies():Movie[]{
        return this.movies;
    }
    
    getPopularMovies():Movie[]{
        return this.movies.filter(x=> x.isPopular);
    }

    getMovieById(id:number): Movie{
        return this.movies.find(x=> x.id===id);
    }
}