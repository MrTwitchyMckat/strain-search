import Search from '../Search/Search';
import './header.scss';

function Header() {
  return ( 
    <div className="header" style={{backgroundImage: "url(/header.jpg)"}}>
      <div className="logo">
        <img src="/logo.svg" alt="Strain search logo" />
      </div>
      <div className="header-text">
        <h1>
          Start your strain search here.
        </h1>
      </div>
      <Search />
    </div>
  );
}

export default Header;