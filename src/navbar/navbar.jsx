import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { NavbarText, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';




function Navbar() {//prostor kjer se izvaja navigacija.

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavItem>
                            <NavbarText>
                                <Link to="/">Peđo</Link>
                            </NavbarText>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem>
                            <NavbarText>
                                <Link to='frag'>Frag</Link>
                            </NavbarText>
                        </NavItem>
                    </li>
                </ul>
            </nav>
        </>
    );

}

export default Navbar;