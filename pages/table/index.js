import Head from "next/head"
import { useEffect, useState } from "react"

const table = () => {
    const [userData, setuserData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/userapi' || 'https://nextjsapp-two-semil.vercel.app/api/userapi').then((res) => res.json()).then((data) => setuserData([...data]))
    }, [])
    
  return (
    <>
        <Head>
            <title>Table</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="container text-center">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Gender</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData?.map((x,i) => {
                            return <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.email}</td>
                                <td>{x.gender}</td>
                                <td>
                                    <button className="btn btn-success">Show</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default table