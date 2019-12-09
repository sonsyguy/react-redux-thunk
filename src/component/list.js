import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getListAction} from '../actionCreator/getList_action'
import {addItemAction,reduceItemAction} from '../actionCreator/counter_action'
 
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(this.props);
    }

    componentDidMount(){
        this.props.dispatch(getListAction)
    }

    reduceItem(){
        this.props.dispatch(reduceItemAction)
    }

    addItem(){
        this.props.dispatch(addItemAction)
    }

    render() { 
        console.log(this.props);
        return ( 
            <div>
                <p>{this.props.getList.counter.count}</p>
                <button onClick={()=>this.reduceItem()}>减少</button>
                <button onClick={()=>this.addItem()}>增加</button>
                {this.props.getList.post.data.map((val)=>{
                    return (
                    <span key={val.id}>{val.title}</span>
                    )
                })}
            </div>
         );
    }
}

const mapStateToProps = (state,ownProps)=>{
    console.log(state);
    console.log(ownProps);
    return {
        getList:state
    }
}
 
export default connect(mapStateToProps)(List);