import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Game from '../Game/Game';
import './Console.css'

const Console = ({list}) => {

let games = [];

const [ consola, setConsola] = useState('');

  const handleChange = (event) => {
    setConsola(event.target.value);
  };

  return (
    <>
        <Box  sx={{ minWidth: 120 }}>
            <FormControl id="selectConsole" required sx={{ m: 4, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-label">Elige una plataforma</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={consola}
                label="Elige una plataforma"
                onChange={handleChange}
                >
                    {list.map((item) =>
                        <MenuItem id="name-console" value={item.name} key={item.id}><span id='item-name-console'>{item.name}</span></MenuItem>
                    )}

                </Select>
            </FormControl>
                { consola === 'PC' && <Game gameInfo={list[0]}/>}
                { consola === 'PlayStation 5' && <Game gameInfo={list[1]}/>}
                { consola === 'PlayStation 4' && <Game gameInfo={list[2]}/>}
                { consola === 'Xbox One' && <Game gameInfo={list[3]}/>}
                { consola === 'Xbox Series S/X' && <Game gameInfo={list[4]}/>}
                { consola === 'Nintendo Switch' && <Game gameInfo={list[5]}/>}
                { consola === 'iOS' && <Game gameInfo={list[6]}/>}
                { consola === 'Android' && <Game gameInfo={list[7]}/>}
                { consola === 'Nintendo 3DS' && <Game gameInfo={list[8]}/>}
                { consola === 'Nintendo DS' && <Game gameInfo={list[9]}/>}
                { consola === 'Nintendo DSi' && <Game gameInfo={list[10]}/>}
                { consola === 'macOS' && <Game gameInfo={list[11]}/>}
                { consola === 'Linux' && <Game gameInfo={list[12]}/>}
                { consola === 'Xbox 360' && <Game gameInfo={list[13]}/>}
                { consola === 'Xbox' && <Game gameInfo={list[14]}/>}
                { consola === 'PlayStation 3' && <Game gameInfo={list[15]}/>}
                { consola === 'PlayStation 2' && <Game gameInfo={list[16]}/>}
                { consola === 'PlayStation' && <Game gameInfo={list[17]}/>}
                { consola === 'PS Vita' && <Game gameInfo={list[18]}/>}
                { consola === 'PSP' && <Game gameInfo={list[19]}/>}
                { consola === 'Wii U' && <Game gameInfo={list[20]}/>}
                { consola === 'Wii' && <Game gameInfo={list[21]}/>}
                { consola === 'GameCube' && <Game gameInfo={list[22]}/>}
                { consola === 'Nintendo 64' && <Game gameInfo={list[23]}/>}
                { consola === 'Game Boy Advance' && <Game gameInfo={list[24]}/>}
                { consola === 'Game Boy Color' && <Game gameInfo={list[25]}/>}
                { consola === 'Game Boy Advance' && <Game gameInfo={list[26]}/>}
                { consola === 'SNES' && <Game gameInfo={list[27]}/>}
                { consola === 'NES' && <Game gameInfo={list[28]}/>}
                { consola === 'Classic Macintosh' && <Game gameInfo={list[29]}/>}
                { consola === 'Apple II' && <Game gameInfo={list[30]}/>}
                { consola === 'Commodore / Amiga' && <Game gameInfo={list[31]}/>}
                { consola === 'Atari 7800' && <Game gameInfo={list[32]}/>}
                { consola === 'Atari 5200' && <Game gameInfo={list[33]}/>}
                { consola === 'Atari 2600' && <Game gameInfo={list[34]}/>}
                { consola === 'Atari Flashback' && <Game gameInfo={list[35]}/>}
                { consola === 'Atari 8-bit' && <Game gameInfo={list[36]}/>}
                { consola === 'Atari ST' && <Game gameInfo={list[37]}/>}
                { consola === 'Atari Lynx' && <Game gameInfo={list[38]}/>}
                { consola === 'Atari XEGS' && <Game gameInfo={list[39]}/>}
                { consola === 'Genesis' && <Game gameInfo={list[40]}/>}
                { consola === 'SEGA Saturn' && <Game gameInfo={list[41]}/>}
                { consola === 'SEGA CD' && <Game gameInfo={list[42]}/>}
                { consola === 'SEGA 32X' && <Game gameInfo={list[43]}/>}
                { consola === 'SEGA Master System' && <Game gameInfo={list[44]}/>}
                { consola === 'Dreamcast' && <Game gameInfo={list[45]}/>}
                { consola === '3DO' && <Game gameInfo={list[46]}/>}
                { consola === 'Jaguar' && <Game gameInfo={list[47]}/>}
                { consola === 'Game Gear' && <Game gameInfo={list[48]}/>}
                { consola === 'Neo Geo' && <Game gameInfo={list[49]}/>}

        </Box>
    </>
  )
}

export default Console
