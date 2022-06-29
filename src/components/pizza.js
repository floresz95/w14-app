import './pizza.css';

const Pizza = (props) => {
    const name = props.name;
    const price = props.price;


 return (
    <div className="Pizzacomponent">
        Name: {name},
        Price: {price},
    </div>

)};

export default Pizza