import './newsletter.css'
import Secheading from "../../components/Secheading/Secheading"


const NewsLetter = () => {
  return (
    <div className="newsletter container sec__padding">
      <Secheading title="Newsletter" caught="Subscribe to Our Newsletter" />
      <p>And never miss latest Updates!</p>
      <form action="" className='container'>
        <input type="text" placeholder='Email Address'/>
        <button className="main-button">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter