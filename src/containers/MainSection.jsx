import "./mainsection.css"
import { useEffect } from "react"
import { Sponsor, Statistics, About } from "../components/Index.jsx"
import { useSelector } from "react-redux"
import AOS from "aos"
import "aos/dist/aos.css"

function MainSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 400 })
  }, [])
  
    const isMenuExpand = useSelector(state => state.app.isMenuExapnd) 

    const margin = {
        marginTop: isMenuExpand? "25rem":"20rem"
    }
  return (
    <div className="main-section" style={margin}>
        <Sponsor />
        <Statistics />
        <About />
    </div>
  )
}

export default MainSection