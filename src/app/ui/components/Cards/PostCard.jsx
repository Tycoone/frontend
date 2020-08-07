import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, makeStyles, CardActions, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
    avatar: {},
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: theme.spacing(0, 3),
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
        padding: theme.spacing(2)
    },
}))

const PostCard = ({ user, time, postText, media, likes, commentsCount, sharesCount }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={user.avatar} className={classes.avatar}>
                            {user}
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
                    media? (
                        <CardMedia
                            className={classes.media}
                            image={media.src}
                            title={media.title}
                        />
                    ) : ''
                }
                <div className={classes.bigGap} />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> 
                    </IconButton>{likes} Likes
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>{sharesCount} Shares 

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
