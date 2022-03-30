import React from "react";
import HomeLayout from "../components/HomeLayout";
import { Form, Input, Button } from "antd";
import { LinkedinOutlined, FacebookOutlined , WhatsAppOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <HomeLayout>
      <div className="container">
        <div className="row jutstify-content-around row1">
          <div className="col-9 col-sm-7 col-md-7 mt-5">
            <h1 style={{ color: "white" }}>CONTACT</h1>
            <h3 style={{ color: "white" }}>You Got a problem to solve?</h3>
            <p style={{ color: "white" }}>
              Get your space quit ready and tell me your idea to develop your
              dream application
            </p><br /><br />
            <p className="text-white px-5 text-decoration-underline">Social Media</p>
            <a href="https://www.linkedin.com/in/uwera-violette-b42567233/" target="blank" style={{fontSize:"2em", color:"white"}} > <LinkedinOutlined className="px-5"/></a>
           <a href=" https://www.facebook.com/profile.php?id=100008491325931" target="blank" style={{fontSize:"2em", color:"white"}}><FacebookOutlined /></a>
          </div>
          <div className="col-9 col-sm-7 col-md-5  mt-5">
            <Form
              name="normal_login"
              className="contact-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="Type you names"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    typemessage: "Please input your email",
                  },
                ]}
              >
                <Input type="email" placeholder="email" />
              </Form.Item>
              <Form.Item
                name="Type sms"
                rules={[
                  { required: true, message: "Please input your A message!" },
                ]}
              >
                <Input.TextArea placeholder="send me your SMS....." />
              </Form.Item>

              <Form.Item>
                <Button style={{backgroundColor:"black", marginLeft:"50px", borderRadius:"10px", border:"2px solid white"}}
                  type="primary"
                  htmlType="submit"
                 
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
       
      </div>
    
    


    </HomeLayout>
  );
};

export default Contact;
