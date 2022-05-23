import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './email.css';

const Email = () => (
  <div className="app__email">
    <div className="app__email-heading">
      <SubHeading title="email Us" />
      <h1 className="headtext__cormorant">Subscribe To Our email</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__email-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Email;