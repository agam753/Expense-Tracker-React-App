import './Card.css'

function Card(props){
    const classes = `card ${props.className}`;
    // console.log('Card component is evaluated by react');
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;