import React from 'react';
import { makeStyles,  Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import ConnectCard from '../../app/ui/components/Cards/ConnectCard';
import { Link as RLink } from 'react-router-dom';
import ConnectSuggestCard from '../../app/ui/components/Cards/ConnectSuggestCard';
const useStyles = makeStyles(theme => ({
	root: {

	},
	bigGap: {
		padding: theme.spacing(2)
	},
	connectionSuggestTitle: {
		color: theme.palette.primary.main,
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: theme.spacing(2, 0.4)
	},
	titleHeader: {
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: "22px",
		lineHeight: '1'
	},
	titleLinks: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		fontWeight: 500,
		fontSize: "21px"
	}
}));
function Feed({ connectionRequest }) {
	const classes = useStyles();
	// const connectReq = connectionRequest.filter((item,index) => index !== (connectionRequest.length - 1));
	const connectReq = connectionRequest.slice(0, 4);
	return (
		<div className={classes.root}>
			<div className={classes.bigGap} />
			<div>
				<div className={classes.connectionSuggestTitle}>
					<Typography className={classes.titleHeader}>Recent Invitation</Typography>

					<Typography>
						<RLink to="/connections#home" className={classes.titleLinks}>
							See all
						</RLink>
					</Typography>
				</div>
				<Grid container className={classes.paper2} spacing={4}>
					{
						connectReq.map(user => (
							<ConnectCard key={user.id} user={user} />
						))
					}
				</Grid>
			</div>
			<div className={classes.bigGap} />
			<div className={classes.bigGap} />
			<Grid container>
				<Grid item md={8}></Grid>
				<Grid item md={4}>
					<ConnectSuggestCard connectionSuggestion={connectionRequest}/>
				</Grid>
			</Grid>
		</div>
	)
}


Feed.propTypes = {
	connectionRequest: PropTypes.array.isRequired,
};

Feed.defaultProps = {
	// bla: 'test',
};

export default Feed;
