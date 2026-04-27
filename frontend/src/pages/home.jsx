import { useEffect, useState } from "react";

import "../styles/home.scss";
import "../styles/cardshome.scss";


const Home = () => {
    const [topArtisans, setTopArtisans] = useState([]);

    useEffect(() => {
    const fetchTop = async () => {
      try {
        const res = await fetch("http://localhost:3001/artisans?top=true");
        const data = await res.json();
        setTopArtisans(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTop();
  }, []);
    
    return (
        <div>
            <div className="trouveartisan py-4">
                <h1 className ="text-center">Trouvez son Artisan facilement</h1>
                <p className ="text-center">découvrez un réseau d'artisans profesionnels de la région !</p>
                <p className ="text-center"><button className="btn-hometopmain shadow">Découvrir les artisans</button></p>
            </div>
            <div className="commentmarche">
                <h2 className ="py-3 text-center">Comment ça marche ?</h2>
                <div className="d-flex justify-content-center mt-4 flex-wrap">
                    
                    <div class="card card-size-home shadow d-flex m-2 ">
                        <div className="card-body card-home-marcheblue">
                            <h5 className="card-title text-center">1.</h5>
                            <p className="card-text text-center">Choisissez votre catégorie d’artisan</p>
                        </div>
                    </div>

                    <div className="card card-size-home shadow d-flex m-2">
                        <div className="card-body card-home-marcheblue">
                            <h5 className="card-title text-center">2.</h5>
                            <p className="card-text text-center">Choisissez votre artisan </p>
                        </div>
                    </div>

                    <div className="card card-size-home shadow d-flex m-2">
                        <div className="card-body card-home-marchered">
                            <h5 className="card-title text-center">3.</h5>
                            <p className="card-text text-center">Le contacter via formulaire</p>
                        </div>
                    </div>
                    
                    <div className="card card-size-home shadow d-flex m-2">
                        <div className="card-body card-home-marchegreen">
                            <h5 className="card-title text-center">4.</h5>
                            <p className="card-text text-center">Une réponse sera apportée sous 48h</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className ="text-center">Artisans du mois ! </h3>
                <p className ="text-center">Voici les 3 artisans du mois, sélectionnés et mieux noté par la communauté !</p>
                <div className="d-flex justify-content-center flex-wrap ">
                    {topArtisans .sort((a, b)=> b.rating - a.rating) .slice(0,3) .map(a =>
                    <div key={a.id} className="card col-lg-3 card-artisan container shadow">
                        <div className="card-artisan d-flex flex-column">
                            <h5>{a.name}</h5>
                            <div className="rating fs-4">★ ★ ★ ★ ★</div>
                            <p>{a.Specialty?.name}</p>
                            <p>{a.Specialty?.Category?.name}</p>
                            <p>{a.location}</p>
                            <button className="btn-artisan-card align-self-end"> Contactez le !</button>
                        </div>
                    </div>)}
                </div> 
            </div>
        </div>
    )
}

export default Home;