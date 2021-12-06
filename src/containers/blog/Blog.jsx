import React from 'react';
import { Article } from '../../components';
import './blog.css';

import { blog01,blog02,blog03,blog04,blog05 } from './imports';

const Blog = () => {
    return (
        <div className="whatud__blog section-padding" id="blog">
            <div className="whatud__blog-header">
                <h1 className="gradient__text">A lot is happening, We are blogging</h1>
            </div>
            <div className="whatud__blog-container">
                <div className="whatud__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" title="Title 1"/>
                </div>
                <div className="whatud__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" title="Title 2 lorem"/>
                    <Article imgUrl={blog03} date="Sep 26, 2021" title="Title 3"/>
                    <Article imgUrl={blog04} date="Sep 26, 2021" title="Title 4"/>
                    <Article imgUrl={blog05} date="Sep 26, 2021" title="Title 5"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
