import React from 'react'

// eslint-disable-next-line react/prop-types
const Posts = ({ posts, loading }) => {
    return (
        <div>
            {loading && <div>Loadiing....</div>}
            <ul className='list-group '>

                {/* eslint-disable-next-line react/prop-types */}
                {posts && posts.map((post) => {
                    return (
                        <li key={post.userId} className='list-group-item'>
                            {post.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts