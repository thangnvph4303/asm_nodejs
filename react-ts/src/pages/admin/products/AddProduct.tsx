import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

import { useNavigate } from 'react-router-dom'
import { Iproduct } from '../../../interfaces/products';

const { TextArea } = Input;

interface Iprops {
    onAdd: (product: Iproduct) => void
}

// type Props = {}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const AddProduct = (props: Iprops) => {

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    //   {...register('name')}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Please input your price!' }]}
    //   {...register('name')}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Please input your image!' }]}
    //   {...register('name')}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Description"
      name="desc"
      rules={[{ required: true, message: 'Please input your Description!' }]}
    //   {...register('name')}
    >
      <Input />
    </Form.Item>  

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type='primary' htmlType="submit">
        Add New Product
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddProduct