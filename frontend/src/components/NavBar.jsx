import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function NavBar () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`http://localhost:3001/categories`);
                const data = await res.json();
                setCategories(data);
            } 
            catch (err) {
                console.error(err);
            };
        };

        fetchCategories();
    },[]);

    return (
        <nav>
            <Link to="/">Accueil</Link>
            
            {categories.map(cat =>(
            <Link key={cat.id} to={`/artisans?category=${cat.id}`}>
                {cat.name}
            </Link>
            ))}
        </nav>
        );
};

export default NavBar;