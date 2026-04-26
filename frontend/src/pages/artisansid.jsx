import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/artisansid.scss";
import "../styles/hero.scss";

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
            <div className="hero-header">
                <h1>{artisan.name}</h1>
                <div className="rating fs-4">★ ★ ★ ★ ★</div>
                <div>{artisan.rating}</div>
            </div>
            <div className="cardhero">
                <img src="" alt="" />
                <h3>{artisan.name}</h3>
                <p>Spécialité: {artisan.Specialty?.name}</p>
                <p>Ville : {artisan.location}</p>
                <p>12 34 56 78 90 10</p>
            </div>
            
            <div className="container">  
                <div className="row align-items-stretch ">
                     <div className="col-6">
                            <h2 className="mb-3">Envoyer un message</h2>
                            <div className="card h-100 d-flex flex-column p-4 shadow">
                                <form action="#" method="post">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Nom" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Objet" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                                    </div>
                                    <button className="btnartisansid">
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>
                        </div>
                    <div className="col Apropos">
                        <h2 className="mb-3">A propos</h2>
                        <div className="card h-100 d-flex flex-column p-4 shadow">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus sapiente aut. Mollitia quis ab quae id eum. Tempora sint incidunt enim eos, harum quae soluta mollitia recusandae nobis quis. </p>
                            <h3 className="mt-3">Prestations proposées</h3>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe et blanditiis deserunt illum magni sequi omnis aspernatur amet possimus cum similique sapiente fugit dolore, unde voluptates, quaerat, explicabo perspiciatis!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ad tempora! Accusantium quos animi velit id ab, distinctio, dolore quisquam in culpa ea beatae iste molestias saepe blanditiis. Accusamus, beatae.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum non animi expedita ea minus dolor a, obcaecati eum distinctio commodi culpa ipsam ratione dolores voluptates enim odit ex fugit.
                                </li>
                            </ul>
                            <button className="btnartisansid">Site de l'artisan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};


export default Artisanid;