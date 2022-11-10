import React from 'react';
import style from './Button.module.scss';

interface ButtonComponentProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function ButtonComponent({children, onClick, type}: ButtonComponentProps) {
    return(
        <button onClick={onClick} type={type} className={style.botao} >
                {children}
        </button>
    )
}

export default ButtonComponent;