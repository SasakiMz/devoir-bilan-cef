import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


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
      <h1>Artisans</h1>

      {artisans.map(a => (
        <div key={a.id}>
          <Link to={`/artisans/${a.id}`}>
            <h2>{a.name}</h2>
          </Link>

          <p>Ville : {a.location}</p>
          <p>Note : {a.rating}</p>
          <p>Spécialité : {a.Specialty?.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Artisans;