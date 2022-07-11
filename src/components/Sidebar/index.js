import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span><strong>Recent Posts</strong></span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <div className="recentPost">
                                    <NavLink key={post.id} to={`/post/${post.slug}`}>
                                        <h3>{post.blogTitle}</h3>
                                    </NavLink>
                                        <span>{post.postedOn}</span>
                                        <br/>
                                        <div className="postImageContainer">
                                            <img src={`/images/${post.blogImage}`} alt="Post Image" />    
                                        </div>
                                        <span className="postDescription">{post.blogText}</span>
                                </div>
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar