import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const createCard = (title, description, buttonText) => (
  <Card sx={{ minWidth: 275, margin: 1 }}>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        adjective
      </Typography>
      <Typography variant="body2">
        {description}
        <br />
        {'"a descriptive phrase"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">{buttonText}</Button>
    </CardActions>
  </Card>
);

export default function BasicCard() {
  return (
    <Box
      sx={{
        marginTop:"-20rem",
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        overflowX: 'auto',
        padding: 2,
        justifyContent: 'center',  // Centraliza os cartões horizontalmente
        alignItems: 'center',      // Centraliza os cartões verticalmente
        minHeight: '100vh',        // Garante que o contêiner ocupe a altura total da tela
      }}
    >
      {createCard(
        'be•nev•o•lent',
        'well meaning and kindly. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Learn More'
      )}
      {createCard(
        'au•then•tic',
        'genuine and real. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Discover'
      )}
      {createCard(
        'in•spi•ra•tion•al',
        'providing or showing creative or spiritual inspirationaliquip ex ea commodo consequat.',
        'Explore'
      )}
    </Box>
  );
}
