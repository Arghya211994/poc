"use client"
import React from 'react'
import styles from './Dashboard.module.css'
import Booking from '../Booking/Booking'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Dashboard = () => {
  return (
    <>
    <div className={styles.dashboard}>
        <h1>Dashboard Content</h1>
        <h2>Feature Images</h2>
        <div className={styles.carousel}>
        <Carousel
        showThumbs={false}
        className={styles.carousel2}
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

        <h3>Bookings</h3>

        <Booking/>
    </div>
    </>
  )
}

export default Dashboard