import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
// class Subject extends Component{
//   render(){
//     return (        
//     <header>
//       <h1>{this.props.title}</h1>
//       {this.props.sub}
//     </header>     
//     );
//   }
// }

// class TOC extends Component{
//   render(){
//     return (
//     <nav>
//       <ul>
//           <li><a href="1.html">{this.props.li1}</a></li>
//           <li><a href="2.html">{this.props.li2}</a></li>
//           <li><a href="3.html">{this.props.li3}</a></li>
//       </ul>
//     </nav>
//     );
//   }
// }

// class Content extends Component{
//   render(){
//     return (
//       <article>
//             <h2>{this.props.h2_itle}</h2>
//             {this.props.article_content}
//       </article>
//     );
//   }
// }
class ABC extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
      subject_1:{title:'WEB', sub:'World Wide Web!'},
      subject_2:{title:'React', sub:'used for UI!'},
      welcome:{title:'Welcome!', desc:'Hello, React!!'},
      contents:[
        {id:1, h2_title:'HTML', article_content:'HTML is HyperText Markup Language'},
        {id:2, h2_title:'CSS', article_content:'CSS is for design'},
        {id:3, h2_title:'JavaScript', article_content:'JavaScript is for interactive'},
      ]
    };
  }
  render(){
    var _title, _desc;
    var _id;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }
    else if(this.state.mode==='read'){
      _title=this.state.contents[0].h2_title;
      _desc=this.state.contents[0].article_content;
    }
    return (
      <div className="App">
        {/* {<Subject title={this.state.subject.title} sub={this.state.subject.sub}/>  */}
        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log("on",this);
            e.preventDefault();
            // this.state.mode = 'read';
            if(this.state.mode==='welcome')
              this.setState({
                mode:'read'
              });
            else
              this.setState({
                mode:'welcome'
              });
          }.bind(ABC)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject 
          title={this.state.subject_1.title} 
          sub={this.state.subject_1.sub} 
          onChangePage={function(e){  //사용자 정의 함수
          // console.log(e);
          this.setState({
            mode:'read'
          });
        }.bind(this)} />
        <Subject 
          title={this.state.subject_2.title} 
          sub={this.state.subject_2.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}/>
        <TOC 
          data={this.state.contents} 
          onChangeData={function(){
            return _id;
            _title=this.state.contents[_id].h2_title;
            _desc=this.state.contents[_id].h2_title;
        }.bind(this)}/>
        <Content h2_title={_title} article_content={_desc}/>
      </div>
    );
  }
}

export default ABC;