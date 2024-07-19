import style from "./ButtonContainer.module.css"

// eslint-disable-next-line react/prop-types
const ButtonContainer = ({buttonItem,onButtonClick}) => {

return(
<div className={style.buttonContainer}>
{buttonItem.map(buttonName =>
        <button key={buttonName} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
)}
</div>
)
}

export  default ButtonContainer;