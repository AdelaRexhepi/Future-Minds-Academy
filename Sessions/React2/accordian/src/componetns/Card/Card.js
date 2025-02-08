import { useState } from 'react';
import './Card.css'

function Card({ title, description }) {
    const [open, setOpen] = useState(false);

    function openCard() {
        setOpen(true);
    }

    return <div className={`Accordion-Card ${open? 'Open' : ''}`}>
        <h3 className={`Accordion-Card-Title`}>{title}</h3>
        <p className={`Accordion-Card-Description`}>{description}</p>
        <button className={`Accordion-Card-ShowMore`} onClick={openCard}>Show More</button>
    </div>
}

export default Card;