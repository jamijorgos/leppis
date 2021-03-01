import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from './utensils/Categories'

const Sidebar = ({ setGlobalCategory, setGlobalSubCategory }) => {

    // Yläkategoriaa klikattaessa
    const mainClick = (e) => {
        setGlobalCategory(e);
        setGlobalSubCategory(null);
    }
    // Alakategoriaa klikattaessa (Etsii, mihin yläkategoriaan kuuluu)
    const subClick = (e) => {
        let index = 0;
        const heads = CATEGORIES.map((category) => category.name);
        const minors = CATEGORIES.map((category) => category.minor);
        minors.forEach(
            element => element.forEach(
                element2 => element2 === e ? index = minors.indexOf(element) : null
            )
        );
        setGlobalCategory(heads[index]);
        setGlobalSubCategory(e);
    }

    return (
        <div className="sidebar-parent">
            <div className="sidebar">
                <h3 className="sb-title"><Link onClick={(e) => mainClick(e.target.text)} to="/tuotteet/leppikset">Leppäkertut</Link></h3>
                <nav>
                    <ul>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/magneetit">Magneetit</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/neulat">Neulat</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/pinssit">Pinssit</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/korvakorut">Korvakorut</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/kaulakorut">Kaulakorut</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/leppiskivet">Leppäkerttukivet</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/kivileppikset">Kivileppäkertut</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/leppikset/avaimenpera">Avaimenperät</Link></li>
                    </ul>
                </nav>
                <h3 className="sb-title"><Link onClick={(e) => mainClick(e.target.text)} to="/tuotteet/kierratyskasityo">Kierrätyskäsityö</Link></h3>
                <nav>
                        <ul>
                            <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/kierratyskasityo/kahvipussikassit">Kahvipussikassit</Link></li>
                            <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/kierratyskasityo/minikassakaapit">Minikassakaapit</Link></li>
                            <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/kierratyskasityo/sisustustikkaat">Sisustustikkaat</Link></li>
                            <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/kierratyskasityo/peilit">Peilit</Link></li>
                            <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/kierratyskasityo/muut">Muut</Link></li>
                        </ul>
                </nav>
                <h3 className="sb-title"><Link onClick={(e) => mainClick(e.target.text)} to="/tuotteet/uusiolasit">Uusiolasit</Link></h3>
                <nav>
                    <ul>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/uusiolasit/lasialuset">Lasialuset</Link></li>
                        <li><Link onClick={(e) => subClick(e.target.text)} to="/tuotteet/uusiolasit/saksitelineet">Saksitelineet</Link></li>
                    </ul>
                </nav>
                <h3 className="sb-title"><Link onClick={(e) => mainClick(e.target.text)} to="/tuotteet/tuikuttimet">Tuikuttimet</Link></h3>
                <h3 className="sb-title"><Link onClick={(e) => mainClick(e.target.text)} to="/tuotteet/muut">Muut</Link></h3>
            </div>
        </div>
    )
}

export default Sidebar
