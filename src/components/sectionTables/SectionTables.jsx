import React from 'react'
import { Container } from "react-bootstrap";
import "./style_tables.css";
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
const SectionTables = () => {
  return (
    <Container>
        <section className='parent'>
          <div className='user_info'>
            <div className='user_info_inside'>
            <h3 id='table_name'>ADD JS</h3>
            <BackupTableIcon/> <a href="http://">Tablica</a><br />
            <PersonOutlineIcon/> <a href="http://">Członkowie</a> <a href="http://"><AddIcon/></a><br />
            <SettingsIcon/> <a href="http://">Ustawienia</a> <br />
            <h6>Widoki przestrzeni roboczej</h6>
            <TableRowsIcon/> <a href="http://">Tabela</a> <br />
            <CalendarMonthIcon/> <a href="http://">kalendarz</a> <br />
            <h6>Twoje tablice </h6>
            Nazwa tablicy z js
            </div>
          </div>
        </section>
    
  </Container>
    
  )
}

export default SectionTables