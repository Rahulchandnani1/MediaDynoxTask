import { useEffect, useState, useRef } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import img1 from "./assets/main3.png";
import img2 from "./assets/main2.jpg";
import img3 from "./assets/main1.jpg";
import img4 from "./assets/im1.jpg";
import img5 from "./assets/im2.jpg";
import img6 from "./assets/im3.webp";
import img7 from "./assets/im4.jpg";
import img8 from "./assets/im5.jpg";
import img9 from "./assets/im6.jpg";
import img10 from "./assets/im7.jpg";
import img11 from "./assets/im8.jpg";
function App() {
  const imgar = [img1, img2, img3];
  const imgar1 = [img4, img5, img6, img7, img8, img9, img10, img11];
  const [index, setindex] = useState(0);
  const [menushow, setmenushow] = useState(false);
  const imgContainerRef = useRef(null);
  const imgContainerRef1 = useRef(null);
  const imgContainerRef3 = useRef(null);
  const interiorRef = useRef(null);
  const h1Ref = useRef(null);
  const handlemenu = () => {
    setmenushow(!menushow);
  }
  useEffect(() => {

    const intervalId = setInterval(() => {
      setindex(prevCount => {
        if (prevCount < imgar.length - 1) {
          return prevCount + 1;  
        } else {
          return 0;  
        }
      });
    }, 3000);


    // Cleaning up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1000) {
        // If screen width is below 1000px, do not apply the scroll effect
        return;
      }
      const scrollPosition = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (imgContainerRef.current) {
        const containerWidth1 = imgContainerRef.current.scrollWidth - imgContainerRef.current.clientWidth;
        imgContainerRef.current.scrollLeft = (scrollPosition / scrollableHeight) * containerWidth1;
      }

      if (imgContainerRef1.current) {
        const containerWidth2 = imgContainerRef1.current.scrollWidth - imgContainerRef1.current.clientWidth;
        imgContainerRef1.current.scrollLeft = containerWidth2 - (scrollPosition / scrollableHeight) * containerWidth2;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (interiorRef.current && h1Ref.current) {
        const screenWidth = window.innerWidth;

        if (screenWidth < 1000) {
          // If screen width is below 1000px, do not apply the scroll effect
          return;
        }

        const interiorTop = interiorRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculating the scroll progress inside the "interior" section
        const scrollProgress = 1 - (interiorTop / windowHeight);

        // Setting the min and max font size (in pixels)
        const minFontSize = 40;
        const maxFontSize = 105;

        const h1Elements = interiorRef.current.querySelectorAll('h1');

        h1Elements.forEach((h1) => {
          // Calculating the new font size based on scroll progress
          let newFontSize = minFontSize + (maxFontSize - minFontSize) * scrollProgress;

          // Clamping the font size to stay within the min and max range
          newFontSize = Math.max(minFontSize, Math.min(maxFontSize, newFontSize));

          // Applying the new font size to the h1 element
          h1.style.fontSize = `${newFontSize}px`;
        })
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Header show={menushow} handleshow={handlemenu} />
      {menushow ?
        <div className='newmenu'>
          <ul>
            <li>Interior Design</li>
            <hr className='hr1' />
            <li>Architecture</li>
            <hr className='hr1' />
            <li>Furniture</li>
            <hr className='hr1' />
            <li>Q&A with JLD</li>
            <hr className='hr1' />
            <li>Books</li>
            <hr className='hr1' />
            <li>Instagram</li>
            <hr className='hr1' />
            <li>Contact</li>
            <hr className='hr1' />
          </ul>
        </div> : <> <div className='mainimg' >
          <img src={imgar[index]} />
          <p>Design your life and dreams</p>
        </div>
          <div className='interior'>
            <p>Jean-Louis Deniot</p>

            <hr />
          </div>
          <div className='imgcontainer' ref={imgContainerRef}>
            {imgar1.map((item, index) => (
              <div className='imgdiv'>
                <img src={item} />
                <p>Place {index + 1}</p>
              </div>
            ))}
          </div>
          <div className='imgcontainer1' ref={imgContainerRef1}>
            {imgar1.map((item, index) => (
              <div className='imgdiv'>
                <img src={item} />
                <p>Place {index ? index : ""}</p>
              </div>
            ))}
          </div>
          <div className='interior1' ref={interiorRef}>
            <p>Our international interiors</p>
            <hr />
            <h1 ref={h1Ref}>Paris</h1>
            <h1 ref={h1Ref}>France</h1>
            <h1 ref={h1Ref}>London</h1>
            <h1 ref={h1Ref}>New York</h1>
            <h1 ref={h1Ref}>Florida</h1>
            <h1 ref={h1Ref}>Chicago</h1>
            <h1 ref={h1Ref}>Capri</h1>
            <h1 ref={h1Ref}>Bangkok</h1>
          </div>
          <Footer /></>}
    </div>
  );
}

export default App;
