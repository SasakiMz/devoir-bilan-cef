import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Artisanid() {

    const { id } = useParams();
    const [ artisan, setArtisan ] = useState(null);


    useEffect(() => {
        console.log("ID:", id);

        fetch(`http://localhost:3001/artisans/${id}`)
            .then(res => {
            console.log("STATUS:", res.status);
            return res.json();
            })
            .then(data => {
            console.log("DATA:", data);
            setArtisan(data);
            })
            .catch(err => console.log("ERROR:", err));
        }, [id]);

    if (!artisan) return <p>Chargement de la page en cours...</p>;

    return (
        <div>
            <h1>{artisan.name}</h1>
            <p>Ville : {artisan.location}</p>
            <p>Email : {artisan.email}</p>
            <p>Note : {artisan.rating}</p>
            <p>Spécialité: {artisan.Specialty?.name}</p>
            <p>Catéogie: {artisan.Specialty?.Category?.name}</p>
        </div>
    )
};


export default Artisanid;