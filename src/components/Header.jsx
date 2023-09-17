import "./header.css"
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close-menu.svg"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { menuExpand } from "../features/AppSlice"

function Header() {
    const [isExpandMenu, setIsExpandMenu] = useState(false);
    const handleMenuBtn = () => setIsExpandMenu( !isExpandMenu )

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(menuExpand(isExpandMenu))
    }, [isExpandMenu])

    const [isScrolled, setScrolled] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            setScrolled(window.scrollY > 10)
        })
    }, [])

  return (
    <div className={`header ${isScrolled? "blur unclickable": ""}`}>
        <nav>
            <a href="#" className="logo">
                <span className="none">Logo</span>
                <img src={ logo } alt="logo" />
            </a>

            <ul className={`menus ${ isExpandMenu? "expand": "" }`}>
                <li><a href="#about">About</a></li>
                <li><a href="#discover">Discover</a></li>
                <li><a href="#getstarted">Get Started</a></li>
            </ul>

            { isExpandMenu &&
                <div className="overlay" 
                    onClick={()=> {
                        if(isExpandMenu) handleMenuBtn()
                }}></div>
            }

            <button className="hamburger" onClick={handleMenuBtn}>
                <span className="none">Menu</span>
                <img src={ isExpandMenu?close : hamburger } alt="hamburger" />
            </button>
        </nav>
    </div>
  )
}

export default Header