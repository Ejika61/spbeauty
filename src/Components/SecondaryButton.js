import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        border-radius: 24px;
        background: rgba(255,255,255,1);
        border: 1px solid #DFDFDF;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: rgba(255,255,255,0.8);
        }
        &:active {
            background: rgba(255,255,255,0.6);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;