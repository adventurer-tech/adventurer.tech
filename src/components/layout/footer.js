import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  width: 100%;
  padding: 20px 40px 10px;
  background: lightGrey;
  .main-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    .main-top-left {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    }
  }
  .main-divider {
    border-bottom: 1px solid grey;
  }
  .main-bottom {
    margin-top: 10px;
    span {
      margin-right: 5px;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
    padding: 20px 20px 10px;
  }
`;

const WrapMenu = styled(Menu)`
  &.ant-menu-horizontal {
    background: transparent;
    border-bottom: none;
  }
`;

export default class AdventureFooter extends React.PureComponent {
  render() {
    return (
      <Main>
        <div className="main-top">
          <div className="main-top-left">
            <img src="/images/logo.png" alt="" />
            <div className="main-top-left-title">AdventureTech</div>
          </div>
          <div className="main-top-right">
            <WrapMenu mode="horizontal">
              <WrapMenu.Item>
                <NavLink to="/service">服务</NavLink>
              </WrapMenu.Item>
              <WrapMenu.Item>
                <NavLink to="/cases">案例</NavLink>
              </WrapMenu.Item>
              <WrapMenu.Item>
                <NavLink to="/opinion">观点</NavLink>
              </WrapMenu.Item>
              <WrapMenu.Item>
                <NavLink to="/about">关于</NavLink>
              </WrapMenu.Item>
              <WrapMenu.Item>
                <NavLink to="/join">加入</NavLink>
              </WrapMenu.Item>
            </WrapMenu>
          </div>
        </div>
        <div className="main-divider" />
        <div className="main-bottom">
          <span>© 2018-2019 AdventurerTech, Inc All rights reserved</span>
          <span>冒险者科技（北京）有限公司版权所有</span>
          <span>京ICP备</span>
          <span> 14026729-1</span>
        </div>
      </Main>
    );
  }
}
