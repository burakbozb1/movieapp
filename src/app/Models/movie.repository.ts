import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "Film 1", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt aut dolorum unde, totam inventore? Cumque possimus aliquid rerum hic dolorem voluptatibus itaque iure incidunt! Voluptates autem maiores magnam praesentium.", imgUrl: "1.jpg", isPopular:true, datePublish: new Date(1990,10,10) },
            { id: 2, title: "Film 2", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt aut dolorum unde, totam inventore? Cumque possimus aliquid rerum hic dolorem voluptatibus itaque iure incidunt! Voluptates autem maiores magnam praesentium.", imgUrl: "2.jpg", isPopular:true, datePublish: new Date(1990,10,10) },
            { id: 3, title: "Film 3", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt aut dolorum unde, totam inventore? Cumque possimus aliquid rerum hic dolorem voluptatibus itaque iure incidunt! Voluptates autem maiores magnam praesentium.", imgUrl: "3.jpg", isPopular:true, datePublish: new Date(1990,10,10) },
            { id: 4, title: "Film 4", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt aut dolorum unde, totam inventore? Cumque possimus aliquid rerum hic dolorem voluptatibus itaque iure incidunt! Voluptates autem maiores magnam praesentium.", imgUrl: "4.jpg", isPopular:false, datePublish: new Date(1990,10,10) }
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