import React, {useState} from 'react';
import logo from '../assets/img/logo.svg';
import search_icon from '../assets/img/search.svg';
import category from '../assets/img/catagory.svg';
import favorites from '../assets/img/favorites.svg';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import NavBar from './NavBar';


export default function Header() {
  const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('/search/?search=' + search));
    };
  return (
    <> 
      <header id='header'>
      <NavBar />
        <div class="logo">
            <img src={logo} onClick={() => dispatch(push('/'))} alt="logo" class="logo" />
        </div>
        
        <nav>
            
                <input type="text" class="search-bar" onChange={inputSearch}/>
                <img src={search_icon} alt="Search" class="search" onClick={submitAction}/>
                <img src={category} alt="Catagory" class="catagory" onClick={() => dispatch(push('/catagory'))}/>
                <img src={favorites} alt="Favorites" class="favorites" onClick={() => dispatch(push('/favourites'))}/>
            
        </nav>
        
        
      </header>
    </>
  )
}
