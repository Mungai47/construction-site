import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom';

function Header() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }

  return (
    <header className="p-4 shadow-lg navbar">
        <div className="w-5/6 mx-auto flex justify-between items-center">        
            <Link to="/">
                <div className="flex items-center gap-2 shrink-0">
                    <img className="h-12 w-12" src="/logo.png" alt="logo" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold">CornerStone</h1>
                </div>
            </Link> 
            <div className="lg:hidden">
                {<TiThMenu />}
            </div>       
            <div className=" hidden lg:inline">
                <ul className="flex items-center gap-3 lg:gap-5 text-lg sm:text-xl font-medium">
                    <Link to="/">
                        <li className="hover:underline">Home</li>
                    </Link>
                    <Link to="/services">
                        <li className="hover:underline">Services</li>
                    </Link>
                    <Link to="/about-us">
                        <li className="hover:underline">About us</li>
                    </Link>
                    <Link to="/contact-us">
                        <li className="hover:underline">Contact us</li>
                    </Link>
                    <Link to="/blog">
                        <li className="hover:underline">Blog</li>
                    </Link>
                </ul>    
            </div>
        </div>
    </header>
  )
}

export default Header
