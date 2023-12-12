import React, { useEffect, useState } from "react";
import { Container, Button, Title, Grid, GridCol } from "@mantine/core";
import { cancelAlert } from "./alert/CancelAlert";
import ReservationBox from "./ContactBox";

export function UpcomingReservation() {

  const [reservation, setReservation] = useState([]);

  const getReservation = async () => {
    const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiaW1zZ3pneGFoaGx0cGJ2d2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzc3NTAsImV4cCI6MjAxNDg1Mzc1MH0.bR_zj_y7vzf7fvsW-N-6126mAyKquznFzvDur-m-_mw'
    const data = await fetch('https://wbimsgzgxahhltpbvwlu.supabase.co/rest/v1/contactlist?select=*', {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      }
    }).then(response => response.json())

    setReservation(data);
  }

  useEffect(() => {
    getReservation();
  }, []);

  return (
    <>
      <Container fluid className="ur-container">

        <Title className="upcoming-reservations-title">Upcoming reservations</Title>

        <Grid gutter="lg" className="upcoming-reservations-grid">

        {reservation.length === 0 ? (
            <p className="no-reservations">No upcoming reservations. <br/> Create a new one below!</p>
          ) : (
            <div className="upcoming-reservations" span={4}>
              {reservation.map((reservation, classroom, index) => {
                return <ReservationBox key={index} reservation={reservation} classroom={classroom}/>;
              })}
            </div>
          )}
          

        </Grid>
      </Container>
    </>
  );
}
