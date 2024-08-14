import './Header.css'
import { MarioKartTour } from './icons/MarioKartTour'

function Header() {
  // const iconBig = {
  //   width: '75px',
  //   height: '75px'
  // };
  return (
    <div className="header-container">
      <img className='logoP' src='./images/logoP.png' alt='Logo Pequeno'/>
      <h1
      
      >Farmácia React</h1>
      <img className='logoP' src='./images/logoP.png' alt='Logo Pequeno'/>
      {/* <MarioKartTour style={iconBig}/> */}
    </div>
  )
}

export default Header
