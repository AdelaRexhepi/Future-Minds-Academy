import './Accordion.css'
import Card from './componetns/Card/Card'

function Accordion(){
    return <div className='Accordion'>
        <Card title="The Title" description="some text" isOpen={true} ></Card>
        <Card title="The Title" description="some text" isOpen={false} ></Card>
        <Card title="The Title" description="some text" isOpen={true} ></Card>
    </div>
}

export default Accordion;