import React from 'react'
const Header = () => { 
    return ( 
       <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Aliyah Musaliar</a>
            {/* todo: replace with visual-logo */}
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            <i className="uil uil-home nav_icon"></i> Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="uil uil-user-circle nav_icon"></i> About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i className="uil uil-books nav_icon"></i> Skills
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#services" className="nav_link">
                            <i className="uil uil- nav_icon"></i> Services
                        </a>
                    </li> */}

                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i className="uil uil-telescope nav_icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="uil uil-envelope-heart nav_icon"></i> Contact
                        </a>
                    </li>

                   
                </ul>
                <i class="uil uil-times nav_close"></i>
            </div>
            <div className="nav_toggle">
                <i class="uil uil-bars"></i>
            </div>
        </nav>
       </header>
    )
}

export default Header 