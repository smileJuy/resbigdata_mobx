import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Popconfirm } from 'antd';

@inject('appStore')
@observer
class Test1 extends Component{
    componentDidMount(){
        const { appStore } = this.props;
        appStore.fetchTodos();
    }
    render(){
        const { appStore } = this.props;
        appStore.title.toJS().push({
            title: 'action',
            dataIndex: 'action',
            width: 100,
            render:  (text, record) => {
                return(
                    <Popconfirm title="确认删除?" onConfirm={() => appStore.remove(record.key)}>
                        <a>删除</a>
                    </Popconfirm>
                )
            }
        });
        const columns = appStore.title.toJS();
        const rowSelection = {
            selectedRowKeys: appStore.selectedRowKeys,
            onChange: appStore.onSelectChange,
        };
        return(
            <div>
                <Table
                    dataSource={appStore.todos.toJS()}
                    columns={columns}
                    rowSelection={rowSelection}
                    loading={appStore.loading}
                    pagination={false}
                    size='middle'
                />
                <p style={{marginTop:'15px'}}>{`Total ${appStore.total} items`}</p>
            </div>
        )
    }
}

export default inject(stores=>{
    const appStore= stores.rootStore.appStore
    return {
        appStore
    }
})(observer(Test1))