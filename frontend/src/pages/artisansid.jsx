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
            <div>
                <h1>{artisan.name}</h1>
                <p>Ville : {artisan.location}</p>
                <p>Email : {artisan.email}</p>
                <p>Note : {artisan.rating}</p>
                <p>Spécialité: {artisan.Specialty?.name}</p>
                <p>Catéogie: {artisan.Specialty?.Category?.name}</p>
            </div>
            <div className="Formulaire">
                <h2>Envoyer un message</h2>
                <form action="/ma-page-de-traitement" method="post">
                    <ul>
                        <li>
                            <label for="name">Email:<input type="text" id="name" name="user_name" /></label>
                        </li>
                        <li>
                            <label for="mail">Nom<input type="email" id="mail" name="user_mail" /></label>
                        </li>
                        <li>
                            <label for="mail">objet<input type="object" id="object" name="object" /></label>
                        </li>
                        <li>
                            <label for="msg">Message&nbsp;:<textarea id="msg" name="user_message"></textarea></label> 
                        </li>
                    </ul>
                    <button>Envoyer le message</button>
                </form>
            </div>
            <div className="Apropos">
                <h2>A propos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus sapiente aut. Mollitia quis ab quae id eum. Tempora sint incidunt enim eos, harum quae soluta mollitia recusandae nobis quis. </p>
                <span>
                    <h3>Prestations proposées</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe et blanditiis deserunt illum magni sequi omnis aspernatur amet possimus cum similique sapiente fugit dolore, unde voluptates, quaerat, explicabo perspiciatis!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ad tempora! Accusantium quos animi velit id ab, distinctio, dolore quisquam in culpa ea beatae iste molestias saepe blanditiis. Accusamus, beatae.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum non animi expedita ea minus dolor a, obcaecati eum distinctio commodi culpa ipsam ratione dolores voluptates enim odit ex fugit.</li>
                    </ul>
                    <button>Site de l'artisan</button>
                </span>
                
            </div>
        </div>
        
    )
};


export default Artisanid;