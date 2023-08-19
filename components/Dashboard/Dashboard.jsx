"use client"
import React from 'react'
import styles from './Dashboard.module.css'
import Booking from '../Booking/Booking'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const roomdata = [
    {
        id:1,
        ConferenceRoom:1,
        RoomSize:1,
        sittingcapacity:20,
        AirCondition:"Yes",
        WifiAvailability:"Yes"
    },
    {
        id:2,
        ConferenceRoom:2,
        RoomSize:2,
        sittingcapacity:25,
        AirCondition:"Yes",
        WifiAvailability:"Yes"
    },
    {
        id:3,
        ConferenceRoom:3,
        RoomSize:5,
        sittingcapacity:40,
        AirCondition:"No",
        WifiAvailability:"Yes"
    },
    {
        id:4,
        ConferenceRoom:4,
        RoomSize:2,
        sittingcapacity:50,
        AirCondition:"No",
        WifiAvailability:"No"
    },
    {
        id:5,
        ConferenceRoom:5,
        RoomSize:3,
        sittingcapacity:30,
        AirCondition:"Yes",
        WifiAvailability:"Yes"
    },
    {
        id:6,
        ConferenceRoom:6,
        RoomSize:8,
        sittingcapacity:60,
        AirCondition:"Yes",
        WifiAvailability:"Yes"
    },
]

const Dashboard = () => {
  return (
    <>
    <div className={styles.dashboard}>
        <div className={styles.logo_right}>
        <h1>Dashboard</h1>
        <Image src="/logo1.png" width={400} height={100}/>
        </div>
        <div className={styles.carousel}>
        <Carousel
        showThumbs={false}
        className={styles.carousel2}
        legends={false}
        showStatus={false}
        >
                <div className={styles.content}>
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className={styles.content}>
                    <img src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className={styles.content}>
                    <img src="https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </div>

        <h2>Available Room Types</h2>

        <Booking roomdata={roomdata}/>
    </div>
    </>
  )
}

export default Dashboard