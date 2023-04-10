import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { login } from '../api/auth';
import { IUser } from '../interfaces/user';
// import { IUser } from '../interfaces/user';

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };


type Props = {
    // onAdd: (user: IUser) => void
}

const Signin = (props: Props) => {

    const { register, handleSubmit, formState: { errors }} = useForm();

    // const onFinish = async ( data: any ) => {
    //     // console.log(data);
    //     // props.onAdd(values);
    //     const { data: user } = await login(data);
    //     console.log(user);

    const onHandleSubmit = async (data: any) => {
        const { data: user } = await login(data);
        // console.log(data);
        localStorage.setItem('user', JSON.stringify(user));
        
    }
        
     
  return (
//     <Form
//     name="basic"
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 16 }}
//     style={{ maxWidth: 600 }}
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Email"
//       name="email"
//       rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
<form action="" onSubmit={handleSubmit(onHandleSubmit)}>
    <input type="email" {...register("email")}/>
    <input type="password" {...register("password")}/>
    <button>Login</button>
</form>
  )
}

export default Signin