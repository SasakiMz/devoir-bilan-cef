import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Artisans() {
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/artisans")
        .then(res => res.json())
        .then(data => setArtisans(data))
        .catch(err => console.log(err))
    },[]);

    return (
        <div>
            <h1>Artisans</h1>
            {artisans.map (a => (
                <div key={a.id}>
                    <Link to={`/artisans/${a.id}`}>
                        <h2>{a.name}</h2>
                    </Link>
                    <p>{a.location}</p>
                </div>
            ))}
        </div>
    );
}

export default Artisans;