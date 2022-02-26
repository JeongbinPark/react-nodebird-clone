import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../actions/types';
import { useInView } from 'react-intersection-observer';

const Home = () => {
	const dispatch = useDispatch();
	const [ref, inView] = useInView();
	const me = useSelector((state)=>state.user?.me);
	const mainPosts = useSelector((state)=>state.post.mainPosts);
	const { hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

	useEffect(()=>{
		if(inView && hasMorePosts && !loadPostsLoading){
			dispatch({
				type: LOAD_POSTS_REQUEST
			});
		}
	},[inView, hasMorePosts, loadPostsLoading]);

	return(
		<AppLayout>
      {me && <PostForm />}
			{mainPosts.map((post)=><PostCard key={post.id} post={post} />)}
			<div ref={ hasMorePosts && !loadPostsLoading ? ref : undefined } />
    </AppLayout>
	)
}

export default Home;