
export const Houses = ({img}) => {
  return (
    <div className="card houseCard " style={{width: '21vw', height:'60vh'}}>
        <div className="" style={{width:'100%', height:'100%'}}>
            <img 
            src={img} 
            className="card-img-top" alt="..." style={{width:'100%', height:'100%', objectFit:'cover'}}/> 
        </div>           
    </div>
  );
}

