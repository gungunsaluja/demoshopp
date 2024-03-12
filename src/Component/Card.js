import './Card.css';
function Card(props){
    return (
        <div classNam = "card">

{props.children}
        </div>
    );

}
export default Card;