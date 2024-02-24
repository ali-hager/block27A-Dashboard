import React from "react";
import { mockTransactions } from "../MockData";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ClientNums(){

  const countUniqueUsers = (transactions) => {
    let uniqueUsernames = new Set();

    transactions.forEach(transaction => {
      uniqueUsernames.add(transaction.user);
    });

    return uniqueUsernames.size;
  };

  const uniqueUserCount = countUniqueUsers(mockTransactions);
  
  return(
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://frappecloud.com/files/user.png"
        title="users"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {uniqueUserCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          unique users.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default ClientNums