import React, {useState} from 'react'
import menu from '../assets/img/menu.svg'
import { useDispatch } from 'react-redux'
import {push } from 'connected-react-router'
function NavBar() {
    const [rotate, setrotate] = useState(false)
    const handleRotate=()=>{
        setrotate(!rotate)
    }
    const orientation = rotate ? 'rotate(90deg)':'rotate(0deg)'

    const dispatch = useDispatch();
  return (
    <>
    <img src={menu} class='navbar-icon' style={{transform:orientation, transition:'all 0.1s linear'}} alt=""  onClick={handleRotate}/>
    {orientation== 'rotate(90deg)'? (
        <div class= 'categories'>
        <div className="category">
            <h3 onClick={() => dispatch(push('/catagory'))}>Category</h3>
        </div>
        <div className="category">
            <h3 onClick={() => dispatch(push('/favourites'))}>Favorites</h3>
        </div>
    </div>
    ) : null}
    
    </>
  )
}

export default NavBar
// import { useHistory } from 'react-router'

// const history = useHistory()

// dispatch(push(location))
// history.push (location)


