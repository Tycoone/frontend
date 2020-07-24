import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Paper,
    Button,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    smallPaper: {
        // padding: theme.spacing(10),

        color: theme.palette.text,
        boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight
    },
    connectBtn: {
        textTransform: 'Capitalize',
        fontSize: 17,
        color: theme.palette.primary.main
    }
}));

const ConnectSuggestCard = ({ connectionSuggestion }) => {
    const classes = useStyles();
    connectionSuggestion = connectionSuggestion.slice(0, 5)
    return (
        <>
            <Paper elevation={0} className={classes.smallPaper}>
                <List>
                    {


                        connectionSuggestion.map(connect => (
                            <ListItem key={connect.id}>
                                <ListItemAvatar>
                                    <Avatar src={connect.profileImage} />
                                </ListItemAvatar>
                                <ListItemText primary={connect.name} secondary={connect.details} />
                                <ListItemSecondaryAction>
                                    <Button className={classes.connectBtn}>Connect</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}


                </List>
            </Paper>
        </>
    )
}

export default ConnectSuggestCard
