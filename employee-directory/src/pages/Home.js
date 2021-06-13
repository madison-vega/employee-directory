import React from 'react'
import Table from '../components/Table'

// useEffect to call data API, store data in global variable, save array to state

const Home = () => {
    const [employeeDataState, setEmployeeDataState] = React.useState([])







    return (
        <Table />
    )
}

// {employeeDataState.map(employee => {
    // return (
    //     <tr>

    //         <td {employee.firstname}<td>
    //     </tr>
    // )
// })}
