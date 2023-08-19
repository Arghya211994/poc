"use client"
import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Room Type',
        selector: row => row.roomtype,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Timeslot',
        selector: row => row.timeslot,
    },
    {
        name: 'Requested By',
        selector: row => row.requestby,
    },
    {
        name: 'Action',
        selector: row => row.action,
    },
];

const data = [
    {
        roomtype: "Conference",
        title: "Team Meeting",
        date: "2023-08-25",
        timeslot: "10:00 AM",
        requestby: "john@example.com",
        action: "Approved"
    },
    {
        roomtype: "Presentation",
        title: "Client Pitch",
        date: "2023-09-02",
        timeslot: "2:00 PM",
        requestby: "jane@example.com",
        action: "Pending"
    },
    {
        roomtype: "Workshop",
        title: "Design Thinking",
        date: "2023-08-28",
        timeslot: "4:00 PM",
        requestby: "michael@example.com",
        action: "Rejected"
    },
    {
        roomtype: "Meeting",
        title: "Project Sync",
        date: "2023-09-08",
        timeslot: "11:00 AM",
        requestby: "emily@example.com",
        action: "Approved"
    },
    {
        roomtype: "Training",
        title: "Sales Techniques",
        date: "2023-08-21",
        timeslot: "5:00 PM",
        requestby: "david@example.com",
        action: "Pending"
    },
    {
        roomtype: "Conference",
        title: "Quarterly Review",
        date: "2023-09-14",
        timeslot: "11:00 AM",
        requestby: "sophia@example.com",
        action: "Approved"
    },
    {
        roomtype: "Presentation",
        title: "New Product Launch",
        date: "2023-08-30",
        timeslot: "2:30 PM",
        requestby: "william@example.com",
        action: "Approved"
    },
    {
        roomtype: "Workshop",
        title: "Leadership Skills",
        date: "2023-09-05",
        timeslot: "3:00 PM",
        requestby: "olivia@example.com",
        action: "Pending"
    },
    {
        roomtype: "Meeting",
        title: "Client Discussion",
        date: "2023-08-29",
        timeslot: "11:30 AM",
        requestby: "daniel@example.com",
        action: "Rejected"
    },
    {
        roomtype: "Training",
        title: "Time Management",
        date: "2023-09-10",
        timeslot: "3:30 PM",
        requestby: "ava@example.com",
        action: "Approved"
    },
    {
        roomtype: "Conference",
        title: "Annual Retreat",
        date: "2023-09-18",
        timeslot: "3:05 PM",
        requestby: "james@example.com",
        action: "Pending"
    },
    {
        roomtype: "Presentation",
        title: "Investor Pitch",
        date: "2023-08-27",
        timeslot: "2:30 PM",
        requestby: "ella@example.com",
        action: "Approved"
    },
    {
        roomtype: "Workshop",
        title: "Coding Bootcamp",
        date: "2023-09-06",
        timeslot: "9:00 AM",
        requestby: "liam@example.com",
        action: "Approved"
    },
    {
        roomtype: "Meeting",
        title: "Department Sync",
        date: "2023-08-28",
        timeslot: "5:00 PM",
        requestby: "mia@example.com",
        action: "Rejected"
    },
    {
        roomtype: "Training",
        title: "Communication Skills",
        date: "2023-09-12",
        timeslot: "12:30 PM",
        requestby: "noah@example.com",
        action: "Approved"
    },
    {
        roomtype: "Conference",
        title: "Industry Summit",
        date: "2023-09-22",
        timeslot: "4:00 PM",
        requestby: "aria@example.com",
        action: "Pending"
    },
    {
        roomtype: "Presentation",
        title: "Product Demo",
        date: "2023-08-29",
        timeslot: "11:30 AM",
        requestby: "carter@example.com",
        action: "Approved"
    },
    {
        roomtype: "Workshop",
        title: "Creativity Workshop",
        date: "2023-09-09",
        timeslot: "4:30 PM",
        requestby: "scarlett@example.com",
        action: "Pending"
    },
    {
        roomtype: "Meeting",
        title: "Budget Discussion",
        date: "2023-08-26",
        timeslot: "1:00 PM",
        requestby: "lucas@example.com",
        action: "Rejected"
    },
    {
        roomtype: "Training",
        title: "Leadership Seminar",
        date: "2023-09-15",
        timeslot: "4:00 PM",
        requestby: "luna@example.com",
        action: "Approved"
    },
    {
        roomtype: "Conference",
        title: "Annual Gala",
        date: "2023-09-25",
        timeslot: "6:00 PM",
        requestby: "jackson@example.com",
        action: "Pending"
    }
];


const admin = () => {
    return (
        <>
        <h3 style={{
            textAlign:"center",
            marginTop:"30px"
        }}>LIST OF ROOMS</h3>
        <div className='datatable'>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
        </>
    )
}

export default admin