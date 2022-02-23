import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head';

const Profile = () => {
  const { Followings, Followers } = useSelector((state)=> state.user.me);
  
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
       <NicknameEditForm />
       <FollowList header="Followings" data={Followings} />
       <FollowList header="Followers" data={Followers}/>
      </AppLayout>
    </>
  );
};

export default Profile;