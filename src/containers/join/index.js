import React from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";
import { withRouter } from "react-router";
import { TITLE } from "../../config";

import { Container, LargeContainer } from "../../components/layout";

@withRouter
export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title={`加入我们 - ${TITLE}`}>
        <Join>
          <Banner>
            <Container>
              <div className="banner-title">
                面朝大海，春暖花开；世界那么大，我想去看看；
              </div>
              <div className="banner-subtitle">
                自由是勇敢者的权利，只有了解世界，热爱世界，才能改变世界
              </div>
            </Container>
          </Banner>
          <List>
            <Container>
              <ul>
                <li>
                  <div className="item">
                    <img src="/images/join-icon1.png" alt="" />
                    <div className="join-title">
                      <h3>冒险者-全栈开发</h3>
                      <h4>工作性质：远程</h4>
                    </div>
                    <div className="join-desc">
                      <h4>岗位要求：</h4>
                      <p>1. 985/211 相关专业本科及以上</p>
                      <p>
                        2.
                        了解计算机相关基础知识，比如体系结构、编译原理、网络、数据库等
                      </p>
                      <p>3. 了解 Redis、MongoDB、Mysql 中的一种或多种</p>
                      <p>4. 了解 Python、Go 中的一种或多种</p>
                      <p>5. 了解 Swagger、Openapi、Blueprint 中的一种或多种</p>
                      <p>6. 了解 Restful、Docker、微服务 等相关技术</p>
                      <p>7. 熟悉 Nodejs & ES6</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="/images/join-icon2.png" alt="" />
                    <div className="join-title">
                      <h3>冒险者-前端开发</h3>
                      <h4>工作性质：远程</h4>
                    </div>
                    <div className="join-desc">
                      <h4>岗位要求：</h4>
                      <p>1. 985/211 相关专业本科及以上</p>

                      <p>
                        2.
                        了解计算机相关基础知识，比如体系结构、编译原理、网络、数据库等
                      </p>

                      <p>3. 熟悉算法</p>

                      <p>4. 熟悉 Nodejs & ES6</p>

                      <p>
                        5. 熟悉 React、React-Native、Angular、Vue
                        中的一种或多种框架
                      </p>

                      <p>
                        我们使用
                        React、Redux、Saga、Jest、Babel、Styled-Components、Antd
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="/images/join-icon3.png" alt="" />
                    <div className="join-title">
                      <h3>冒险者-设计师</h3>
                      <h4>工作性质：远程</h4>
                    </div>
                    <div className="join-desc">
                      <h4>岗位要求：</h4>
                      <p>1. 有创意和想法，了解互联网产品的设计和开发过程</p>

                      <p>2. 掌握 sketch 及 photoshop 等设计软件</p>

                      <p>3. 独立完成的历史作品</p>
                    </div>
                  </div>
                </li>
              </ul>
            </Container>
          </List>
          <Tips>
            <LargeContainer>
              <div className="tips-main">
                <h4>投递小贴士</h4>
                <ul>
                  <li>
                    简历请发送到<span>hr@36node.com</span>
                  </li>
                  <li>
                    邮件标题格式请按照
                    <span>{`{姓名}-{学校}-兼职{职位}`}</span>
                    另请务必附上简历附件或者邮件正文中包含在线简历地址。
                  </li>
                  <li>为防止简历出现其一 约定如下名词解释</li>
                </ul>
                <div className="tips-desc">
                  <p>
                    <span>了解: </span>
                    听说过，看过相关文档，并且在自己的项目或者 playgournd
                    上试用、试玩过。
                  </p>
                  <p>
                    <span>熟悉:</span>
                    已经在实际项目中使用相关技术，并且积累了一定程度的经验。
                  </p>
                  <p>
                    <span>掌握:</span>
                    多次使用相关技术并且跟进最新的进展，了解它和竞品的优缺点，了解它的技术架构和潜在风险。
                  </p>
                  <p>
                    <span>精通: </span>深入该技术的源代码，能够为该技术贡献
                    code，性能调优，能够为这个技术布道。
                  </p>
                </div>
              </div>
            </LargeContainer>
          </Tips>
        </Join>
      </DocumentTitle>
    );
  }
}

const Join = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  height: 480px;
  background: url("/images/join-banner.png") no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;

  .banner-subtitle {
    font-size: 30px;
  }

  .banner-title {
    font-size: 30px;
    padding-top: 80px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    height: 240px;

    .banner-subtitle {
      font-size: 18px;
      line-height: 28px;
    }

    .banner-title {
      font-size: 18px;
      line-height: 28px;
      padding-top: 30px;
    }
  }
`;
const List = styled.div`
  ul {
    padding: 0;

    li {
      padding: 50px 0;
      border-top: 1px solid #9ea6b4;
      list-style: none;

      &:first-child {
        border-top: none;
      }

      .item {
        width: 80%;
        margin: 0 auto;
        position: relative;

        img {
          height: 135px;
          position: absolute;
          top: 0;
          left: 0;
        }

        .join-title {
          padding-left: 200px;

          h3 {
            font-size: 28px;
            margin-bottom: 5px;
          }

          h4 {
            font-size: 18px;
            margin-bottom: 15px;
          }
        }

        .join-desc {
          padding-left: 200px;

          h4 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          p {
            font-size: 16px;
            margin-bottom: 8px;
            color: #6b6d7f;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      li {
        padding: 20px 0;

        .item {
          width: 100%;

          img {
            height: 80px;
          }

          .join-title {
            padding-left: 100px;
            padding-top: 10px;
            margin-bottom: 30px;

            h3 {
              font-size: 20px;
            }

            h4 {
              font-size: 16px;
            }
          }

          .join-desc {
            padding-left: 5px;

            h4 {
              font-size: 16px;
            }

            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

const Tips = styled.div`
  margin-bottom: 50px;

  ${LargeContainer} {
    background: white;
    box-shadow: 0px 11px 45px 0px rgba(92, 105, 127, 0.1);
    padding: 30px 0;

    .tips-main {
      width: 70%;
      margin: 0 auto;
      color: #9ea6b4;

      h4 {
        color: #323854;
        font-size: 16px;
        margin-bottom: 20px;
      }

      span {
        color: #6b6d7f;
      }

      ul {
        padding-left: 18px;

        li {
          list-style: disc;
          margin-bottom: 15px;
        }
      }

      .tips-desc {
        padding-left: 18px;

        p {
          margin-bottom: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ${LargeContainer} {
      padding: 20px 0;

      .tips-main {
        width: 80%;
      }
    }
  }
`;
