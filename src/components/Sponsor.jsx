import "./sponsor.css"
import mastercraftLogo from "../images/logo-mastercraft.svg"
import { useDispatch } from "react-redux"
import { toggleSelect } from "../features/AppSlice"

function Sponsor() {
  const dispatch = useDispatch()

  return (
    <div className="sponsor comp" data-aos="fade-left">
      <img src={ mastercraftLogo } alt="mastercraftLogo" className="mastercraft-logo" />
      <h1 className="title"> Mastercraft bamboo Monitor Riser </h1>
      <p className="sub"> A beutiful & handcraft monitor strand to reduce neck and eye strain. </p>

      <div className="sponsor-cta">
        <button className="cta" onClick={()=>dispatch(toggleSelect(true))}>Back this project</button>

        <div className="bookmark-btn">
          <svg className="bookmark-icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
          <p className="bookmark-txt">Bookmark</p>
        </div>
      </div>
    </div>
  )
}

export default Sponsor