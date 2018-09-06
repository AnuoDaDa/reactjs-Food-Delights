import React from 'react'
import ReactDOM from 'react-dom';
class UpMaterialView extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="gridSystemModalLabel">修改食材</h4>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <form className="form-horizontal">
                            <div className="form-group ">
                                <label htmlFor="sName" className="col-xs-3 control-label">食材类型：</label>
                                <div className="col-xs-8 ">
                                    <input type="text" className="form-control input-sm duiqi"
                                           id="update_material_type"
                                           placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sKnot" className="col-xs-3 control-label">类型名称 ：</label>
                                <div className="col-xs-8">
                                    <input type="text" className="form-control input-sm duiqi"
                                           id="update_material_name"
                                           placeholder="" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="sName" className="col-xs-3 control-label">封 面：</label>
                                <div className="col-xs-8 ">
                                    <label className="inline">
                                        <div id="uploader-demo">
                                            <div id="fileList" className="uploader-list"></div>
                                            <div id="materialUpdate">更改图片</div>
                                        </div>
                                    </label>
                                    <img width="100px" height="100px" src="" alt="" id="update_material_img" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-xs btn-white" data-dismiss="modal" id="updateMater_C">取
                        消
                    </button>
                    <button type="button" className="btn btn-xs btn-green" id="updateMaterial">保 存</button>
                </div>
            </div>
            </div>
        );
    }

}
export default UpMaterialView;