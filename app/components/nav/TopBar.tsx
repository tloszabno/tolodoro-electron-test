import { faCalendarWeek, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import routes from '../../constants/routes.json';
import { IconContainer, FontWrapper } from './TobBar.styled';

export const TopBar: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand to={routes.HOME} tag={RRNavLink}>
          <IconContainer>
            <FontAwesomeIcon icon={faCalendarWeek} />
          </IconContainer>{' '}
          <span>Tolodoro</span>
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to={routes.SETTINGS}>
              <FontWrapper>
                <FontAwesomeIcon icon={faCog} />
              </FontWrapper>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
