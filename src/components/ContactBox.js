import React, { useEffect, useState } from "react";
import { supabase } from "@/pages/lib/helper/supabaseClient";
import ClassRoomCard2 from "./classroom/ClassRooms2";
import { cancelAlert } from "./alert/CancelAlert";



export default function ReservationBox({ reservation, classroom }) {


  const [fetchError, setFetchError] = useState(null);
  const [ClassRooms, setClassRooms] = useState(null);

  useEffect(() => {
    const fetchClassRooms = async () => {
      const { data, error } = await supabase
        .from("classrooms")
        .select('')
        .limit(1)

      if (error) {
        setFetchError("Could not fetch class rooms");
        setClassRooms(null);
        console.log(error);
      }
      if (data) {
        setClassRooms(data);
        setFetchError(null);
      }
    };

    fetchClassRooms();
  }, []);

  return (
    <div className="reservations">
    <div className="reservation-box">
      <ul>
        <li>
          <p><span className="subtitle">Dato:</span> {reservation.dato}</p>
          <p><span className="subtitle">Tidspunkt:</span> {reservation.tid}</p>
          <p><span className="subtitle">Antal:</span> {reservation.antal}</p>
        </li>
      </ul>

       


      {fetchError && <p> {fetchError} </p>}
      {ClassRooms && (
        <div className="">
          {ClassRooms.map((ClassRooms) => (
            <ClassRoomCard2
              key={ClassRooms.id}
              classroom={ClassRooms}
              reservation={reservation}
            />
          ))}
        </div>
      )}
      
     
    </div>
    <div>
        <button className="reservation-button" onClick={cancelAlert}>Cancell</button>
      </div>
    </div>
  );
}
