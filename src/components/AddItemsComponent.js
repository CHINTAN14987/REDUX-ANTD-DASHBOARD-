import React, { useState } from "react";
import { Form, Input } from "antd";
import { addItems, stateSet, additemStateAction } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./CSS/AddItemsComponent.css";

const AddItemsComponent = () => {
  const formState = useSelector((state) => state.stateReducer);
  const addItemState = useSelector((state) => state.StateAddItemsReducer);
  const disptach = useDispatch();
  const [formvalue, setFormValue] = useState({
    id: new Date().getTime(),
    img: "",
    myName: "",
    email: "",
    phone: "",
    website: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    disptach(addItems(formvalue));
    disptach(additemStateAction(false));
    console.log(formState);
  };
  return (
    <>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        className="AddItem_FormWrapper"
      >
        <Form.Item
          label="Image Adress"
          rules={[{ required: true }]}
          className="mylabel"
          style={{ justifyContent: "end" }}
        >
          <Input
            type="text"
            value={formvalue.img}
            name="id"
            onChange={(e) => {
              setFormValue({
                ...formvalue,
                img: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          rules={[{ required: true }]}
          className="mylabel"
          style={{ justifyContent: "end" }}
        >
          <Input
            type="text"
            value={formvalue.myName}
            name="nyName"
            onChange={(e) => {
              setFormValue({
                ...formvalue,
                myName: e.target.value,
              });
            }}
          />
        </Form.Item>

        <Form.Item
          className="mylabel"
          label="Email"
          rules={[{ required: true }]}
          style={{ justifyContent: "end" }}
          type="email"
        >
          <Input
            type="text"
            value={formvalue.email}
            name="email"
            onChange={(e) => {
              setFormValue({
                ...formvalue,
                email: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          className="mylabel"
          rules={[{ required: true, message: "Phone" }]}
          style={{ justifyContent: "end" }}
        >
          <Input
            value={formvalue.phone}
            name="phone"
            onChange={(e) => {
              setFormValue({
                ...formvalue,
                phone: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Website"
          className="mylabel"
          rules={[{ required: true, message: "Website" }]}
          style={{ justifyContent: "end" }}
        >
          <Input
            type="text"
            value={formvalue.website}
            name="website"
            onChange={(e) => {
              setFormValue({
                ...formvalue,
                website: e.target.value,
              });
            }}
          />
        </Form.Item>
        <button onClick={submitHandler}>Submit</button>
      </Form>
    </>
  );
};

export default AddItemsComponent;
