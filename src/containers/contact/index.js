import React from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Form, Input, message } from "antd";

import { Container } from "../../components/layout";
import Title from "../../components/title";
import Button from "../../components/button";
import { TITLE } from "../../config";

const { TextArea } = Input;

@withRouter
@Form.create()
export default class extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const data = {
          msgtype: "markdown",
          markdown: {
            content: `官网用户联系我们通知\n 姓名:<font color="comment">${
              values.name
            }</font> \n\n 邮箱:<font color="comment">${
              values.email
            }</font> \n\n 电话:<font color="comment">${
              values.phone
            }</font> \n\n 需求:<font color="comment">${values.desc}</font>`,
          },
        };
        fetch(
          "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=4e1d411d-0dda-4172-981f-054593654605",
          {
            body: JSON.stringify(data),
            method: "POST",
          }
        );
        message.success("提交成功，我们的工作人员稍后会联系您");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <DocumentTitle title={`联系我们 - ${TITLE}`}>
        <Contact>
          <Banner>
            <Container>
              <div className="banner-title">我们是冒险者</div>
              <div className="banner-subtitle">
                我们是一群极有天分的软件精英，满怀激情的汇聚在一起，以引导软件创新、设计和交付的革命为己任，助力全球企业创新。
              </div>
            </Container>
          </Banner>
          <ContactForm>
            <Container>
              <div className="form-left">
                <Title
                  title="联系我们"
                  eng="Contact"
                  engColor="#f2f4ff"
                  align="left"
                />
                <p>希望寻求我们的帮助？</p>
                <Form layout="vertical">
                  <Form.Item label="您的姓名">
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message: "请输入姓名",
                        },
                      ],
                    })(<Input placeholder="请输入您的姓名" />)}
                  </Form.Item>
                  <Form.Item label="您的邮箱">
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          required: true,
                          message: "请输入邮箱",
                        },
                      ],
                    })(<Input placeholder="请输入您的邮箱" />)}
                  </Form.Item>
                  <Form.Item label="您的电话">
                    {getFieldDecorator("phone", {
                      rules: [
                        {
                          required: true,
                          message: "请输入电话",
                        },
                      ],
                    })(<Input placeholder="请输入您的电话" />)}
                  </Form.Item>
                  <Form.Item label="您的需求">
                    {getFieldDecorator("desc")(
                      <TextArea rows={4} placeholder="请输入您的需求" />
                    )}
                  </Form.Item>
                  <Button
                    type="main"
                    title="提交需求"
                    onClick={this.handleSubmit}
                  />
                </Form>
              </div>
              <div className="form-right">
                <h4>您也可以通过以下方式联系我们</h4>
                <p>
                  <img src="/images/icon-tell.png" alt="" />
                  010-51697878
                </p>
                <p>
                  <img src="/images/icon-email.png" alt="" />
                  wangjunhua@36node.com
                </p>
              </div>
            </Container>
          </ContactForm>
        </Contact>
      </DocumentTitle>
    );
  }
}

const Contact = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  height: 480px;
  background: url("/images/contact-banner.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;

  .banner-subtitle {
    font-size: 20px;
    line-height: 35px;
  }

  .banner-title {
    font-size: 68px;
    letter-spacing: 5px;
    padding-top: 110px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    height: 240px;

    ${Container} {
      background-size: 180px;
      background-position: bottom 30px right -10%;
    }

    .banner-subtitle {
      font-size: 14px;
      line-height: 24px;
    }

    .banner-title {
      font-size: 26px;
      letter-spacing: 0;
      padding-top: 20px;
    }
  }
`;

const ContactForm = styled.div`
  margin-top: -50px;
  margin-bottom: 80px;

  ${Container} {
    display: flex;
    flex-direction: row;

    .form-left {
      width: 70%;
      background: white;
      padding: 50px;

      p {
        margin-top: -20px;
      }

      a {
        margin: 0;
      }
    }

    .form-right {
      width: 30%;
      background: #2e49d5;
      padding: 50px 0 50px 50px;
      color: white;
      font-size: 16px;

      h4 {
        color: white;
        margin-bottom: 30px;
        margin-top: 90px;
      }

      img {
        width: 35px;
        margin-right: 5px;
        margin-left: -5px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ${Container} {
      flex-direction: column;

      .form-left {
        width: 100%;
        padding: 20px;

        p {
          margin-top: -20px;
        }

        a {
          margin-bottom: 20px;
        }

        .ant-form-item-label {
          display: none;
        }
      }

      .form-right {
        width: 100%;
        padding: 20px 0 20px 20px;
        font-size: 14px;

        h4 {
          margin-bottom: 20px;
          margin-top: 20px;
        }
      }
    }
  }
`;
