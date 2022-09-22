import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faLink } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from './HamArr';

const Modal = () => {
    return (
        <div className='Hamburger'>
            <FontAwesomeIcon icon={faClose} className="closeModal" />
        {
            hamburger.map((item) =>(
                <div className="hamburgerBtn">
                    <Link to="/" className='nav-item'>
                    <a>{item.about}</a>
                    </Link>
                    <Link to="/portfolio" className='nav-item'>
                    <a>{item.portfolio}</a>
                    </Link>
                    <Link to="/login" className='nav-item'>
                    <a>{item.refrence}</a>
                    </Link>
                    <Link to="/register" className='nav-item'>
                    <a>{item.skills}</a>
                    </Link>
                </div>
            ))
        }
    </div>
    );
};

export default Modal;