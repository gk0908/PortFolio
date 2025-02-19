import { useNavigate } from 'react-router-dom'
import './style.scss'
import {Animate} from 'react-simple-animate';
const Home = ()=>{
    const navigate=useNavigate();
    console.log(navigate)

   const handleNavigateToContactMePage=()=>{
      navigate("/contact");
   }

    return(
       <section id='home' className="home">
         <div className="home_text-wrapper">
            <h1>
             Hello, I'm Gopi Kota
            <br />
            Front End Developer
            </h1>
         </div>

         <Animate play
         duration={1.5}
         delay={1}
         start={{
            transform: 'translateY(550px)'
         }}
         end={{
            transform: 'translateY(0px)'
         }}
          >
         <div className="home_contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire me</button>
         </div>
         </Animate>
       </section>
    )
}

export default Home;