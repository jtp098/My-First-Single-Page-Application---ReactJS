import React from 'react'
import Ajax from './Ajax';
import imgBlog1 from './../Images/sunset.JPG'
import imgBlog2 from './../Images/lavender.JPG'
import imgBlog3 from './../Images/flower.JPG'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="grid-container">
      <div className="main">
        <div className="row">
          <div className="col s12 m12">
            <div className="card" >
              <div className="card-image">
                <img alt='Lake' src={imgBlog1} />
                <h1><NavLink className="card-title" to='/BlogPost1'>Chasing Sunsets - 8/8/2011</NavLink></h1>
              </div>
              <div className="card-content">
                <span className="card-content">It was a beautiful august summer night in San Juan island Washing.
                  The crickets were chirping and the and..... </span>
              </div>
              <div className="card-action">
                <NavLink to='/BlogPost1'>Read More</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <div className="card" >
              <div className="card-image">
                <img alt="Lake" src={imgBlog2} />
                <h1><NavLink className="card-title" to='/BlogPost2'>Purple Rain - 8/18/2011</NavLink></h1>
              </div>
              <div className="card-content">
                <span className="card-content">Purple… Purple… Purple as far as you can see, the smell of purple....</span>
              </div>
              <div className="card-action">
                <NavLink to='/BlogPost2'>Read More</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <div className="card" >
              <div className="card-image">
                <img alt="Lake" src={imgBlog3} />
                <h1><NavLink className="card-title" to='/BlogPost3'>Papaya - 1/15/2019</NavLink></h1>
              </div>
              <div className="card-content">
                <span className="card-content">Papayas everywhere. Who knew the flower of the papaya plant was so beautiful....</span>
              </div>
              <div className="card-action">
                <NavLink to='/BlogPost3'>Read More</NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="nav">
        <Ajax />
      </div>

    </div>


  )
}

export default Home