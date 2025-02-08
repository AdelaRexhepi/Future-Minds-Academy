import "./Card.css"
//every component is a function
function Card({user}){
    //we write javascript
    //...

    return (
    <div className="Card">
        <img src="./logo512.png" className="Card-image"/>
        <div className="Card-Details">
            <h3 className="Card-Header">{user.fullName}</h3>
            <h4 className="Card-SubHeader">{user.occupation}</h4>
        </div>
    </div>
    )
}
export default Card;