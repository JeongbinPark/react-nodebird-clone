import React from 'react';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head';

const Profile = () => {
  const followerList = [{nickname : 'JB'}, {nickname: 'AB'}, {nickname: 'blah'}];
  const followingList = [{nickname : 'JB'}, {nickname: 'hello'}, {nickname: 'world'}];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
       <NicknameEditForm />
       <FollowList header="Followings" data={followingList} />
       <FollowList header="Followers" data={followerList}/>
      </AppLayout>
    </>
  );
};

export default Profile;