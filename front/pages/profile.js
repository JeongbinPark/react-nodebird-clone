import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head';

const Profile = () => {
  const { me } = useSelector((state)=> state.user);
  
  useEffect(() => {
    if (!(me?.id)) {
      Router.push('/');
    }
  }, [me?.id]);

  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
       <NicknameEditForm />
       <FollowList header="Followings" data={me.Followings} />
       <FollowList header="Followers" data={me.Followers}/>
      </AppLayout>
    </>
  );
};

export default Profile;