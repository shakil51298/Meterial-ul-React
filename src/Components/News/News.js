import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './News.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const News = (props) => {
    const {title,description,author,urlToImage,publishedAt,content} =props.article;
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={urlToImage}
                        title={title}
                                />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn More</Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default News; <h3>shakil khan</h3>
