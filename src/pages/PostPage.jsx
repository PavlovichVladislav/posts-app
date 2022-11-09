import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Lodaer from '../components/UI/loader/Lodaer';
import { useFetching } from '../hooks/useFetching';


const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState('');
    const [comments, setComments] = useState('');

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(id);
        fetchComments(id);
    }, []);

    if (!post) return null;

    return (
        <>
        <h1>Вы открыли пост номер {id}</h1>
        {isLoading 
            ? <Lodaer/>
            : <div>{post.id} {post.title}</div>
        }
        <h1>Коммментарии </h1>
        {  isComLoading
        ? <Lodaer/>
        : <div>
            {comments.map(comment => (
                <div style={{marginTop: '5px'}}>
                    <h4>{comment.email}</h4>
                    <div>{comment.body}</div>
                </div>
            ))}
        </div>

        }
        </>
    );
};

export default PostPage;