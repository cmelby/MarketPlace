import React from 'react';

import {Nav} from 'react-bootstrap'

function renderNav() {
    return (
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="link-1"><strong >Cameras</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"><strong >Phones</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3"><strong >Computers</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4"><strong >Accessories</strong></Nav.Link>
        </Nav.Item>
      </Nav>

    )
}

export default renderNav;