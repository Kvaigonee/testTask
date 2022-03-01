import React from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Form, DatePicker, Button, Space, InputNumber } from "antd";

const monthFormat = "MM/YYYY";

const CardValidate = () => {
	const onFinish = async (values) => {
		try {
			const response = await axios.post(
				"http://localhost:5000/card/addCard",
				values
			);
			alert(JSON.stringify(response.data));
		} catch (e) {
			alert(e);
		}
	};

	return (
		<Form
			name="complex-form"
			onFinish={onFinish}
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 16 }}
			style={{ marginTop: "5%" }}
		>
			<Form.Item label="Card Number">
				<Space>
					<Form.Item
						name="CardNumber"
						noStyle
						rules={[{ required: true, message: "Username is required" }]}
					>
						<InputNumber
							showCount
							stringMode={true}
							maxLength={16}
							minLength={16}
							style={{ width: "100%" }}
							placeholder="**** **** **** ****"
						/>
					</Form.Item>
				</Space>
			</Form.Item>

			<Form.Item label="Expiration Date">
				<Space>
					<Form.Item
						name="ExpDate"
						noStyle
						rules={[{ required: true, message: "Date is required" }]}
					>
						<DatePicker
							stringMode={true}
							format={monthFormat}
							style={{ width: "100%" }}
						/>
					</Form.Item>
				</Space>
			</Form.Item>

			<Form.Item label="CVV">
				<Space>
					<Form.Item
						name="Cvv"
						noStyle
						rules={[{ required: true, message: "CVV is required" }]}
					>
						<InputNumber
							stringMode={true}
							maxLength={3}
							minLength={3}
							style={{ width: "100%" }}
							placeholder="***"
						/>
					</Form.Item>
				</Space>
			</Form.Item>

			<Form.Item label="Amount">
				<Space>
					<Form.Item
						name="Amount"
						noStyle
						rules={[{ required: true, message: "Amount is required" }]}
					>
						<InputNumber stringMode={true} style={{ width: "100%" }} />
					</Form.Item>
				</Space>
			</Form.Item>

			<Form.Item label=" " colon={false}>
				<Button type="primary" htmlType="submit">
					Pay
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CardValidate;
