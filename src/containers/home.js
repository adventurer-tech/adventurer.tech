import React from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";
import { withRouter } from "react-router";

import { Container, LargeContainer } from "../components/layout";
import Title from "../components/title";
import ShapeTitle from "../components/shape-title";
import Card from "../components/card";
import CaseCard from "../components/case-card";

@withRouter
export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title="Adventure - 首页">
        <Home>
          <Banner>
            <Container>
              <div className="banner-subtitle">AdventureTech</div>
              <div className="banner-title">
                <span>冒险者科技</span>以技术驱动企业创新
              </div>
            </Container>
          </Banner>
          <Info>
            <Container>
              <Title
                title="我们是冒险者"
                eng="We are Adventurers"
                align="left"
                order="1"
                size="small"
                engColor="#F6F7FF"
              />
              <p>
                我们是一群极有天分的软件精英，满怀激情地汇聚在一起，以引导软件创新、设计和交付的革命为己任，助力全球企业创新。
              </p>
            </Container>
          </Info>
          <WhatCanWeDo>
            <Container>
              <Title title="我们所擅长的" eng="What can we do?" />
              <p>
                我们为客户定制化开发企业级的软件系统。通过我们在车辆网、物联网和BI大数据领域积累的丰富实践经验，不断为企业
                <br />
                创造新的价值，帮助企业在新的竞争环境下如虎添翼、获得成功。
              </p>
              <ShapeTitle title="车辆和物联网行业解决方案" />
              <div className="card-container">
                <Card
                  width="30%"
                  icon="/images/icon1.png"
                  iconWidth={72}
                  title="高性能高并发"
                  info="支持千万以上级设备接入，支持 20 万以上的设备并发数据。"
                />
                <Card
                  width="30%"
                  icon="/images/icon2.png"
                  iconWidth={72}
                  title="实时监控"
                  info="实时数据毫秒级响应，让企业对业务状况了如指掌。"
                />
                <Card
                  width="30%"
                  icon="/images/icon3.png"
                  iconWidth={72}
                  title="海量数据分析能力"
                  info="TB级数据秒级响应，专业多维度下钻数据分析。"
                />
              </div>
              <ShapeTitle title="更多解决方案和服务" />
              <div className="service-container">
                <div>
                  <h3>内容分发系统</h3>
                  <p>
                    多平台一站式内容创作和知识管理解决方案，助力企业高效运营。
                  </p>
                </div>
                <div>
                  <h3>活动解决方案平台</h3>
                  <p>
                    企业级活动管理系统，按需定制、支持多语言多表单、智能签到，满足企业市场活动需求。
                  </p>
                </div>
                <div>
                  <h3>APP 和小程序开发</h3>
                  <p>
                    定制化开发企业 APP
                    和小程序，助力企业在移动信息化领域如虎添翼。
                  </p>
                </div>
              </div>
            </Container>
          </WhatCanWeDo>
          <HowDidWeDo>
            <Container>
              <Title
                title="我们是怎么做到的"
                eng="How did we do it?"
                engColor="#3650D6"
                nameColor="white"
              />
              <p>
                我们时刻关注并实践全球领先的软件开发理念，并和我们的客户一起挑战来自未来的业务变化。通过这些最佳实践，我们得以不断快速响应、探索、挖掘、实现客户需求，帮助企业在面对竞争和机遇时更加游刃有余。
              </p>
              <div className="card-container">
                <Card
                  width="30%"
                  icon="/images/icon4.png"
                  hoverIcon="/images/icon4-hover.png"
                  iconWidth={108}
                  title="敏捷开发"
                  info="小步快跑、快速迭代，适应企业瞬息万变的业务需求。"
                />
                <Card
                  width="30%"
                  icon="/images/icon5.png"
                  hoverIcon="/images/icon5-hover.png"
                  iconWidth={108}
                  title="微服务架构"
                  info="通过组件化、弹性的架构设计，帮助企业成功应对错综复杂的竞争挑战。"
                />
                <Card
                  width="30%"
                  icon="/images/icon6.png"
                  iconWidth={108}
                  hoverIcon="/images/icon6-hover.png"
                  title="持续交付"
                  info="自动化部署、弹性设计的云服务器环境，让您的应用时刻保持最新活力。"
                />
              </div>
            </Container>
          </HowDidWeDo>
          <Case>
            <Container>
              <Title title="我们的案例" eng="Cases" />
              <div className="case-container">
                <CaseCard
                  width="48%"
                  img="/images/case1.jpg"
                  title="城市新能源公交车监控系统"
                  info="关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton 教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。"
                />
                <CaseCard
                  width="48%"
                  img="/images/case2.jpg"
                  title="自动化生产线监测系统"
                  info="关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton 教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。"
                />
              </div>
              <div className="case-container">
                <CaseCard
                  width="48%"
                  img="/images/case3.jpg"
                  title="智能楼宇能源监控系统"
                  info="关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton 教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。"
                />
                <CaseCard
                  width="48%"
                  img="/images/case4.jpg"
                  title="石油管道监控系统"
                  info="关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton 教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。"
                />
              </div>
            </Container>
          </Case>
          <Partner>
            <LargeContainer>
              <Title title="客户和合作伙伴" eng="Partners" engColor="#f2f4ff" />
              <div className="partner-container">
                <div>
                  <img
                    src="/images/partner1.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner1-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/partner2.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner2-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/partner3.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner3-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/partner4.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner4-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/partner5.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner5-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/partner6.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner6-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/partner7.png"
                    className="partner-icon"
                    alt=""
                  />
                  <img
                    src="/images/partner7-hover.png"
                    className="partner-hover"
                    alt=""
                  />
                </div>
              </div>
            </LargeContainer>
          </Partner>
          <Demand>
            <h2>告诉我们您的需求</h2>
            <a className="contact-btn" href="/">
              联系我们
            </a>
          </Demand>
        </Home>
      </DocumentTitle>
    );
  }
}

const Home = styled.div`
  width: 100%;
  background: #f8faff;
`;

const Banner = styled.div`
  height: 480px;
  background: url("/images/banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;

  .banner-subtitle {
    padding-top: 140px;
    font-size: 30px;
    color: #80a3b5;
    letter-spacing: 6px;
  }

  .banner-title {
    color: white;
    font-size: 34px;
    letter-spacing: 5px;

    span {
      font-size: 52px;
      margin-right: 20px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 240px;

    .banner-subtitle {
      padding-top: 60px;
      font-size: 20px;
      letter-spacing: 2px;
    }

    .banner-title {
      font-size: 18px;
      letter-spacing: 0;

      span {
        font-size: 30px;
        margin-right: 10px;
        letter-spacing: 0;
      }
    }
  }
`;

const Info = styled.div`
  margin-top: -40px;
  padding-bottom: 80px;

  ${Container} {
    padding: 50px 80px;
    box-shadow: 0px 11px 45px 0px rgba(92, 105, 127, 0.1);
    background: url("/images/info-dot.png") no-repeat;
    background-size: 180px;
    background-position: bottom 0 right 30px;
    background-color: white;
  }

  p {
    font-size: 16px;
    line-height: 36px;
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;

    ${Container} {
      padding: 20px 30px;
      background-size: 80px;
    }
  }
`;

const WhatCanWeDo = styled.div`
  margin-bottom: 80px;

  ${Container} {
    > p {
      color: #6b6d7f;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
    }

    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .service-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      > div {
        width: 30%;
        text-align: center;

        h3 {
          font-size: 18px;
          font-weight: 500;
          color: #323854;
          margin-bottom: 20px;
        }

        p {
          color: #9ea6b4;
          line-height: 24px;
          max-width: 70%;
          margin: 0 auto;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;

    ${Container} {
      .card-container,
      .service-container {
        flex-direction: column;

        > div {
          width: 100%;
          margin-bottom: 30px;
        }
      }

      .service-container {
        > div {
          text-align: left;

          h3 {
            border-left: 4px solid #2e49d5;
            padding-left: 10px;
            max-width: 80%;
            margin: 0 auto 20px auto;
          }

          p {
            max-width: 80%;
          }
        }
      }
    }
  }
`;

const HowDidWeDo = styled.div`
  background: #2e49d5;
  padding-top: 20px;
  margin-bottom: 220px;

  ${Container} {
    > p {
      color: white;
      line-height: 32px;
      font-size: 16px;
      text-align: center;
      max-width: 80%;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      top: 170px;
      margin-top: -160px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;

    ${Container} {
      .card-container {
        flex-direction: column;
        top: 0;
        margin-top: 0;

        > div {
          margin-bottom: 30px;
        }
      }
    }
  }
`;

const Case = styled.div`
  .case-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    .case-container {
      flex-direction: column;
    }
  }
`;

const Partner = styled.div`
  position: relative;
  z-index: 1;

  ${LargeContainer} {
    background: white;
    padding: 50px 0;

    .partner-container {
      width: 70%;
      margin: 0 auto;

      > div {
        display: inline-block;
        vertical-align: top;
        width: 25%;

        img {
          margin: 0 auto;
          width: 250px;
          max-width: 100%;
        }

        .partner-icon {
          display: block;
        }

        .partner-hover {
          display: none;
        }

        &:hover {
          .partner-icon {
            display: none;
          }

          .partner-hover {
            display: block;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ${LargeContainer} {
      padding: 30px 0;

      .partner-container {
        width: 100%;

        > div {
          width: 50%;

          .partner-icon {
            display: none;
          }

          .partner-hover {
            display: block;
          }
        }
      }
    }
  }
`;

const Demand = styled.div`
  background: #2e49d5;
  text-align: center;
  position: relative;
  z-index: 0;
  padding-top: 200px;
  padding-bottom: 80px;
  top: -140px;
  margin-bottom: -150px;

  h2 {
    font-size: 34px;
    color: white;
    margin-bottom: 25px;
  }

  .contact-btn {
    width: 150px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    background: rgba(255, 190, 53, 1);
    color: white;
    display: block;
    margin: 0 auto;

    &:hover {
      background: rgba(255, 190, 53, 0.9);
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
`;
