import { observable, computed, action } from "mobx";
export default class TableStore{

    @observable total = 0; 
    @observable tabledata = [];//表格数据内容
    @observable column = [];//表格头部内容
    @observable loading = true; //Table-loading
    @action fetchTableData(url,tableParam){
        fetch(url,{
            method:'post',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(tableParam)
        })
            .then((response) => {
                // console.log(response);
                response.json().then(function(data){
                    console.log(data);
                    debugger
                    this.tabledata = data.data;
                    this.column = data.tabletitle;
                    this.loading = false; //Table-loading
                }.bind(this));
            })
            .catch((err) => {
                console.log(err);
            })
    }
    @action InitData = (url,tableParam) =>{
        this.fetchTableData(url,tableParam);
    }
    //添加
    @action AddTodo = () => {
        this._key += 1;
        this.fetchTodoAdd();
    };

    //checkbox选择
    @action onSelectChange = (selectedRowKeys) => {
        this.selectedRowKeys = selectedRowKeys;
    };

    //删除单个
    @action remove(key) {
        this.fetchTodoRemove([key]);
    }

    //删除选择
    @action removeSelected() {
        this.fetchTodoRemove(this.selectedRowKeys);
    }

    //计算长度
    @computed get TodoListCount() {
        return this.todos.length;
    }
}

// decorate(UserStore, {
//     account: observable,
//     setUserInfo: action
// })
