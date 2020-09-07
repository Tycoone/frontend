import React, { useEffect } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import ConnectCard from '../../../components/Cards/ConnectCard';
import { Link as RLink } from 'react-router-dom';
import ConnectSuggestCard from '../../../components/Cards/ConnectSuggestCard';
import PostCard from '../../../components/Cards/PostCard';
// import axios from 'axios'
import localStore from '../../../hooks/useStorage.js'
const useStyles = makeStyles(theme => ({
	root: {

	},
	bigGap: {
		padding: theme.spacing(2),
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
		lineHeight: '1',
	},
	titleLinks: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		fontWeight: 500,
		fontSize: "21px"
	},
	suguestTitl: {
		margin: theme.spacing(2, 0)

	},
	paddingLarge: {
		padding: theme.spacing(0, 0, 0, 4)
	}
}));




function Feed(props) {
	const { connectionRequest } = props;
	const classes = useStyles();
	// const [posts, setPosts] = useState([])

	const tokenG = JSON.parse(localStore.getToken());
	const token = tokenG.token;


	useEffect(() => {

		// var config = {
		// 	method: 'get',
		// 	url: 'http://api-tycoone.tk/api/posts/',
		// 	headers: { Authorization: `Bearer ${token}` }
		// };
		// const fetch = () => {
		// 	axios(config )
		// 		.then(res => {
		// 			setPosts(res.message.posts)
		// 			console.log(res)
		// 		})
		// 		.catch(err => console.error(err));
		// }
		// fetch();
		const fetchPosts = () => {
			fetch('http://api-tycoone.tk/api/posts/', {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token,
				},
			})
				.then((response) => response.json())
				.then(post => console.log(post));
		}
		fetchPosts();
	}, [token]);
	// console.log(posts)


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
				<Grid item md={8} xs={12}>
					<PostCard
						user={{ name: "Nzaki Michael", avatar: "/assets/images/nzaki.png" }}
						time="10 mins ago"
						media={{ isImage: true, src: '/assets/images/coverImage_default.jpg' }}
						likes={10}
						commentsCount={4}
						sharesCount={1}
					/>
					<div className={classes.bigGap} />
				</Grid>
				<Grid item md={4} xs={12} >
					<div className={classes.paddingLarge}>
						<div className={classes.suguestTitl}>
							<Typography className={classes.titleHeader}>Suggestions for you</Typography>
						</div>
						<ConnectSuggestCard connectionSuggestion={connectionRequest} />
					</div>
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
