import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Items = [
  {
    title: "沟通需求",
    icon: "/images/service/goutong.png",
  },
  {
    title: "合作签署",
    icon: "/images/service/hezuo.png",
  },
  {
    title: "设计规划",
    icon: "/images/service/guihua.png",
  },
  {
    title: "开发迭代",
    icon: "/images/service/kaifa.png",
  },
  {
    title: "交付验收",
    icon: "/images/service/yanshou.png",
  },
];

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    img {
      width: 50px;
      height: 50px;
    }
  }

  .title {
    margin-top: 18px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(50, 56, 84, 1);
  }

  @media screen and (max-width: 1420px) {
    .title {
      font-size: 14px;
    }

    .icon {
      width: 40px;
      height: 40px;

      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;

    .icon {
      width: 40px;
      height: 40px;
      border: 2px solid #dddddd;
      border-radius: 50%;
      img {
        width: 20px;
        height: 20px;
      }
    }

    .title {
      font-size: 14px;
      margin-top: 0px;
      padding-left: 4px;
    }
  }
`;

const Divider = styled.div`
  margin: 0 40px;
  width: 100px;
  border-top: 2px solid #dddddd;

  @media screen and (max-width: 1420px) {
    width: 80px;
  }

  @media screen and (max-width: 768px) {
    border-top: 0;

    width: 13px;
    height: 17px;

    margin: 12px 0;
    background-image: url(/images/service/jiantou.png);
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

/**
 * 服务流程
 */
export default class ServiceProcessItems extends PureComponent {
  render() {
    const items = Items.map((i, index) => (
      <Fragment key={index}>
        <Item key={index}>
          <div className="icon">
            <img src={i.icon} alt="icon" />
          </div>

          <div className="title">{i.title}</div>
        </Item>

        {index !== Items.length - 1 && <Divider key={index + "_divider"} />}
      </Fragment>
    ));

    return (
      <Fade delay={100} bottom>
        <Main>{items}</Main>
      </Fade>
    );
  }
}
