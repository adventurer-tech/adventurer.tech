import React, { Fragment } from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

import { Container } from "../../components/layout";
import Title from "../../components/title";
import { TITLE } from "../../config";
import Card from "../../components/card";
import CooperationCard from "../../components/cooperation-card";
import ServiceProcessItems from "../../components/service-process-items";
import Button from "../../components/button";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 769 });
  return isNotMobile ? children : null;
};

export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title={`服务 - ${TITLE}`}>
        <Service>
          <Banner>
            <Container>
              <div className="title">我们的服务精益求精</div>
              <div className="sub-title">
                我们时刻关注并实践全球领先的软件开发理念，
                并和我们的客户一起挑战来自未来的业务变化。
              </div>
            </Container>
          </Banner>

          <Intro>
            <Container>
              作为一家软件开发服务公司，AdventurerTech帮助您解决技术方面的难题。通过将策略与执行联系起来，我们帮助客户加强核心能力，灵活扩展，打造无缝的信息化体验。
              凭借在软件开发领域的丰富经验，我们为客户创造专业的软件。
            </Container>
          </Intro>
          <MainDirection>
            <Container>
              <Title title="主要方向" eng="Main Direction" />

              <div className="card-container">
                <DirectionCard
                  icon="/images/service/car.png"
                  title="车联网"
                  info="支持海量设备数据并发接入，对车辆进行毫秒级监控，消除安全隐患、保障车辆健康运营。通过专业的多维度数据分析，发现潜在问题、提升运营效率。"
                />

                <DirectionCard
                  icon="/images/service/wulianwang.png"
                  title="物联网"
                  info="支持工业物联网主流协议及私有协议定制开发，全终端覆盖，实时监控设备状态和故障预报警，海量数据管理和分析，个性化自定义仪表盘、数据透视表和多维度数据智能分析。"
                />

                <DirectionCard
                  icon="/images/service/content.png"
                  title="内容分发系统"
                  info="多平台一站式内容创作和知识管理解决方案，无论是管理外部的自媒体资源还是搭建内部的KM系统，都能满足企业运营需。"
                />
              </div>

              <Default>
                <div className="divider" />
              </Default>

              <div className="card-container">
                <DirectionCard
                  icon="/images/service/huodong.png"
                  title="活动解决方案"
                  info="企业级活动管理系统，按需定制、支持多语言多表单、智能签到，满足企业市场活动需求。"
                />

                <DirectionCard
                  icon="/images/service/app.png"
                  title="APP开发"
                  info="我们有丰富的移动应用程序开发经验，为客户提供云端系统、应用软件、硬件方案的一整套解决方案，具备专业的一体化交付能力。"
                />

                <DirectionCard
                  icon="/images/service/weixin.png"
                  title="微信开发"
                  info="基于微信生态提供微信公众号、微信小程序、企业微信等一系列基于微信的应用开发与咨询服务。"
                />
              </div>
            </Container>
          </MainDirection>

          <OurAdvantages>
            <Container>
              <Title
                title="我们的优势"
                eng="Our advantages"
                nameColor="#FFFFFF"
                engColor="rgba(235, 239, 255, 0.06)"
              />

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
          </OurAdvantages>

          <CooperationModel>
            <Container>
              <Title
                title="合作模式"
                eng="Cooperation model"
                nameColor="#323854"
                engColor="#EBEFFF"
              />

              <div className="card-container">
                <CooperationCard
                  imgTitle="项目合作"
                  width="48%"
                  img="/images/service/project.png"
                  title="适合有具体完整项目需求的客户"
                  info="如果您的企业需要开发一个相对比较独立的软件系统，对需求的边界比较明确，我们可以选择这种方式开展合作。"
                />

                <CooperationCard
                  imgTitle="年度合作"
                  width="48%"
                  img="/images/service/years.png"
                  title="适合有长期且不定期技术需求的客户。"
                  info="如果您的IT部门不能处理所有的开发工作、或者您的公司没有配备全职的开发人员，您正在寻找可以紧密合作、经验丰富的技术团队长期合作，请联系我们。"
                />
              </div>
            </Container>
          </CooperationModel>

          <ServiceProcess>
            <Container>
              <Title
                title="服务流程"
                eng="Service Process"
                nameColor="#323854"
                engColor="#EBEFFF"
              />

              <ServiceProcessItems />
            </Container>
          </ServiceProcess>

          <Demand />

          <Contact>
            <NavLink to="/contact">
              <Button title="联系我们" type="yellow" />
            </NavLink>
          </Contact>
        </Service>
      </DocumentTitle>
    );
  }
}

const Service = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Banner = styled.div`
  background: url("/images/service/banner.png") no-repeat;
  background-position: center;
  background-size: cover;
  height: 480px;

  ${Container} {
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    display: flex;
  }

  .title {
    width: 648px;
    height: 98px;
    font-size: 64px;
    font-weight: normal;
    color: rgba(255, 255, 255, 1);
    line-height: 98px;
  }

  .sub-title {
    padding-top: 16px;
    width: 700px;
    font-size: 32px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 59px;
  }

  @media screen and (max-width: 768px) {
    height: 240px;
    background-position: 50% 50%;
    .title {
      width: 180px;
      height: 28px;
      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 28px;
    }

    .sub-title {
      padding-top: 8px;
      width: 180px;
      height: 57px;
      font-size: 9px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 19px;
    }
  }
`;

const Intro = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  color: rgba(50, 56, 84, 1);
  line-height: 48px;
  padding: 110px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    color: rgba(107, 109, 127, 1);
    line-height: 24px;
    padding: 33px 0;
    text-align: left;
  }
`;

const MainDirection = styled.div`
  margin-bottom: 80px;
  ${Container} {
    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .divider {
      width: 100%;
      margin: 30px 0px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    ${Container} {
      .card-container {
        flex-direction: column;

        > div {
          width: 100%;
          margin-bottom: 30px;
        }
      }
    }
  }
`;

const DirectionCard = ({ icon, title, info }) => {
  return (
    <Fragment>
      <Default>
        <Card
          width="30%"
          icon={icon}
          iconWidth={44}
          title={title}
          info={info}
          infoAlign="left"
          layout="horizontal"
        />
      </Default>

      <Mobile>
        <Card
          width="30%"
          icon={icon}
          title={title}
          info={info}
          infoAlign="left"
          iconWidth={72}
        />
      </Mobile>
    </Fragment>
  );
};

const OurAdvantages = styled.div`
  margin-bottom: 80px;
  background-color: #2e49d5;
  padding: 20px 0 60px 0;

  ${Container} {
    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0;

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

/**
 * 合作模式
 */
const CooperationModel = styled.div`
  margin-bottom: 80px;
  padding: 20px 0 60px 0;

  ${Container} {
    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0;

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

const ServiceProcess = styled.div`
  z-index: 1;
  padding: 20px 0 140px 0;
  position: relative;

  ${Container} {
    width: 80%;
    background: #ffffff;
    padding-top: 40px;

    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 768px) {
    ${Container} {
      width: 100%;
    }
  }
`;

const Contact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: absolute;
  bottom: 48px;
`;

const Demand = styled.div`
  width: 100%;
  height: 400px;
  background: #2e49d5;
  text-align: center;
  position: absolute;
  z-index: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
`;
