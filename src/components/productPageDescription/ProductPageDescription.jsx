import React, { useEffect, useRef, useState } from 'react'
import './productPageDescription.scss'



export default function ProductPageDescription(props) {

    const textRef = useRef();

    let description = ""

    if (props.text) {
        description = props.text
    }

    const [isExpanded, setIsExpanded] = useState(false); // Состояние для управления отображением текста

    // Функция для переключения состояния
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    // useEffect(() => {
    //     // Ограничиваем ширину третьей строки
    //     if (textRef.current) {
    //       const lines = textRef.current.innerText.split('\n');
    //       if (lines.length >= 3) {
    //         const thirdLine = lines[2];
    //         textRef.current.innerHTML = textRef.current.innerHTML.replace(
    //           thirdLine,
    //           `<span class="third-line">${thirdLine}</span>`
    //         );
    //       }
    //     }
    //   }, []);
  
    return (
      <div className="description">
        <h3>DESCRIPTION</h3>
        <p
            ref={textRef}
            className={`description-text ${isExpanded ? 'expanded' : 'collapsed'}`}
        >
            {description}
            
        </p>
        <span className="toggle-button" onClick={toggleExpanded}>
            {isExpanded ? 'show less' : 'detail'}
        </span>
      </div>
    );
}
