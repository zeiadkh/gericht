import './award.css'
 
 const Award = ({img, name, describtion}) => {
   return (
     <div className="award container">
        <div className="award-img">
            <img src={img} alt={img} />
        </div>
        <div className="award-txt">
            <h5>{name}</h5>
            <p>{describtion}</p>
        </div>
     </div>
   )
 }
 
 export default Award
