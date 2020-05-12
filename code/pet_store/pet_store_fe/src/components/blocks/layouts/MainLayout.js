import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Button, message } from 'antd';
import { logout } from "../../../actions/auth";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const PandaSvg = () => (
  <svg viewBox="0 0 464.763 464.763" fill="currentColor" className="user-avatar">
    <path d="M347.176,246.96c-2.788-2.788-5.673-5.464-8.609-8.007c0.015-0.51,0.03-1.02,0.03-1.533v-13.454  c21.822-4.218,38.356-23.455,38.356-46.491c0-10.734-4.422-20.452-11.535-27.439c0.634-5.323,0.959-10.697,0.959-16.036  c0-73.888-60.112-134-134-134s-134,60.112-134,134c0,5.342,0.325,10.719,0.96,16.044c-7.108,6.987-11.527,16.701-11.527,27.432  c0,23.036,16.535,42.273,38.357,46.49v13.453c0,0.516,0.015,1.03,0.031,1.543c-35.749,30.899-56.156,75.376-56.156,122.781v94.02  c0,4.971,4.029,9,9,9h306.68c4.971,0,9-4.029,9-9v-94.02C394.722,318.384,377.836,277.619,347.176,246.96z M298.436,268.744  l-45.969,16.25c-12.951,4.578-27.22,4.578-40.171,0l-45.974-16.251c-13.252-4.679-22.156-17.268-22.156-31.324v-87.159  l14.256-26.508c48.542,14.021,99.372,14.021,147.918,0l14.256,26.509v87.158C320.597,251.476,311.692,264.064,298.436,268.744z   M283.337,293.174c-8.513,19.915-28.292,33.599-50.955,33.599c-22.659,0-42.433-13.682-50.945-33.596l24.861,8.788  c8.41,2.972,17.247,4.458,26.084,4.458s17.674-1.486,26.085-4.459L283.337,293.174z M338.597,205.417v-48.421  c11.236,0.071,20.356,9.227,20.356,20.48C358.953,190.525,350.394,201.607,338.597,205.417z M116.377,134  c0-63.962,52.037-116,116-116s116,52.037,116,116c0,2.075-0.077,4.156-0.188,6.236c-3.107-0.812-6.365-1.247-9.722-1.247h-3.494  l-16.27-30.252c-2.054-3.816-6.534-5.627-10.661-4.312c-49.499,15.784-101.825,15.784-151.32,0  c-4.131-1.318-8.608,0.496-10.661,4.312L129.79,138.99h-3.494c-3.361,0-6.621,0.436-9.731,1.249  C116.453,138.157,116.377,136.076,116.377,134z M105.809,177.475c0-11.252,9.121-20.409,20.357-20.479v48.422  C114.369,201.607,105.809,190.525,105.809,177.475z M376.722,446.763H88.042v-85.02c0-38.946,15.503-75.664,42.937-102.697  c5.701,12.205,16.116,21.997,29.348,26.669l0.086,0.031c6.738,34.022,36.718,59.028,71.968,59.028  c35.257,0,65.239-25.007,71.978-59.031l0.073-0.026c13.236-4.673,23.653-14.466,29.354-26.674c0.219,0.217,0.443,0.427,0.661,0.645  c27.261,27.26,42.274,63.504,42.274,102.056V446.763z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
</g>
  </svg>
);
const PandaIcon = props => <Icon component={PandaSvg} {...props} />;

export class MainLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            href: window.location.hash
        }
    }

    componentDidMount(){
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleButtonClick(e) {
    }

    handleMenuClick(e) {
        if(e.key === 'logout'){
            this.props.logout();
        }
        else if(e.key === 'pass-reset'){
            this.props.history.push('/reset-pass');
        }
    }

    handleLeftMenuClick(e) {
        this.props.history.push('/' + e.key);
    }

    render() {

        const menu = (
          <Menu onClick={(e) => {this.handleMenuClick(e)}}>
            <Menu.Item key="logout">
              <Icon type="logout" />
              Изход
            </Menu.Item>
            <Menu.Item key="pass-reset">
              <Icon type="lock" />
              Ресет на парола
            </Menu.Item>
          </Menu>
        );


        return (
            <>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider className="sidebar" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <a href='#/' >
                  <div className="logo" />
                </a>
              <Menu  onClick={(e) => {this.handleLeftMenuClick(e)}} theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {!this.props.user.is_referee &&
                    <Menu.Item key="players" className={(this.state.href =='#/players' ? 'ant-menu-item-selected' : '' )}>
                      <span className="menu-icon menu-icon__players"></span>
                      <span className="menu-item">Състезателки</span>
                    </Menu.Item>
               }
               {!this.props.user.is_referee &&
                    <Menu.Item key="referee" className={(this.state.href =='#/referee' ? 'ant-menu-item-selected' : '' )}>
                      <span className="menu-icon menu-icon__referee"></span>
                      <span className="menu-item">Съдии</span>
                    </Menu.Item>
               }
                <Menu.Item key="events" className={(this.state.href =='#/events' ? 'ant-menu-item-selected' : '' )}>
                  <span className="menu-icon menu-icon__events"></span>
                  <span className="menu-item">Прояви</span>
                </Menu.Item>
                <Menu.Item key="requests" className={(this.state.href =='#/requests' ? 'ant-menu-item-selected' : '' )}>
                  <span className="menu-icon menu-icon__request"></span>
                  <span className="menu-item">Заявка за промяна</span>
                </Menu.Item>
                {this.props.user.is_admin &&
                    <Menu.Item key="teams" className={(this.state.href =='#/teams' ? 'ant-menu-item-selected' : '' )}>
                      <span className="menu-icon menu-icon__teams"></span>
                      <span className="menu-item">Клубове</span>
                    </Menu.Item>
                }
                {this.props.user.is_admin &&
                    <Menu.Item key="users" className={(this.state.href =='#/users' ? 'ant-menu-item-selected' : '' )} >
                      <span className="menu-icon menu-icon__users"></span>
                      <span className="menu-item">Потребители</span>
                    </Menu.Item>
                }
              </Menu>
            </Sider>
            <Layout>
              <Header className="header" style={{ background: '#fff', padding: 0, marginBottom: 18 }} >
                <Dropdown.Button onClick={(e) => {this.handleButtonClick(e)}} className="profile-dd profile-container" overlay={menu} icon={<PandaIcon style={{ fontSize: '20px' }} />}>
                  {this.props.user.username}
                </Dropdown.Button>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <div id='main-card' style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>©2020 Created by <a className="footer-link" href="https://code-nest.com" target="_blank">CodeNest</a></Footer>
            </Layout>
          </Layout>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
  };
}
//const GrForm = Form.create()(GradeForm);
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
//export default StudentDetails;
