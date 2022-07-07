import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardGame from '../CardGame/CardGame';
import './SelectLabel.css'

const SelectLabel = ({list}) => {

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
                { consola === 'PC' && <CardGame gameInfo={list[0]}/>}
                { consola === 'PlayStation 5' && <CardGame gameInfo={list[1]}/>}
                { consola === 'PlayStation 4' && <CardGame gameInfo={list[2]}/>}
                { consola === 'Xbox One' && <CardGame gameInfo={list[3]}/>}
                { consola === 'Xbox Series S/X' && <CardGame gameInfo={list[4]}/>}
                { consola === 'Nintendo Switch' && <CardGame gameInfo={list[5]}/>}
                { consola === 'iOS' && <CardGame gameInfo={list[6]}/>}
                { consola === 'Android' && <CardGame gameInfo={list[7]}/>}
                { consola === 'Nintendo 3DS' && <CardGame gameInfo={list[8]}/>}
                { consola === 'Nintendo DS' && <CardGame gameInfo={list[9]}/>}
                { consola === 'Nintendo DSi' && <CardGame gameInfo={list[10]}/>}
                { consola === 'macOS' && <CardGame gameInfo={list[11]}/>}
                { consola === 'Linux' && <CardGame gameInfo={list[12]}/>}
                { consola === 'Xbox 360' && <CardGame gameInfo={list[13]}/>}
                { consola === 'Xbox' && <CardGame gameInfo={list[14]}/>}
                { consola === 'PlayStation 3' && <CardGame gameInfo={list[15]}/>}
                { consola === 'PlayStation 2' && <CardGame gameInfo={list[16]}/>}
                { consola === 'PlayStation' && <CardGame gameInfo={list[17]}/>}
                { consola === 'PS Vita' && <CardGame gameInfo={list[18]}/>}
                { consola === 'PSP' && <CardGame gameInfo={list[19]}/>}
                { consola === 'Wii U' && <CardGame gameInfo={list[20]}/>}
                { consola === 'Wii' && <CardGame gameInfo={list[21]}/>}
                { consola === 'GameCube' && <CardGame gameInfo={list[22]}/>}
                { consola === 'Nintendo 64' && <CardGame gameInfo={list[23]}/>}
                { consola === 'Game Boy Advance' && <CardGame gameInfo={list[24]}/>}
                { consola === 'Game Boy Color' && <CardGame gameInfo={list[25]}/>}
                { consola === 'Game Boy Advance' && <CardGame gameInfo={list[26]}/>}
                { consola === 'SNES' && <CardGame gameInfo={list[27]}/>}
                { consola === 'NES' && <CardGame gameInfo={list[28]}/>}
                { consola === 'Classic Macintosh' && <CardGame gameInfo={list[29]}/>}
                { consola === 'Apple II' && <CardGame gameInfo={list[30]}/>}
                { consola === 'Commodore / Amiga' && <CardGame gameInfo={list[31]}/>}
                { consola === 'Atari 7800' && <CardGame gameInfo={list[32]}/>}
                { consola === 'Atari 5200' && <CardGame gameInfo={list[33]}/>}
                { consola === 'Atari 2600' && <CardGame gameInfo={list[34]}/>}
                { consola === 'Atari Flashback' && <CardGame gameInfo={list[35]}/>}
                { consola === 'Atari 8-bit' && <CardGame gameInfo={list[36]}/>}
                { consola === 'Atari ST' && <CardGame gameInfo={list[37]}/>}
                { consola === 'Atari Lynx' && <CardGame gameInfo={list[38]}/>}
                { consola === 'Atari XEGS' && <CardGame gameInfo={list[39]}/>}
                { consola === 'Genesis' && <CardGame gameInfo={list[40]}/>}
                { consola === 'SEGA Saturn' && <CardGame gameInfo={list[41]}/>}
                { consola === 'SEGA CD' && <CardGame gameInfo={list[42]}/>}
                { consola === 'SEGA 32X' && <CardGame gameInfo={list[43]}/>}
                { consola === 'SEGA Master System' && <CardGame gameInfo={list[44]}/>}
                { consola === 'Dreamcast' && <CardGame gameInfo={list[45]}/>}
                { consola === '3DO' && <CardGame gameInfo={list[46]}/>}
                { consola === 'Jaguar' && <CardGame gameInfo={list[47]}/>}
                { consola === 'Game Gear' && <CardGame gameInfo={list[48]}/>}
                { consola === 'Neo Geo' && <CardGame gameInfo={list[49]}/>}

        </Box>
    </>
  )
}

export default SelectLabel
