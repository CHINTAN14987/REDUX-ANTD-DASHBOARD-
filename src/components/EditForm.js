import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editItems, stateSet } from "../actions";
import "./CSS/EditForm.css";

const EditForm = ({ editvalue }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formvalue, setFormValue] = useState({
    id: editvalue.id,
    myName: editvalue.myName,
    email: editvalue.email,
    phone: editvalue.phone,
    website: editvalue.website,
  });

  const showModal = () => {
    setIsModalVisible(true);
    setFormValue(editvalue);
    dispatch(stateSet(true));
  };

  const handleOk = () => {
    dispatch(stateSet(true));
    setIsModalVisible(false);
    dispatch(editItems(formvalue));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(stateSet(true));
  };

  return (
    <>
      {!state.myState && (
        <Button className="Modal_Button" type="primary" onClick={showModal}>
          Click Here To Edit The Details..!
        </Button>
      )}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="basic" wrapperCol={{ span: 16 }}>
          <Form.Item
            label="Name"
            rules={[{ required: true }]}
            className="mylabel"
            style={{ justifyContent: "end" }}
          >
            <Input
              type="text"
              value={formvalue.myName}
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
              onChange={(e) => {
                setFormValue({
                  ...formvalue,
                  website: e.target.value,
                });
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditForm;
