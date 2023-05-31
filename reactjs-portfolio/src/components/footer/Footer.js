import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer>
          <ul>
            <li><a href="https://github.com/your-username">GitHub</a></li>
            <li><a href="https://linkedin.com/in/your-username">LinkedIn</a></li>
            <li><a href="https://stackoverflow.com/users/your-username">Stack Overflow</a></li>
            <li><a href="https://twitter.com/your-username">Twitter</a></li>
          </ul>
        </footer>
    )
}

export default Footer;