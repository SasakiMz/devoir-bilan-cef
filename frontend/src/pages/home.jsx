import { useEffect, useState } from "react";


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
            <div className="trouveartisan">
                <h1>Trouvez son Artisan facilement</h1>
                <p>découvrez un réseau d'artisans profesionnels de la région</p>
                <p><button>Découvrir les aritsans</button></p>
            </div>
            <div className="commentmarche">
                <h2>Comment ça marche ?</h2>
                <p>1. Choisissez votre catégorie d’artisan </p>
                <p>2. Choisissez votre artisan </p>
                <p>3. Le contacter via formulaire </p>
                <p>4. Une réponse sera apportée sous 48h </p>
            </div>
            <div>
                <h3>Artisans du mois ! </h3>
                <p>Voici les 3 artisans du mois et mieux noté par la communauté !</p>
                {topArtisans
                .sort((a, b)=> b.rating - a.rating)
                .slice(0,3)
                .map(a =>
                    <div key={a.id}>
                        <p>{a.name}</p>
                        <p>{a.location}</p>
                        <p>{a.rating}</p>
                    </div>
                 )}
            </div>
        </div>
    )
}

export default Home;