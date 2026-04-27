import React from "react";
import "../styles/footer.scss"

function Footer () {
    return (
        <div className="footer-custom container-fluid">
            <div className="row">
                <div className="col pagesfooter">
                    <h4 className="h-footer my-3">Pages légales</h4>
                        <div className="row row-cols-2">
                            <p className="col p-footer">Mentions légales</p>
                            <p className="col p-footer">Données personnelles</p>
                            <p className="col p-footer">Accessibilité</p>
                            <p className="col p-footer">Cookies</p>
                        </div>
                    
                </div>
                <div className="col contactfooter">
                    <h4 className="h-footer my-3">Contact</h4>
                    <div>
                        <p className="p-footer mb-0">101 cours Charlemagne</p>
                        <p className="p-footer mb-0">CS 20033 69269 LYON CEDEX 02</p>
                        <p className="p-footer"> France +33 4 26 73 40 00</p>
                    </div>   
                </div>
            </div>
        </div>
    )
    
}

export default Footer;