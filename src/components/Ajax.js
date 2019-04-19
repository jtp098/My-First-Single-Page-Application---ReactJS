import React, { Component } from 'react'
import axios from 'axios'

class Ajax extends Component {
    state = {
        posts: []
    }
    componentDidMount() {

        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ENTER KEY HERE ')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.articles
                })
            });

        this.interval = setInterval(() => {
            axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ENTER KEY HERE ')
                .then(res => {
                    console.log(res);
                    this.setState({
                        posts: res.data.articles
                    })
                });
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card" key={post.title}>
                        <div className="card-content">
                            <span className="card-content">{post.title}</span>
                        </div>
                        <a href={post.url} className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">+</i></a>

                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet </div>
            )
        return (
            <div >
                {postList}
            </div>


        );

    }
}



export default Ajax