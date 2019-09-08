import React from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";

import { Container } from "../../components/layout";
import CaseItem from "../../components/case-item";

import { TITLE } from "../../config";

@withRouter
export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title={`案例 - ${TITLE}`}>
        <Case>
          <Banner>
            <Container>
              <div className="banner-title">我们的客户远见卓识</div>
              <div className="banner-subtitle">
                行业内领先的企业，他们希望借助技术的力量，以不断突破组织自身的潜力。我们帮助他们构想、设计和实现。
              </div>
            </Container>
          </Banner>
          <List>
            <Container>
              <CaseItem img="/images/case1.jpg" align="left">
                <Fade bottom delay={100}>
                  <h3>城市新能源公交车监控系统</h3>
                  <p>
                    关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton
                    教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。
                  </p>
                </Fade>
              </CaseItem>
              <CaseItem img="/images/case2.jpg" align="right">
                <Fade bottom delay={100}>
                  <h3>自动化生产线监控系统</h3>
                  <p>
                    关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton
                    教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。
                  </p>
                </Fade>
              </CaseItem>
              <CaseItem img="/images/case3.jpg" align="left">
                <Fade bottom delay={100}>
                  <h3>智能楼宇能源监控系统</h3>
                  <p>
                    关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton
                    教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。
                  </p>
                </Fade>
              </CaseItem>
              <CaseItem img="/images/case4.jpg" align="right">
                <Fade bottom delay={100}>
                  <h3>石油管道监控系统</h3>
                  <p>
                    关于物联网的概念，最早是在 1999 年由麻省理工的 Ashton
                    教授提出的。在十一届全国人大三次会议政府工作报告中，物联网被正式列为国家五大新兴战略性产业之一。虽然物联网的概念很早就被提出，但如今仍是一个新兴行业，很多人对它的了解还是处于一个模糊的状态。
                  </p>
                </Fade>
              </CaseItem>
            </Container>
          </List>
        </Case>
      </DocumentTitle>
    );
  }
}

const Case = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  height: 240px;
  background: #2e49d5;

  ${Container} {
    background: url("/images/case-banner.png") no-repeat;
    background-size: contain;
    background-position: bottom 0 right 0;
    height: 100%;
  }

  .banner-subtitle {
    font-size: 16px;
    line-height: 35px;
    color: white;
    max-width: 60%;
  }

  .banner-title {
    color: white;
    font-size: 32px;
    letter-spacing: 2px;
    padding-top: 50px;
    margin-bottom: 20px;
    font-weight: 500;
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
      max-width: 60%;
    }

    .banner-title {
      font-size: 26px;
      letter-spacing: 0;
      padding-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const List = styled.div`
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
`;
