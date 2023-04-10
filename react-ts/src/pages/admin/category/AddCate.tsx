import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../../interfaces/category";

const { TextArea } = Input;

interface Iprops {
	onAdd: (category: ICategory) => void;
}

// type Props = {}

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};
const AddCategory = (props: Iprops) => {
	const navigate = useNavigate();

	const onFinish = (values: any) => {
		props.onAdd(values);
		navigate("/admin/category");
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
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
				rules={[{ required: true, message: "Please input your name!" }]}
				//   {...register('name')}
			>
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Add New Product
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddCategory;
