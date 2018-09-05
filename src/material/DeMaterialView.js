import React from 'react'
import ReactDOM from 'react-dom';
class DeMaterialView extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.serverRequest =$.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'post',
            id:this.props.id,
            // data: comment,
            success: function(data){
                console.log(data);
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
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="gridSystemModalLabel">提示</h4>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            确定要删除该食材？删除后不可恢复！
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-xs btn-white" data-dismiss="modal"
                                id="MaterialCancel">取 消
                        </button>
                        <button type="button" className="btn  btn-xs btn-danger" id="deMaterialCheck">保 存</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default DeMaterialView;