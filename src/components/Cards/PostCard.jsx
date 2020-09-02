import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, makeStyles, CardActions, IconButton } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { SvgIcon } from '@material-ui/core'
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
    avatar: {},
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: theme.spacing(0, 2),
        borderRadius: theme.spacing(0.4)
    },
    card: {
        // border: theme.palette.type === 'light' ? '0.09em solid #e3e6fc' : '1px solid white',
        borderRadius: theme.spacing(0.2),
        backgroundColor: theme.palette.type === 'light' ? 'white' : theme.palette.background,
        boxShadow: theme.palette.type === 'light' ? theme.palette.card.elevation.light : '',
        '&:hover': {
            boxShadow: theme.palette.type === 'light' ? theme.palette.card.hoverElevation.light : '',
        }
    },
    bigGap: {
        padding: theme.spacing(1, 2)
    },
    hrule: {
        borderTop: '1px solid',
        borderColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.19)' : 'white',
        maxWidth: '95%',
        margin: 'auto'
    },
    likesAndCommentsCounts: {
        fontSize: '0.87em',
        fontWeight: 'normal',
        
    },
    counts: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    icons:{
        color: theme.palette.primary.main
    }
}))

const PostCard = ({ user, time, postText, media, likes, commentsCount, sharesCount }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="user" src={user.avatar} className={classes.avatar}>

                        </Avatar>
                    }
                    title={user.name}
                    subheader={time}
                />
                <CardContent>
                    <Typography>
                        {postText}
                    </Typography>
                </CardContent>

                {
                    media ? (
                        <>
                            <CardMedia
                                className={classes.media}
                                image={media.src}
                                title={media.title}
                            />
                            <div className={classes.bigGap} />
                        </>
                    ) : ''
                }

                <div className={classes.hrule} />
                <CardActions disableSpacing>

                    <IconButton color="primary" aria-label="like">
                        <ThumbUpOutlinedIcon />
                    </IconButton>
                    <span className={classes.likesAndCommentsCounts}>{likes}
                        <span className={classes.counts}> Likes</span> 
                        </span>

                    <IconButton  color="primary" aria-label="comments">
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    <span className={classes.likesAndCommentsCounts}>{commentsCount} <span className={classes.counts}>Comments</span> </span>
                    
                    <IconButton aria-label="share">
                        <SvgIcon color="primary" viewBox="0 0 512 512">
                            <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                        </SvgIcon>

                    </IconButton>
                    <span className={classes.likesAndCommentsCounts}>
                        {sharesCount} 
                        <span className={classes.counts}> Shares</span>
                    </span>

                </CardActions>
            </Card>
        </div>
    )
}
PostCard.propTypes = {
    user: PropTypes.object.isRequired,
    time: PropTypes.string.isRequired,
    postText: PropTypes.string,
    media: PropTypes.object,
    likes: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    sharesCount: PropTypes.number.isRequired,
}


export default PostCard
