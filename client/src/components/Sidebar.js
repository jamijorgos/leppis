import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <h3 className="sb-title"><Link to="/tuotteet/leppikset">Leppäkertut</Link></h3>
                <nav>
                    <ul>
                        <li><Link to="/tuotteet/leppikset/magneetit">Magneetit</Link></li>
                        <li><Link to="/tuotteet/leppikset/neulat">Neulat</Link></li>
                        <li><Link to="/tuotteet/leppikset/pinssit">Pinssit</Link></li>
                        <li><Link to="/tuotteet/leppikset/korvakorut">Korvakorut</Link></li>
                        <li><Link to="/tuotteet/leppikset/kaulakorut">Kaulakorut</Link></li>
                        <li><Link to="/tuotteet/leppikset/leppiskivet">Leppäkerttukivet</Link></li>
                        <li><Link to="/tuotteet/leppikset/kivileppikset">Kivileppäkertut</Link></li>
                        <li><Link to="/tuotteet/leppikset/avaimenpera">Avaimenperät</Link></li>
                    </ul>
                </nav>
                <h3 className="sb-title"><Link to="/tuotteet/tuikuttimet">Tuikuttimet</Link></h3>
                <h3 className="sb-title"><Link to="/tuotteet/uusiolasit">Uusiolasit</Link></h3>
                <nav>
                    <ul>
                        <li><Link to="/tuotteet/uusiolasit/lasialuset">Lasialuset</Link></li>
                        <li><Link to="/tuotteet/uusiolasit/saksitelineet">Saksitelineet</Link></li>
                    </ul>
                </nav>
                <h3 className="sb-title"><Link to="/tuotteet/kierratyskasityo">Kierrätyskäsityö</Link></h3>
                <nav>
                        <ul>
                            <li><Link to="/tuotteet/kierratyskasityo/kahvipussikassit">Kahvipussikassit</Link></li>
                            <li><Link to="/tuotteet/kierratyskasityo/minikassakaapit">Minikassakaapit</Link></li>
                            <li><Link to="/tuotteet/kierratyskasityo/sisustustikkaat">Sisustustikkaat</Link></li>
                            <li><Link to="/tuotteet/kierratyskasityo/peilit">Peilit</Link></li>
                            <li><Link to="/tuotteet/kierratyskasityo/muut">Muut</Link></li>
                        </ul>
                </nav>
                <h3 className="sb-title"><Link to="/tuotteet/muut">Muut</Link></h3>
            </div>
        </div>
    )
}

export default Sidebar
