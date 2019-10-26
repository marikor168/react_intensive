import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = ()  => {
  return (
    <div className="container profile">
      <User 
          src="https://ichef.bbci.co.uk/news/660/cpsprodpb/BF62/production/_100249984_4685fae4-cad6-4e89-ab97-9f261a86b526.jpg" 
          alt="user" 
          name="Anna" />
      <Palette />
    </div>
  )
}

export default Profile;