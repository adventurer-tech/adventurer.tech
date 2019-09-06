import React from "react";
import DocumentTitle from "react-document-title";
import styled from "styled-components";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import { Container, LargeContainer } from "../../components/layout";
import Title from "../../components/title";
import Button from "../../components/button";
import Card from "../../components/card";

@withRouter
export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title="Adventure - 关于我们">
        <About>
          <Banner>
            <Container>
              <div className="banner-title">我们是冒险者</div>
              <div className="banner-subtitle">
                我们是一群极有天分的软件精英，满怀激情的汇聚在一起，以引导软件创新、设计和交付的革命为己任，助力全球企业创新。
              </div>
            </Container>
          </Banner>
          <Team>
            <Container>
              <Title title="团队介绍" eng="Team" />
              <img src="/images/about-team.jpg" alt="" />
              <p>
                我们汇集满怀激情的软件精英，通过技术和客户共同应对最艰巨的挑战。同时我们寻求IT行业的革新，并致力于推动社会生产力的提升。
              </p>
              <p>
                我们擅长构建定制化系统和定制化产品，和客户一起完成极其复杂的项目和软件。提供定制化软件是我们一切工作的核心，我们帮助客户尽可能快速地将概念转化为价值，交付给最终用户。我们的业务涵盖复杂且具备创新性的软件产品以及企业级系统应用，包含从产品概念设计、经由体验设计、敏捷交付、部署直至产品生命周期演进的所有服务。
              </p>
              <Button title="加入我们" type="main" />
            </Container>
          </Team>
          <Culture>
            <Container>
              <Title
                title="企业文化"
                eng="Culture"
                engColor="#3650D6"
                nameColor="white"
              />
              <p>
                我们是一个年轻开放、崇尚自由的团队，集合了一群充满好奇心、有追求、技艺高超、梦想用科技改变世界的小伙伴，每个人都是这个行业的佼佼者，也是团队最核心的价值。我们不拘泥于任何传统的企业模式，只专注于我们的产出和价值。
              </p>
              <div className="card-container">
                <Card
                  width="30%"
                  icon="/images/icon-adventure.png"
                  iconWidth={108}
                  title="冒险精神"
                  info="人生是一场没有终点的探险，在探索未知世界的道路上或许会遇到很多危险，但也正是这些经历，带给了我们收获和财富。"
                />
                <Card
                  width="30%"
                  icon="/images/icon-hackers.png"
                  iconWidth={108}
                  title="黑客精神"
                  info="不对自己设限，面对未知的世界和强大的挑战，我们能投入无畏的勇气去面对、探索和追求。"
                />
                <Card
                  width="30%"
                  icon="/images/icon-craftsman.png"
                  iconWidth={108}
                  title="工匠精神"
                  info="对于任何工作，无论大小，都能投入极大的热诚，在每一个细节中，体会打磨和创造的乐趣。"
                />
              </div>
            </Container>
          </Culture>
          <Member>
            <LargeContainer>
              <Title title="和核心成员" eng="Members" engColor="#f2f4ff" />
              <div className="member-container">
                <Card
                  width="22%"
                  icon="/images/avatar1.png"
                  iconWidth={88}
                  title="俊总"
                  info="Chief Architect"
                />
                <Card
                  width="22%"
                  icon="/images/avatar2.png"
                  iconWidth={88}
                  title="鱼大师"
                  info="Product and Solutions 
                  Director"
                />
                <Card
                  width="22%"
                  icon="/images/avatar3.png"
                  iconWidth={88}
                  title="可爱东"
                  info="Code Master"
                />
                <Card
                  width="22%"
                  icon="/images/avatar4.png"
                  iconWidth={88}
                  title="王韬"
                  info="Product and Solutions 
                  Director"
                />
              </div>
              <div className="member-container">
                <Card
                  width="22%"
                  icon="/images/avatar5.png"
                  iconWidth={88}
                  title="龙山"
                  info="Front-end Engineer"
                />
                <Card
                  width="22%"
                  icon="/images/avatar6.png"
                  iconWidth={88}
                  title="顺莉"
                  info="Product Owner"
                />
                <Card
                  width="22%"
                  icon="/images/avatar7.png"
                  iconWidth={88}
                  title="慧嵘"
                  info="Product Owner"
                />
              </div>
            </LargeContainer>
          </Member>
          <Demand>
            <h2>更多职位正虚位以待！</h2>
            <NavLink to="/join">
              <Button title="加入我们" type="yellow" />
            </NavLink>
          </Demand>
        </About>
      </DocumentTitle>
    );
  }
}

const About = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  height: 480px;
  padding: 20px 0;
  background: #263eba;

  ${Container} {
    background: url("/images/about-bg.png") no-repeat;
    background-size: contain;
    background-position: bottom 0 right 0;
    height: 100%;
  }

  .banner-subtitle {
    font-size: 20px;
    line-height: 35px;
    color: white;
    max-width: 35%;
  }

  .banner-title {
    color: white;
    font-size: 68px;
    letter-spacing: 5px;
    padding-top: 105px;
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
      max-width: 60%;
    }

    .banner-title {
      font-size: 26px;
      letter-spacing: 0;
      padding-top: 20px;
    }
  }
`;

const Team = styled.div`
  padding: 40px 0 80px 0;

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto 50px auto;
  }

  p {
    max-width: 90%;
    margin: 0 auto 20px auto;
    text-align: center;
    font-size: 16px;
    line-height: 28px;
  }

  a {
    margin-top: 50px;
  }
`;

const Culture = styled.div`
  background: #2e49d5;
  padding-top: 20px;
  margin-bottom: 250px;

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

const Member = styled.div`
  position: relative;
  z-index: 1;

  ${LargeContainer} {
    background: white;
    padding: 50px 0;

    .member-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 80%;
      margin: 0 auto;

      > div {
        margin-right: 3%;
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ${LargeContainer} {
      padding: 30px 0;

      .member-container {
        flex-direction: column;
        width: 90%;

        > div {
          margin-right: 0;
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

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
`;
