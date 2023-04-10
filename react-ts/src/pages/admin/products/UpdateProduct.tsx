import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Iproduct } from '../../../interfaces/products'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd'


interface Iprops {
  products: Iproduct[],
  onUpdate: (product: Iproduct) => void
}

const UpdateProduct = (props: Iprops) => {

  const id = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<Iproduct>()

  useEffect(() => {
    const currentProduct = props.products.find((product: Iproduct) => product.id == Number(id));

    setProduct(currentProduct)
  }, [props])

  useEffect(() => {
    setFields()
  }, [product])

  const [form] = Form.useForm();


  const setFields = () => {
    form.setFieldsValue({
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      desc: product?.desc,
      cate_id: product?.cate_id
    })
  }

  const onFinish = (values: any) => {
    props.onUpdate(values);
    navigate('/admin/products')
  }
  return (
    <Form
    form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label=""
      name="id"
      style={{display: 'none'}}
      rules={[{ required: true, message: 'Please input your id!' }]}
    //   {...register('name')}
    >
      <Input />
    </Form.Item>
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
        Update Product
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdateProduct