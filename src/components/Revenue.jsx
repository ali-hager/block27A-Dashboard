import { mockTransactions } from "../MockData"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Revenue(){
  const totalRevenue = mockTransactions.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.cost), 0).toFixed(2);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://imageio.forbes.com/specials-images/imageserve/64c25dd6921e1d37bf03e3c1/Concept-Of-Financial-Business-Plan--Revenue-Growth-Infographic--Increasing-Stacks-Of/960x0.jpg?format=jpg&width=960"
        title="revenue"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        $ {totalRevenue}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          revenue is generated.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}