import React from 'react';
import "./Home.css";
import requests from './requests';
import Row from './Row';
import Banner from "./Banner";

function Home() {
    return (
        <div>
            <div className="home">
                <Banner />
                <Row
                    title="Featured Today"
                    fetchUrl={requests.fetchTrending}
                    isLargeRow
                />
                <Row title="Fan Favorites" fetchUrl={requests.fetchTopRated} />
                <Row title="Netflix Titles" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Action" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
  );
}

        </div>
    )
}

export default Home
