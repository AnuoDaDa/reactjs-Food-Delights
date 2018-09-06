import React from 'react'
import ReactDOM from 'react-dom';
class AddMaterialView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //图片添加
        $('#addMaterial').click(function () {
            var material_type =$('#add_material_type').val();
            var material_name=$('#add_material_name').val();
            var material_img=$('#MaterialImg').attr('name');
            var material_imgname=$('#MaterialImg').attr('data-imgname');
            var url ="http://localhost:8000/addMaterial";
            this.serverDelMaterial =$.ajax({
                url: url,
                dataType: 'json',
                type: 'post',
                data:{
                    material_type:material_type,
                    material_name:material_name,
                    material_img:material_img
                },
                success: function(data){
                    var result=data;
                    var str=' <div class="row"  id="material'+result+'">' +
                        '<div class="col-xs-2 ">'+material_type+'</div>' +
                        '<div class="col-xs-2 ">'+material_name+'</div>' +
                        '<div class="col-xs-2 "><img  width="50px" height="50px" src="'+material_imgname+'"></div>' +
                        '<div class="col-xs-2">' +
                        '<button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseMaterial" onclick="updateMaterial('+result+')">修改</button>' +
                        '<button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteMaterial"  onclick="deleteMaterial('+result+')">删除</button>' +
                        '</div>' +
                        '</div>';
                    $('#addcancel').click();
                    $('#material_cont').append(str);
                    $('#MaterialImg').remove();
                }.bind(this),
                error: function(xhr,status,err){
                    alert('添加失败，请重新添加！')
                }.bind(this)
            });
        })
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
                        <h4 className="modal-title" id="gridSystemModalLabel">添加食材</h4>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <form className="form-horizontal">
                                <div className="form-group ">
                                    <label htmlFor="sName" className="col-xs-3 control-label">食材类型：</label>
                                    <div className="col-xs-8 ">
                                        <input type="text" className="form-control input-sm duiqi"
                                               id="add_material_type"
                                               placeholder="" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sKnot" className="col-xs-3 control-label">类型名称 ：</label>
                                    <div className="col-xs-8">
                                        <input type="text" className="form-control input-sm duiqi"
                                               id="add_material_name"
                                               placeholder=""/>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="sName" className="col-xs-3 control-label">封 面：</label>
                                    <div className="col-xs-8 ">
                                        <label className="inline" id="Material_img">
                                            <div id="uploader-demo">
                                                <div id="fileList" className="uploader-list"></div>
                                                <div id="materialPicker">选择图片</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-xs btn-white" data-dismiss="modal" id="addcancel">取 消
                        </button>
                        <button type="button" className="btn btn-xs btn-green" id="addMaterial">保 存</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default AddMaterialView;