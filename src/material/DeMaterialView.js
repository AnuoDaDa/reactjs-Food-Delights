import React from 'react'
import ReactDOM from 'react-dom';
class DeMaterialView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    componentWillUnmount() {
        this.serverRequest.abort();
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