import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { ThumbUpAlt } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import './post.css'


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card className='card'>
            <CardMedia className='media'
                image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className='overlay'>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className='overlay2'>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHoriz fontSize="default" /></Button>
            </div>
            <div className='details' >
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className='title'
                gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className='cardActions' >
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAlt fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><Delete fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Post;