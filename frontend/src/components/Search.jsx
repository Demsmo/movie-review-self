import React, { useState } from 'react'
import Results from '../components/SearchBox'
import ImgSearch from '../assets/img/search.svg'

export default function Search = () => {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => setShowResults(!showResults);
  return (
    <div>
            <img src={ImgSearch} class="sp-search" alt="" onClick={onClick} />
            {showResults ? <Results /> : null}
    </div>
  )
}
