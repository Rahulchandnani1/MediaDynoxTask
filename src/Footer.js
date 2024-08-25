import './App.css';
import img from "./assets/tb1.jpg";
function Footer() {
  return (
    <footer>
      <div className="footer">

        <div className='fimg'>
          <img src={img} />
        </div>
        <ul className='flist'>
          <li className='flistitem'>Books</li>
          <li className='flistitem'>Press Room</li>
          <li className='flistitem'>Private</li>
          <li className='flistitem'>Legal Notice</li>
          <li className='flistitem'>Instagram</li>
          <li className='flistitem'>Contact</li>
        </ul>
        <div className='text148'>
          <p><span>Created by</span> 148</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
