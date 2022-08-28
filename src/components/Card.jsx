
export const Card = ({img, title,content}) => {
    console.log(img,title,content);

  return (
    
<div className="card welcomeCard " style={{width: "19vw", height:'70vh'}}>
    <div style={{width: '100%', height: '100%'}}>
        <img 
        src= {img}
        className="card-img-top" alt="..." style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
     <div className="card-body  text-dark">
    
        <p className="card-text" style={{fontSize:'2.5vmin'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
    
  );
}


