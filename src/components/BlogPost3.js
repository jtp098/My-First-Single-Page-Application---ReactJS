import React from 'react'
import imgBlog3 from './../Images/flower.JPG'

const BlogPost3 = () => {
    return (
        <div className="rowpost">
            <div className="col s2 m8">
                <div className="card" >
                    <div className="card-image">
                        <img alt="Lake" src={imgBlog3} />
                        <span className="card-title">Papaya - 1/15/2019</span>
                    </div>
                    <div className="card-content">
                        <span className="card-content">Papayas everywhere. Who knew the flower of the papaya plant was so beautiful,
                            who knew they had flowers! WHO KNEW you would read a blog post about a flow. Well you are! I had never seen
                            one before and I was blown away by how majestic they are. It just hung there in all it’s glowing with its
                            tentacles hanging down and leaf’s above with their deep read hue. This particular papaya flower was located
                            in the far reaches of Indonesia, Bali to be exact. This flower was hanging on a fence overlooking a rise Terrance.
                            You have certainly seen this rice Terrance on Instagram, it’s “insta famous” as they say. But I truly enjoyed this
                            flower and just had to share with picture with the world. </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogPost3