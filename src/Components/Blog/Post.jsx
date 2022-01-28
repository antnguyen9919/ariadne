import React from 'react';
import './Post.css';

export default function Post() {
  return <div className='post'>
      <img className='postImg' src ="https://bilder.bild.de/fotos-skaliert/lionel-messi-wird-nicht-mehr-fuer-den-fc-barcelona-auflaufen-312a5155cbd74636b32e58d1bce5cf70-77300420/31,w=1986,q=low,c=0.bild.jpg"  alt = ""/>

    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Messi misses FCB!
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque deserunt vel et nisi officiis sit dicta voluptates, impedit aliquam saepe architecto quia sed sequi. Debitis, omnis. Veritatis ab pariatur facilis ipsum! Eos voluptas vero reiciendis impedit quas! Consectetur et, culpa doloremque ut accusantium reiciendis ab sunt laborum sequi itaque alias, praesentium excepturi delectus? Modi ad hic excepturi praesentium ducimus commodi voluptas tenetur, iure dolorem aperiam a accusamus repellendus aliquam culpa perspiciatis consectetur nobis vel. Nulla molestias beatae aliquam ad iste enim impedit doloremque minima, rerum dignissimos quis porro fugit necessitatibus magni repellat? Natus atque cumque quaerat aperiam a sed.</p>

    
  </div>;
}
