import { useDispatch, useSelector } from "react-redux";
import { deleteItems, stateSet, additemStateAction } from "../actions";
import { Row, Col, Card } from "antd";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import EditForm from "./EditForm";
import { useState } from "react";
import AddItemsComponent from "./AddItemsComponent";
import "./CSS/Dashboard.css";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const mystate = useSelector((state) => state.DataReducers);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateReducer);
  const addItemState = useSelector((state) => state.StateAddItemsReducer);

  const [myModal, setmyModal] = useState(false);
  const [editItem, setEditItem] = useState([]);
  let navigate = useNavigate();
  const deleteHandler = (i) => {
    dispatch(deleteItems(i));
  };

  const editHandler = (item) => {
    setmyModal(true);

    setEditItem(item);
    dispatch(stateSet(false));
  };

  const AddItemHandler = () => {
    console.log(addItemState.addItemsState, "two");
    dispatch(additemStateAction(true));
    console.log(addItemState.addItemsState, "3");
  };

  const LogoutHandler = () => {
    navigate(-1);
  };

  return (
    <div className="main_Container">
      <div className="dashboard_Heading_Wrapper">
        <h3>DASHBOARD</h3>
        <button onClick={LogoutHandler}>Logout</button>
      </div>
      <Row>
        {mystate.myData.map((item, index) => {
          const { id, myName, img, phone, email, website } = item;
          return (
            <Col span={6} xs={24} sm={24} md={8} lg={8} xl={6} key={id}>
              <Card
                style={{ margin: "15px" }}
                cover={
                  <div
                    style={{
                      background: "#ececec",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      alt="/"
                      src={img}
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    />
                  </div>
                }
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => {
                      editHandler(item);
                    }}
                  />,
                  <DeleteFilled
                    onClick={() => {
                      deleteHandler(item);
                    }}
                    style={{ fontSize: "18px" }}
                  />,
                ]}
              >
                <h3>{myName}</h3>
                <div style={{ marginBottom: "10px" }}>
                  <MailOutlined style={{ fontSize: "20px" }} />

                  <span style={{ margin: "10px", color: "#000000a6" }}>
                    {email}
                  </span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <PhoneOutlined style={{ fontSize: "20px" }} />
                  <span style={{ margin: "10px", color: "#000000a6" }}>
                    {phone}
                  </span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <GlobalOutlined style={{ fontSize: "20px" }} />

                  <span style={{ margin: "10px", color: "#000000a6" }}>
                    {website}
                  </span>
                </div>
              </Card>
            </Col>
          );
        })}

        {}
        {addItemState.addItemsState ? (
          <AddItemsComponent />
        ) : (
          <div className="Click_Wrapper" onClick={AddItemHandler}>
            Click Here to Add Items..!
          </div>
        )}
      </Row>
      {myModal && <EditForm editvalue={editItem} />}
    </div>
  );
};

export default DashBoard;
