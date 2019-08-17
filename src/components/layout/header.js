import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  width: 100%;
  padding: 10px 40px;
  // border-bottom: 1px lightgrey solid;
  .main-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export default class AdventureHeader extends React.PureComponent {
  render() {
    return (
      <Main>
        <div className="main-top">
          <NavLink to="/">
            <div className="main-top-left">
              <img src="/images/logo.png" alt="" />
              <div className="main-top-left-title">AdventureTech</div>
            </div>
          </NavLink>

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
      </Main>
    );
  }
}

// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import Menu, { SubMenu, Item as MenuItem } from "rc-menu";
// import "rc-menu/assets/index.css";

// class HeaderMenu extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <Menu mode={this.props.mode} openAnimation={this.props.openAnimation}>
//           <MenuItem key="1">
//             <NavLink to="/">首页</NavLink>
//           </MenuItem>
//           <SubMenu key="sub1" title="产品与服务">
//             <SubMenu title="导航">
//               <MenuItem>
//                 <NavLink to="/product/nav_survey">导航概览</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/nav_mapdata">数字地图</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/nav_adasmap">ADAS地图2.0</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/nav_transinformation">
//                   动态交通信息
//                 </NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/nav_engine">导航软件</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/nav_compile">地图编译</NavLink>
//               </MenuItem>
//             </SubMenu>
//             <SubMenu title="智能网联">
//               <MenuItem>
//                 <NavLink to="/product/intell_drivecar">乘用车</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/intell_businesscar">商用车</NavLink>
//               </MenuItem>
//             </SubMenu>
//             <SubMenu title="自动驾驶">
//               <MenuItem>
//                 <NavLink to="/product/autodri_survey">自动驾驶概览</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/autodri_map">自动驾驶高精度地图</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/autodri_location">高精度定位</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/autodri_horizon">智能地平线</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/product/autodri_sense">智能感知</NavLink>
//               </MenuItem>
//             </SubMenu>
//             <MenuItem>
//               <NavLink to="/product/chip">芯片</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/product/newenergy">新能源出行</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <a href="http://www.minedata.cn/">MineData位置大数据</a>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/product/voice">语音</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/product/gis">GIS行业应用</NavLink>
//             </MenuItem>
//           </SubMenu>
//           <MenuItem key="3">
//             <NavLink to="/news">新闻动态</NavLink>
//           </MenuItem>
//           <SubMenu key="sub3" title="关于我们">
//             <SubMenu title="集团信息">
//               <MenuItem>
//                 <NavLink to="/about/group_about">关于四维图新</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/about/group_member">成员企业</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/about/group_management">管理层</NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink to="/about/group_dire">董事会</NavLink>
//               </MenuItem>
//             </SubMenu>
//             <MenuItem>
//               <a href="http://irm.cninfo.com.cn/ircs/company/companyDetail?stockcode=002405&orgId=9900012447">
//                 投资者平台
//               </a>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/about/exhibition">活动展会</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/about/response">企业社会责任</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/about/connect">联系我们</NavLink>
//             </MenuItem>
//           </SubMenu>
//           <MenuItem key="4">
//             <NavLink to="/recruit">招贤纳士</NavLink>
//           </MenuItem>

//           <MenuItem key="5">
//             <div className="App">
//               <img src="/images/flag.png" alt="" className="flag" />
//               <span>CN</span>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
//     );
//   }
// }

// class NavinfoHeader extends React.PureComponent {
//   state = {
//     showDrawer: false,
//     smallScreen: window.innerWidth <= 992,
//   };

//   componentDidMount = () => {
//     window.addEventListener("resize", this.updateDimensions);
//   };
//   componentWillUnmount = () => {
//     window.removeEventListener("resize", this.updateDimensions);
//   };

//   updateDimensions = () => {
//     this.setState({
//       smallScreen: window.innerWidth <= 992,
//     });
//   };

//   showDrawer = () => {
//     this.setState({
//       showDrawer: true,
//     });
//   };

//   closeDrawer = () => {
//     this.setState({
//       showDrawer: false,
//     });
//   };

//   render() {
//     const { showDrawer, smallScreen } = this.state;

//     return (
//       <Main>
//         <div className="navinfo-header-logo">
//           <img src="/images/logo.png" alt="" />
//         </div>
//         {smallScreen && (
//           <img
//             src="/images/menu.png"
//             alt=""
//             onClick={() => {
//               this.showDrawer();
//             }}
//           />
//         )}
//         {!smallScreen && (
//           <HeaderMenu
//             mode="horizontal"
//             openAnimation="slide-up"
//             triggerSubMenuAction="hover"
//           />
//         )}
//         {smallScreen && (
//           <div className={showDrawer ? "drawer active" : "drawer"}>
//             <HeaderMenu mode="inline" openAnimation="slide-up" />
//           </div>
//         )}
//         {showDrawer && (
//           <div
//             className="drawer-bg"
//             onClick={() => {
//               this.closeDrawer();
//             }}
//           />
//         )}
//       </Main>
//     );
//   }
// }

// const Main = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 0 68px;
//   height: 68px;
//   line-height: 68px;

//   .navinfo-header-logo {
//     img {
//       height: 40px;
//       display: block;
//     }
//   }

//   .rc-menu {
//     border: none;
//     background: none;
//   }

//   .rc-menu-horizontal > .rc-menu-item,
//   .rc-menu-horizontal > .rc-menu-submenu > .rc-menu-submenu-title {
//     padding: 26px 20px;
//     line-height: 1;
//   }

//   .rc-menu-horizontal .rc-menu-submenu-arrow {
//     display: inline-block;
//     font: normal normal normal 14px/1 FontAwesome;
//     font-size: inherit;
//     vertical-align: baseline;
//     text-align: center;
//     text-transform: none;
//     text-rendering: auto;
//     position: absolute;
//     top: 20px;
//     right: 15px;
//     line-height: 1.5em;
//   }

//   .rc-menu-submenu-horizontal .rc-menu-submenu-title {
//     padding-right: 30px !important;
//   }

//   .rc-menu-horizontal .rc-menu-submenu-arrow::before {
//     content: "\f0dd";
//   }

//   .drawer {
//     width: 200px;
//     height: 100%;
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index: 100;
//     background: white;
//     transition: all 0.25s ease-out;
//     transform: translateX(200px);

//     &.active {
//       transform: translateX(0);
//     }
//   }

//   .drawer-bg {
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 99;
//     background: rgba(0, 0, 0, 0.6);
//   }

//   .flag {
//     height: 16px;
//     margin-right: 5px;
//     position: relative;
//     top: 3px;
//   }

//   @media screen and (max-width: 992px) {
//     padding: 0 20px;

//     .rc-menu-item,
//     .rc-menu-submenu-title {
//       line-height: 1;
//     }

//     .rc-menu-sub.rc-menu-inline > .rc-menu-item,
//     .rc-menu-sub.rc-menu-inline > .rc-menu-submenu > .rc-menu-submenu-title {
//       padding-top: 12px;
//       padding-bottom: 12px;
//     }

//     .rc-menu-inline .rc-menu-submenu-arrow {
//       top: 8px;
//     }
//   }
// `;

// export default NavinfoHeader;
