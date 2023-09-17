import "./statistics.css"
import { useSelector } from "react-redux"

function Statistics() {
    const app = useSelector(state => state.stats)
    const backed = app.backed.toLocaleString()
    const backers = app.backers.toLocaleString()
    const percentWidth = (app.backed/100000)*100

    const innerpercent = {
        width: `${percentWidth}%`
    }

  return (
    <div className="statistics comp" data-aos="fade-right">
        <div className="stats">
            <div className="stat">
                <h2 className="title">${backed}</h2>
                <p className="sub">of $1000,000 backed</p>
            </div>

            <div className="stat">
                <h2 className="title">{backers}</h2>
                <p className="sub">total backers</p>
            </div>

            <div className="stat">
                <h2>{app.daysleft}</h2>
                <p className="sub">days left</p>
            </div>
        </div>

        <div className="percentage">
            <div className="inner-percentage" style={innerpercent}></div>
        </div>
    </div>
  )
}

export default Statistics