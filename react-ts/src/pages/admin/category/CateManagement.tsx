import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { ICategory } from '../../../interfaces/category';


interface DataType {
    key: string | number;
    _id: string | number;
    name: string;
}

interface Iprops {
    category: ICategory[],
    onRemove: (_id: number | string) => void
}


const CateManagement = (props:  Iprops) => {

    const RemoveCate = (_id: number | string) => {
        props.onRemove(_id)
    }

    const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
      
        },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
              <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => RemoveCate(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/category/${record.id}/update`}>Update</Link></Button>
                </Space>
          ),
        },
      ];

      const data: DataType[] = props.category.map((item: ICategory) => {
        return {
            key: item._id,
            ...item
        }
      })

      console.log(data);
      


  return (
    <div>
        <button><Link to={"/admin/category/add"}>Create Product</Link></button>
        <Table columns={columns} dataSource={data} pagination={{pageSize: 5}}/>;
    </div>
  )
}


export default CateManagement