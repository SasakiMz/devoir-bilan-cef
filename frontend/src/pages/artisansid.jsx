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
            <div className="hero-header text-center">
                <h1 className="pt-3">{artisan.name}</h1>
                <div className="rating-container">
                    <div className="rating">★ ★ ★ ★ ★</div>
                    <span className="rating-value">{artisan.rating}/5</span>
                </div>
            </div>

            <div className="container">
                <div className="cardhero shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                    <h5 className="mb-4">{artisan?.name}</h5>
                    <div className="mt-2">
                        <span className="badge-artisan">{artisan?.Specialty?.Category?.name}</span>
                        <span className="badge-artisan">{artisan?.Specialty?.name}</span>
                        <span className="badge-artisan">{artisan?.location}</span>
                    </div>
                </div>
                    <div className="text-end mt-3">
                        <p className="mb-4">{artisan?.email}</p>
                        <button className="btnartisansid">Contacter</button>
                    </div>
                </div>
            </div>
            <div className="container my-4">  
                <div className="row align-items-stretch">
                     <div className="col-12 col-md-6 d-flex flex-column mt-2">
                        <h2 className="mb-3">Envoyer un message</h2>
                        <div className="card card-bas h-100 d-flex flex-column p-4 shadow">
                            <form action="#" method="post">
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <input type="email" className="form-control shadow" placeholder="Email" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="text" className="form-control shadow" placeholder="Nom" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control shadow" placeholder="Objet" />
                                </div>                                    <div className="mb-3">
                                      <textarea className="form-control shadow" rows="12" placeholder="Message"></textarea>
                                </div>
                            </form>
                            <button className="mt-auto align-self-center btnartisansid shadow">
                                Envoyer le message
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column mt-2">
                        <h2 className="mb-3">A propos</h2>
                        <div className="card card-bas h-100 d-flex flex-column p-4 shadow">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus sapiente aut. Mollitia quis ab quae id eum. Tempora sint incidunt enim eos, harum quae soluta mollitia recusandae nobis quis. </p>
                            <h3 className="mt-3 mb-4 séparateur">Prestations proposées</h3>
                            <ul>
                                <li className="my-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe et blanditiis deserunt illum magni sequi omnis aspernatur amet possimus cum similique sapiente fugit dolore, unde voluptates, quaerat, explicabo perspiciatis!
                                </li>
                                <li className="my-1">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ad tempora! Accusantium quos animi velit id ab, distinctio, dolore quisquam in culpa ea beatae iste molestias saepe blanditiis. Accusamus, beatae.
                                </li>
                                <li className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum non animi expedita ea minus dolor a, obcaecati eum distinctio commodi culpa ipsam ratione dolores voluptates enim odit ex fugit.
                                </li>
                            </ul>
                            <button className="btnartisansid mt-auto align-self-center shadow">Site de l'artisan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};


export default Artisanid;