import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "../styles/artisans.scss";

function Artisans() {

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3001/artisans";

    if (category) {
      url += `?category=${category}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setArtisans(data))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div>
      <div className="headerbleu"></div>
      <div className="category">
        <h5 className="text-center">Voici tous les artisans de la catégorie sélectionnée !</h5>
        <p className="mt-2 mb-0 text-center">
          Sélectionnez parmi nos artisans près de chez vous !
        </p>
      </div>
        <div className="container mt-4">
          <div className="row g-4">
            {artisans.map(a => (
              <div key={a.id} className="col-12 col-md-6 col-lg-4">
                <div className="card card-artisan p-3 h-100">
                  <h5>{a.name}</h5>
                  <div className="rating fs-5">★ ★ ★ ★ ★</div>
                  <p className="job">{a.Specialty?.name}</p>
                  <p className="location">{a.location}</p>
                  <Link to={`/Artisans/${a.id}`} className="btn-artisan-card align-self-end mt-auto">
                      Aller à sa page
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>   
    </div>
  );
}
export default Artisans;