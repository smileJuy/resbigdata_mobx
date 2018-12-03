import React,{Component} from 'react';
import RecycleMng from '../../components/RecycleMng/recycleMng';
import { Breadcrumb } from 'antd';

class Recycle extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>回收站</Breadcrumb.Item>
                </Breadcrumb>
                <RecycleMng />
            </div>
        )
    }
}

export default Recycle;