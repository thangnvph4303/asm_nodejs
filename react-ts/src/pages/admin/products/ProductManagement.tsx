import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Link } from 'react-router-dom'
import { Iproduct } from '../../../interfaces/products';


interface DataType {
    key: string | number;
    _id: string | number;
    name: string;
    price: number;
    image: string;
    desc: string;
    cate_id: string | number;
}

interface Iprops {
    products: Iproduct[],
    onRemove: (_id: number | string) => void
}


const ProductManagement = (props:  Iprops) => {

    const removePro = (_id: number | string) => {
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
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
        },
        {
          title: 'Description',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
          title: 'Cate_id',
          dataIndex: 'cate_id',
          key: 'cate_id',
        },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
              <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removePro(record._id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/products/${record.id}/update`}>Update</Link></Button>
                </Space>
          ),
          
        },
      ];

      

      const data: DataType[] = props.products.map((item: Iproduct) => {
        return {
            key: item._id,
            ...item
        }
      })

      console.log(data);
      


  return (
    <div>
        <button><Link to={"/admin/products/add"}>Create Product</Link></button>
        <Table columns={columns} dataSource={data} pagination={{pageSize: 5}}/>
    </div>
  )
}


export default ProductManagement