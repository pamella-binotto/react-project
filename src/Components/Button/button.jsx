import  './button.css'

const Button = (props) =>{
    const AlertButton = () => {
    window.alert(`A label desse botão é: ${props.label}`);
}
return(
        <button className="btn" onClick={AlertButton}>
            {props.label}
        </button>
    );
}

export default Button;