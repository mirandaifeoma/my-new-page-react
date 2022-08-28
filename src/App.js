import './App.css';
import {Welcome1} from './welcome/Welcome1'
import {Welcome2} from './welcome/Welcome2'
import {Goodbye1} from './goodbye/Goodbye1'
import {Screenshoot1} from './screenshoot/Screenshoot1'
import {Screenshoot2} from './screenshoot/Screenshoot2'
import {Pricing1} from './pricing/Pricing1'
import {Pricing2} from './pricing/Pricing2'

function App() {
  return (
    <div className="App bg-dark " >
      
      <div className='text-white pt-4 p-4'>
        <h1 style={{fontSize:'6vmin'}}>WELCOME TO NEW APP</h1>
        <div className= "d-flex welcome" style={{marginTop:'2rem'}} >
          < Welcome1/>
          < Welcome2/>
        </div>
      </div>
      <div className=''>
        < Goodbye1/>  
      </div>
      <div className='' style={{width:'90%', margin:'auto', padding:'2rem 0'}}>
        < Screenshoot1/>
        < Screenshoot2/>
      </div>
      <div className='pricing'>
        < Pricing1/>
        < Pricing2/>
      </div>
    </div>
  );
}

export default App;
