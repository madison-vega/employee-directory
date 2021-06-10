import React from 'react'
import Table from '../components/Table'

const Home = () => {
    const getData = async () => {
        const res = await fetch('https://randomuser.me/api/')
        const data = await res.json();
        console.log(data);
    }






    return (
        <Table />
    )
}
