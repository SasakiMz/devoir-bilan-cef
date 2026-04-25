import { useEffect, useState } from "react";

import "../styles/home.scss"


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
                <p className ="text-center">découvrez un réseau d'artisans profesionnels de la région</p>
                <p className ="text-center"><button className="btn-hometopmain">Découvrir les artisans</button></p>
            </div>
            <div className="commentmarche">
                <h2 className ="py-3 text-center">Comment ça marche ?</h2>
                <p>1. Choisissez votre catégorie d’artisan </p>
                <p>2. Choisissez votre artisan </p>
                <p>3. Le contacter via formulaire </p>
                <p>4. Une réponse sera apportée sous 48h </p>
            </div>
            {/* <div>
                <h3 className ="text-center">Artisans du mois ! </h3>
                <p className ="text-center">Voici les 3 artisans du mois, sélectionnés et mieux noté par la communauté !</p>
                {topArtisans
                .sort((a, b)=> b.rating - a.rating)
                .slice(0,3)
                .map(a =>
                    <div key={a.id} className="card-artisan">
                        <img src="/" alt="artisan" className="artisan-img"/>
                        <div className="artisan">
                            <h5>{a.name}</h5>
                            <div className="rating">★★★★★</div>
                        </div>
                        <p className="job">{a.specialty?.name}</p>
                        <p className="category">{a.specialty?.Category?.name}</p>
                        <p className="location">{a.location}</p>
                        <button className="btn-artisan">Contactez le</button>
                    </div>
                 )}
            </div> */}
        </div>
    )
}

export default Home;