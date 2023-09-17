import "./about.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toggleSelect } from "../features/AppSlice"


function About() {
    const product = useSelector(state => state.products);
    const dispatch = useDispatch()

    const products = [
        { 
            title: "Bamboo Stand",
            sub: "You get ergonomic stand stand made of natural bamboo. You've helped us launch oru promotional campaign, and you'll be added to a special Backer member list.",
            pledge: product.bamboo.pledge,
            left: product.bamboo.left,
            available: product.bamboo.left > 0
        },

        {
            title: "Balck Edition Stand",
            sub: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list included.",
            pledge: product.black.pledge,
            left: product.black.left,
            available: product.black.left > 0
        },

        {
            title: "Mahogany Special Edition",
            sub: "You get Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
            pledge: product.mahogany.pledge,
            left: product.mahogany.left,
            available: product.mahogany.left > 0
        }
    ]
  return (
    <div id="about" className="comp" data-aos="fade-in">
        <h3 className="title"> About this project </h3>
        <p className="sub">The Mastercraft Bamboo Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p className="sub">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored the stand.</p>

        { products.map(( prod, i ) => (
            <div className={`product-card ${prod.available? "": "unavailable"}`} key={i} >
                <div className="card-head">
                    <h4 className="title">{prod.title}</h4>
                    <p className="eyebrow">Pledge ${prod.pledge} or more</p>
                </div>

                <p className="sub">{prod.sub}</p>

                <div className="card-cta">
                    <p className="title">{prod.left} <span className="sub">left</span></p>
                    <button className="cta" disabled={!prod.available} onClick={()=>dispatch(toggleSelect(true))}>Select Reward</button>
                </div>
            </div>
        )) }
    </div>
  )
}

export default About