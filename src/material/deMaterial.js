import React from 'react'
import ReactDOM from 'react-dom';
class DeMaterial extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.url);
        this.serverRequest =$.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'get',
            // data: comment,
            success: function(data){
                data=Object.values(data);
                this.setState({list:data[0]});

            }.bind(this),
            error: function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    //修改
    deleteMaterial(id) {

    }

    List(){
        if(this.state==null)
            return null;
        console.log(this.state.list)
        const listItems = this.state.list.map((item) =>{
                return <div className="row" id={'material'+item.id} data-img={item.imageKey}>
                    <div className="col-xs-2 ">{item.type}</div>
                    <div className="col-xs-2 ">{item.type_name}</div>
                    <div className="col-xs-2 "><img width="50px" height="50px" src={item.imageKey} /></div>
                    <div className="col-xs-2">
                        <button className="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseMaterial"
                                onClick={'updateMaterial('+item.id+')'}>修改
                        </button>
                        <button className="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteMaterial"
                                onClick={this.deleteMaterial()}>删除
                        </button>
                    </div>
                </div>
            }
        );
        return listItems
    }

    render() {
        return (
            <div class="tablebody" id="material_cont">
                {this.List()}
            </div>
        );
    }

}
export default DeMaterial;