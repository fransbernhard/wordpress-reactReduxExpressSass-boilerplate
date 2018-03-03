import React, {Component} from 'react';

class Post extends Component {

	render(){
	  return (
      <ul className="post-ul">
        {this.props.products.map(prod =>
          <li className="post-li" key={prod.id}>
            {prod.title.rendered}
            <img className="img-class" src={prod.featured_image_src} />
          </li>
        )}
      </ul>
    )
  }
}

export default Post;
