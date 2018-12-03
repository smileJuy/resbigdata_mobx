import React,{Component} from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

 export default class EditableTable extends React.Component {
   
  constructor(props) {
    super(props);
    let column = props.column;
    const operate = {
      title: '操作',
      dataIndex: '操作',
      render: (text, record) => {
        const editable = this.isEditing(record);
        return (
          <div>
            {editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      href="javascript:;"
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      保存
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="确定取消修改?"
                  onConfirm={() => this.cancel(record.key)}
                >
                  <a>取消</a>
                </Popconfirm>
              </span>
            ) : (
              <a onClick={() => this.edit(record.key)}>修改</a>
            )}
          </div>
        );
      },
    };
    column.push(operate);
    this.state = { data:props.tableData, editingKey: '',column:column };
  }
componentWillReceiveProps(nextProps){
  const operate = {
    title: '操作',
    dataIndex: '操作',
    render: (text, record) => {
      const editable = this.isEditing(record);
      return (
        <div>
          {editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    href="javascript:;"
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    保存
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm
                title="确定取消修改?" okText="保存" cancelText="取消"
                onConfirm={() => this.cancel(record.key)}
              >
                <a>取消</a>
              </Popconfirm>
            </span>
          ) : (
            <a onClick={() => this.edit(record.key)}>修改</a>
          )}
        </div>
      );
    },
  };
    let column = nextProps.column;
    column.push(operate);
    this.setState({ data:nextProps.tableData,column:column });
 
}
  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const { tableStore } = this.props;
    const columns = this.state.column && this.state.column.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'model_name' ? 'model_name' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });
    
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };

    return (
      <Table
        components={components}
        bordered
        rowSelection={rowSelection}
        dataSource={this.state.data}
        columns={columns}
        loading={this.props.loading}
        rowClassName="editable-row"
      />
    );
  }
}
