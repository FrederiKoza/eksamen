import React from 'react'

import classroomimg from '../../assets/classroom-img.png'
import Image from 'next/image'
import { Button } from '@mantine/core'
import { FaChalkboardTeacher, FaPlug, FaTv } from 'react-icons/fa'

const ClassRoomCard2 = ({ reservation, classroom }) => {
  return (
    <div className='classroom-card2'>
      <Image
        src={classroomimg}
        className='classroom-card-img'
      />

      <div className='classroom-card-info'>
        <div className='classroom-icons'>
          <FaTv color='var(--cphYellow)' size={15} />
          <FaChalkboardTeacher color='var(--cphYellow)' size={15} />
          <FaPlug color='var(--cphYellow)' size={15} />
        </div>
        <p className='classroom-facility'> {classroom.facility1} </p>
        <p className='classroom-facility'> {classroom.facility2} </p>
        <p className='classroom-facility'> {classroom.facility3} </p>
      </div>
        <h3 className='classroom-number2'> {reservation.roomnumber} </h3>
    </div>
  )
}

export default ClassRoomCard2