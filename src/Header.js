import './App.css';
import logo from "./assets/logo.jpg";
import ham from "./assets/ham2.jpg";
import cross from "./assets/crosss.jpg";
function Header(props) {
  return (
    <div className="header">
      <nav>
        <div className='menuleft'>
          <img src={logo} />
        </div>
        <ul className='menuright'>
          <li className='menup'>Interior Design</li>
          <li className='menup'>Architecture</li>
          <li className='menup'>Furniture</li>
          <li className='menup'>Q&A with JLD</li>
          <li className='menup'>Books</li>
          <li className='menup'>Instagram</li>
          <li className='menup'>Contact</li>
        </ul>
        <div className='menuicon' onClick={props.handleshow}>
          <img src={props.show ? cross : ham} />
        </div>

      </nav>
    </div>
  );
}

export default Header;
