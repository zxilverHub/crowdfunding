import "./thankyou.css"
import checkIcon from "../images/icon-check.svg"
import { useSelector, useDispatch } from "react-redux"
import { thankyouModal } from "../features/AppSlice"

function Thankyou() {
    const isBacked = useSelector(state => state.app.isBacked)
    const dispatch = useDispatch()
  return (
    <>
    { isBacked &&
        <div className="thankyou-container">
            <div className="thankyou comp">
                <img src={checkIcon} alt="check icon" className="check-icon" />

                <p className="title">Thanks for your support!</p>
                <p className="sub">Your pledege brings us one closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaigne is completed.</p>
                <button className="got-it" onClick={()=>dispatch(thankyouModal(false))}>Got it!</button>
            </div>
        </div>
    }
    </>
  )
}

export default Thankyou