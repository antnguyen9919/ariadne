import React from 'react';
import './Post.css';

export default function Post() {
  return <div className='post'>
      <img className='postImg' src ="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"  alt = ""/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque deserunt vel et nisi officiis sit dicta voluptates, impedit aliquam saepe architecto quia sed sequi. Debitis, omnis. Veritatis ab pariatur facilis ipsum! Eos voluptas vero reiciendis impedit quas! Consectetur et, culpa doloremque ut accusantium reiciendis ab sunt laborum sequi itaque alias, praesentium excepturi delectus? Modi ad hic excepturi praesentium ducimus commodi voluptas tenetur, iure dolorem aperiam a accusamus repellendus aliquam culpa perspiciatis consectetur nobis vel. Nulla molestias beatae aliquam ad iste enim impedit doloremque minima, rerum dignissimos quis porro fugit necessitatibus magni repellat? Natus atque cumque quaerat aperiam a sed.</p>

    
  </div>;
}
