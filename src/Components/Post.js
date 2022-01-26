import React from 'react';

function Post({post}) {
  return <div className='post'>
      <img className="postImg"
            src = ""
            alt = ""
      />
      <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
                <span className="postTitle">{post.title}</span>
                <hr/>
                <span className="postDate">1 hour ago</span>

      </div>
      <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sint molestias aut mollitia harum nam illum blanditiis sequi esse soluta commodi omnis possimus nesciunt aliquam dolores, reiciendis vitae nihil molestiae nisi, hic reprehenderit? Aut corrupti facere possimus molestiae facilis harum est qui veritatis eligendi, at quia, quisquam ab magni enim?
      </p>

  </div>;
}

export default Post;
