import CardDetails from "./CardDetails";
import Shri from '../src/Asset/Shri.jpg'
import Chin from '../src/Asset/Chin.jpg'

function Card() {
  return (
    <div>
      <CardDetails image={Shri} name='Shrishty Shreya' age='24' jobTitle='System Engineer' details='More Details' />
      <CardDetails image={Chin} name='Sachin Kumar' age='24' jobTitle='Project Engineer' details='More Details'/>
    </div>
  )
}

export default Card
