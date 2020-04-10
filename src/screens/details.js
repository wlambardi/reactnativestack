import React from 'react';
import { Profile } from './profile';


export const Details = props => {
  if (props.route.params.name){
    return <Profile/>;
  }else{
    return null;
  }
};
