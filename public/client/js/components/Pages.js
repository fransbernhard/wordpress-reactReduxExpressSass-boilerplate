import React, {Component} from 'react';

class Page extends Component {
	render(){
	  return (
      <ul>
        {this.props.pages.map(page =>
          <li key={page.id}>
            {page.title.rendered}
          </li>
        )}
      </ul>
    )
  }
}

export default Page;
