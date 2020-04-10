import React from 'react';
import { DetailedDataPresent } from '../components/detailedDataPresent';
import { Profile } from './profile';


export const Details = props => {
  if (props.route.params.name){
    return <Profile/>;
  }else{
    return <DetailedDataPresent {...props.route.params} />;
  }
};
