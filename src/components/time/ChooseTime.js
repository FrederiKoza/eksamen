import React, { useState } from 'react'
import useMyContext from "@/context/my-context";

import { Combobox, InputBase, Input, useCombobox } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/dates/styles.css';


const ChooseTime = () => {

    const [tidStart, setTidStart] = useState("")
    const [tidSlut, setTidSlut] = useState("")

    const handleTidStartChange = (e) => {
        setTidStart(e.target.value)
    }
    const handleTidSlutChange = (e) => {
        setTidSlut(e.target.value)
    }


    const contextValue = useMyContext();


    function handleChangeStart(event) {
        contextValue.setTimeStart(event.target.value);
    }
    function handleChangeEnd(event) {
        contextValue.setTimeEnd(event.target.value);
    }


    return (
        <div className='todayDate'>
            <label>Reservation start</label>
            <input type="time" value={tidStart} onChange={handleTidStartChange} />
            {/* <input type='time' required value={contextValue.timeStart} onChange={handleChangeStart}></input> */}

            <label>Reservation slut</label>
            <input type="time" value={tidSlut} onChange={handleTidSlutChange} />
            {/* <input type='time' required value={contextValue.timeEnd} onChange={handleChangeEnd}></input> */}
        </div>
    )
}

export default ChooseTime