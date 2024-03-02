import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/arpit-tiwari01')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
            
    //     })
    // });
  return (
    <div>
      <div className='flex flex-row bg-gray-200 mx-12 rounded-3xl m-5'>
        <img src={data.avatar_url} alt="Github Picture" className='rounded-3xl p-4 m-4'/>
        <div>
            <div className='bg-blue-600 text-white font-mono  text-left text-3xl  p-4 rounded-3xl  m-6'>Github Name: {data.name}</div>
            <div className='bg-blue-600 text-white font-mono  text-left text-3xl  p-4 rounded-3xl  m-6'>Github Bio: {data.bio}</div>
            <div className='bg-blue-600 text-white font-mono  text-left text-3xl  p-4 rounded-3xl  m-6'>Github Public Repos: {data.public_repos}</div>
            <div className='bg-blue-600 text-white font-mono  text-left text-3xl  p-4 rounded-3xl  m-6'>Github Follower: {data.followers}</div>
        </div>
        
        </div>
    </div>
  );
}


export default Github;

export const githubInfiLoder = async () => {
    const response = await fetch('https://api.github.com/users/arpit-tiwari01');
    return response.json();
}