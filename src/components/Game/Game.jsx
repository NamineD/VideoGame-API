import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Gamepad from '@material-ui/icons/Gamepad';
import ListItemText from '@material-ui/core/ListItemText';
import './Game.css'


const Game = ({gameInfo}) => {

    console.log(gameInfo);

  return (
    <div className='game-info'>
        <Card sx={{ maxWidth: 1045, m: 5 }}>
            <CardMedia
                component="img"
                height="440"
                image={gameInfo.image_background}
                alt={gameInfo.slug}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {gameInfo.name}
                </Typography>
                <Typography variant="body2" component="span">
                    <div >
                    {gameInfo.games.map((elem) => 
                        <List>
                            <ListItem className='list-games'>
                                <ListItemIcon>
                                    <Gamepad />
                                </ListItemIcon>
                                <ListItemText
                                    className='list-name'
                                    primary={elem.name}
                                />
                            </ListItem>
                        </List>
                    )}
                    </div>
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Game