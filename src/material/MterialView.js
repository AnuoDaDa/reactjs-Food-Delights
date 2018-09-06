import React from 'react'
import ReactDOM from 'react-dom';
class MterialView extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // 食材显示数据请求
        this.serverMaterial =$.ajax({
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

    //食材删除
    deleteMaterial(id){
        // console.log('delete'+id)
        let url='http://localhost:8000/deMaterial';
        $('#deMaterialCheck').click(function () {
            this.serverDelMaterial =$.ajax({
                url: url,
                dataType: 'json',
                type: 'post',
                data:{
                    id:id,
                },
                // data: comment,
                success: function(data){
                    document.getElementById("material"+id).remove();
                    $('#MaterialCancel').click();

                }.bind(this),
                error: function(xhr,status,err){
                    alert("删除失败，请重新删除！")
                }.bind(this)
            });
        })

    }

    //食材修改
    updateMaterial(id){
        console.log(id)
        var url ="http://localhost:8000/updateMaterialOn";
        this.serverUpMaterialon =$.ajax({
            url: url,
            dataType: 'json',
            type: 'post',
            data:{
                id:id,
            },
            success: function(data){
                console.log(data)
                var materials=data.materials;
                $('#update_material_type').prop({
                    value:materials.type
                });
                $('#update_material_name').prop({
                    value:materials.type_name
                });
                $('#update_material_img').prop({
                    src:materials.imageKey,
                    name:materials.imageKey
                })

            }.bind(this),
            error: function(xhr,status,err){
                alert("修改失败，请重新修改！")
            }.bind(this)
        });

        $('#updateMaterial').unbind('click').click(function () {
            var type=document.getElementById('update_material_type').value;
            var type_name=document.getElementById('update_material_name').value;
            var image=$('#update_material_img').attr('data-imgname');

            var url ="http://localhost:8000/update_material";
            this.serverUpMaterial =$.ajax({
                url: url,
                dataType: 'json',
                type: 'post',
                data:{
                    id:id,
                    type:type,
                    type_name:type_name,
                    image:image
                },
                success: function(data){
                    $('#materialMang').click();
                    $('#updateMater_C').click();
                }.bind(this),
                error: function(xhr,status,err){
                    alert("修改失败，请重新修改！")
                }.bind(this)
            });

        })
    }

    componentWillUnmount() {
        this.serverMaterial.abort();
        this.serverDelMaterial.abort();
        this.serverUpMaterialon.abort();
        this.serverUpMaterial.abort();

    }

    List(){
        if(this.state==null)
            return null;
        const listItems = this.state.list.map((item) =>{
                return <div className="row" id={'material'+item.id} data-img={item.imageKey}>
                <div className="col-xs-2 ">{item.type}</div>
                <div className="col-xs-2 ">{item.type_name}</div>
                <div className="col-xs-2 "><img width="50px" height="50px" src={item.imageKey} /></div>
                <div className="col-xs-2">
                    <button className="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseMaterial"
                            onClick={(this.updateMaterial).bind(this,item.id)}>修改
                    </button>
                    <button className="btn btn-danger btn-xs" data-deMaterial_id={item.id} id="btn_deMaterial" data-toggle="modal" data-target="#deleteMaterial"
                            onClick={(this.deleteMaterial).bind(this,item.id)}>删除
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
export default MterialView;