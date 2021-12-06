import React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material'; 
import{ makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

import { CommentRounded } from '@mui/icons-material';
import { AccessTimeFilledRounded } from '@mui/icons-material';
import { AccountCircleRounded } from '@mui/icons-material';

import { LikeButton } from '../LikeButton';

const useStyles = makeStyles({
    row: {
      display: 'flex',
      margin: '1rem'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        
    },
    header: {
        spaceBetween: 'center'
    },
    content: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "break-all",
        overflow: "hidden"
    }
});

type DiscussionProps={
    title: string,
    content: string,
    created_at: string,
    created_by: number
}

function SuggestedDiscussion ( props: DiscussionProps ) {
    const classes = useStyles();
    console.log('Suggested: ');
    console.log(props);

    return (
        <React.Fragment>
            
                <Card raised={ false } sx={{ marginBottom: '1rem', padding: '.5rem' }} variant="outlined">
                    <div className={`${classes.row} ${classes.header}`}>
                        <div>
                            <LikeButton />
                            <Typography>5</Typography>
                        </div>
                        <div>
                            <Typography noWrap variant="h5" component="h2"><Link to="/specific-discussion" >{ props.title }</Link></Typography>
                            <div className={ classes.row }>
                                <AccountCircleRounded />
                                <Typography>{ props.created_by }</Typography>
                            </div>
                        </div>
                    </div>                
                    <CardContent sx={{ margin: '0rem', padding: '0rem' }}>
                        <Container  >
                            <Typography className={  classes.content } >
                                { props.content }
                            </Typography>
                        </Container>
                        <div className={ classes.row }>
                            <div className={ classes.row }>
                                <CommentRounded />
                                <Typography>5</Typography>
                            </div>
                            <div className={ classes.row }>
                                <AccessTimeFilledRounded />
                                <Typography>{ props.created_at }</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            
        </React.Fragment>
    );
}

export { SuggestedDiscussion };