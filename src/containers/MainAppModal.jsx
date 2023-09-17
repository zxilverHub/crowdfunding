import "./mainappmodal.css"
import { useSelector, useDispatch } from "react-redux"
import { toggleSelect, addbacked, thankyouModal } from "../features/AppSlice";
import { useState } from "react";


function MainAppModal() {
    const active = useSelector( state => state.app.mainAppModal );
    const product = useSelector( state => state.products )
    const dispatch = useDispatch()

    const backed = [
        { 
            project: "Pledge with no reward",
            info: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product upodate via email.",
            left: null,
            pledge: null,
            id: "no"
        },

        {
            project: "Bamboo Stand",
            info: "You get an ergonomic stand made of narural bamboo. You've helped us launch our promotional campaign, and you'll be added to a specific Backer member list.",
            left: product.bamboo.left,
            pledge: product.bamboo.pledge,
            id: "bamboo",
            disabled: product.bamboo.left <= 0
        },

        {
            project: "Black Edition Stand",
            info: "You get a Black Special Editio computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
            left: product.black.left,
            pledge: product.black.pledge,
            id: "black",
            disabled: product.black.left <= 0
        },

        {
            project: "Mahagony Specail Edition",
            info: "You get two Special Edition Mahogany stand, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer memeber list. Shipping is included.",
            left: product.mahogany.left,
            pledge: product.mahogany.pledge,
            id: "mahogany",
            disabled: product.mahogany.left <= 0
        }
    ]

    const [pickedID, setPickedID] = useState(null);
    const [amount, setAmount] = useState('');
    const [invalid, setInvalid] = useState(false);


    const handleSubmit=(e,product, pledge)=> {
        e.preventDefault();
        if(amount<=0 || amount===null)
            setInvalid(true)
        else if(amount>=pledge) {
            setInvalid(false)
            setAmount('')
            dispatch(addbacked({product: product, amount: amount}))
            dispatch(toggleSelect(false))
            dispatch(thankyouModal(true))
        } else
            setInvalid(true)
    }

  return (
    <>
        { active &&
            <div className="main-app-modal" >
                <div className="main-selection">
                    <button className="close-modal-btn" onClick={()=>dispatch(toggleSelect(false))}>
                        <span className="none">Close</span>
                        <svg className="close-modal" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="inherit" opacity=".4"/></svg>
                    </button>
                    <div className="text">
                        <h5>Back this project</h5>
                        <p className="sub">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world!</p>
                    </div>

                    { backed.map((back, i) => (
                        <div className={`radio-label ${back.disabled? "unavailable":""} ${pickedID==back.id?"active-border":""}`} key={i}>
                            <label htmlFor={ back.id } onClick={()=> {setPickedID(back.id); setAmount(back.pledge===null? 1:back.pledge)}}>
                                <input type="radio" id={ back.id } name="back" disabled={back.disabled}/>
                                <div className="infos">
                                   <div className="product-info">
                                    <p className="title">{back.project}</p>
                                    { back.left !== null &&
                                        <>
                                            <p className="eyebrow">Pledge ${back.pledge} or more</p>
                                            <p className="title left">{back.left} <span className="sub">left</span></p>
                                        </>
                                    }
                                   </div>
                                   <p className="sub">{back.info}</p>
                                </div>
                            </label>
                                { pickedID===back.id && !back.disabled &&
                                <div className="pledge-input">
                                    <p className="enter-txt">Enter your pledge</p>

                                    <form className="pledge-inputs" onSubmit={(e)=>handleSubmit(e,back.id, back.pledge)}>
                                        <input type="number" name="amount" id="amount" className={`${invalid? "invalid":""}`}
                                            value={amount} onChange={(e)=>setAmount(e.target.value)} />
                                        <button className="continue" type="submit">Continue</button>
                                    </form>
                                </div>
                                }
                        </div>

                    )) }
                </div>
            </div>
        }
    </>
  )
}

export default MainAppModal