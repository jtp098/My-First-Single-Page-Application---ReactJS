import React from 'react'
import imgBlog1 from './../Images/sunset.JPG'


const BlogPost1 = () => {
  return (
    <div className="rowpost">
      <div className="col s2 m8">
        <div className="card" >
          <div className="card-image">
            <img alt="Lake" src={imgBlog1} />
            <span className="card-title">Chasing Sunsets - 8/8/2011</span>
          </div>
          <div className="card-content">
            <span className="card-content">It was a beautiful august summer night in San Juan island Washing.
              The crickets were chirping and the and the song birds were singing. The water on the harbor glowed
              orange with the passing sun, and I knew I needed to jump in the truck and ride over to the beach to
              watch the sunset. So, grabbed my camera and jumped into the truck and took off for the beach with
              the windows down listening to the summer night. I arrived just in time for the epic end of day show.
              I took up my position on the beach want watched the slow lap of the water on the beach and enjoyed to
              peace and quite of the summer evening and beach to myself. I took out my camera and snapped a few pictures,
              playing with the light on the water and sky, above this post. As the sun set I enjoyed a few more minutes of
                  the beautiful summer night before hoping into the car and going back to the house. .</span>
          </div>
        </div>
      </div>
    </div>


  )
}

export default BlogPost1