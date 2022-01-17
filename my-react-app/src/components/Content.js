import { Component } from 'react/cjs/react.production.min';

class Content extends Component{
    render(){
      return (
        <article>
              <h2>{this.props.h2_title}</h2>
              {this.props.article_content}
        </article>
      );
    }
  }
export default Content