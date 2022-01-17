import { Component } from 'react/cjs/react.production.min';

class TOC extends Component{
    render(){
        var data = this.props.data;
        var lists = [];
        var num=0;
        for (;num<data.length;num++){
            lists.push(<li key={data[num].id}><a href={"/content/"+data[num].id} onClick={function(e){
                e.defaultPrevented();
                this.props.onChangeData();
            }.bind(this)}>{data[num].h2_title}</a></li>);
        }
        return (
            <nav>
              <ul>
                  {lists}
              </ul>
            </nav>
        );
    }
}
export default TOC