import React from 'react'
import imgBlog2 from './../Images/lavender.JPG'

const BlogPost2 = () => {
    return (
        <div className="rowpost">
            <div className="col s2 m8">
                <div className="card" >
                    <div className="card-image">
                        <img alt="Lake" src={imgBlog2} />
                        <span className="card-title">Purple Rain - 8/18/2011</span>
                    </div>
                    <div className="card-content">
                        <span className="card-content">Purple… Purple… Purple as far as you can see, the smell of purple or the smelt of lavender?
                            The fields of the lavender farms on San Juan island stretch as far as the eye can see. The smell in the air was wonderful
                            and filled your mind with a refreshing sent. If you took the lavender flowers and rubber it between your finders and then
                            smelled it, it was amazing! I thought to myself that it would be a wonderful place to lay down and take a nap. As I continued
                            my journey through the fields I made my way to the gift shop where you could buy all these wonderful lavender products. I picked
                            up my soaps and satchels that you can put in your clothes drawers. It was truly a wonderful day. </span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BlogPost2