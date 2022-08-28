
export const Dollar = ({title, text}) => {
  return (
    <div>
        <div className="card dollarCard " style={{width: "29vw", }}>
        <div className="card-body">
            <h5 className="card-title" style={{fontSize:'4vmin', color:'seagreen'}}>{title}</h5>
            <p className="card-text" style={{fontSize:'3vmin'}}>{text}</p>
            <div className="btn-group button" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary px-4 border-0 rounded-pill" style={{backgroundColor:'seagreen', fontSize:'2vmin'}}>Place Your Order</button>
              
            </div>
        </div>
        </div>
    </div>
  );
}

