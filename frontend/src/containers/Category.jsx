import React, { useEffect, useState } from 'react'
import API from '../API'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

// API CALL
const api = new API();
const Category = () => {
    const [categoryAction, setcategoryAction] = useState(null)
    const [categoryComedy, setcategoryComedy] = useState(null)
    const [categoryDrama, setcategoryDrama] = useState(null)
    const [categoryHorror, setcategoryHorror] = useState(null)
    
    useEffect(() => {
        api.getMovies({category_id: '2'})
        .then(movies => {
            setcategoryAction(movies);
        })
        .catch(error =>{

        })

        api.getMovies({category_id: '3'})
        .then(movies => {
            setcategoryComedy(movies);
        })
        .catch(error =>{

         })
        
         api.getMovies({category_id: '4'})
         .then(movies => {
             setcategoryDrama(movies);
         })
         .catch(error =>{

          })

        api.getMovies({category_id: '5'})
          .then(movies => {
              setcategoryHorror(movies);
          })
          .catch(error =>{

           });
    }, [])
    return (
        <div>
            <Header/>
            {/* Action */}
            <h1 className='newly-released-header'>
                Action
            </h1>
            {categoryAction && categoryAction.results.length > 0 ? (
                <div class="movie">
                    {categoryAction.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot find movie for you....</p>
                </div>
            )}

            {/* Comedy */}
            <h1 className='newly-released-header'>
                Comedy
            </h1>
            {categoryComedy && categoryComedy.results.length > 0 ? (
                <div class="movie">
                    {categoryComedy.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot find movie for you....</p>
                </div>
            )}

            {/* Drama */}
            <h1 className='newly-released-header'>
                Drama
            </h1>
            {categoryDrama && categoryDrama.results.length > 0 ? (
                <div class="movie">
                    {categoryDrama.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot find movie for you....</p>
                </div>
            )}
        
            {/* Horror */}
            <h1 className='newly-released-header'>
                Horror
            </h1>
            {categoryHorror && categoryHorror.results.length > 0 ? (
                <div class="movie">
                    {categoryHorror.results.map(movie =>(
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='divider'>
                    <p>Cannot find movie for you....</p>
                </div>
            )}
    
            <Footer/>
        </div>
    );
};
export default Category;