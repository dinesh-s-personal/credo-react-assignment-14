import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_COUNIRIES } from "../gql/queries";
import { Button, Table } from "react-bootstrap";

export const FirstPage = () => {

    const { loading, error, data } = useQuery(GET_ALL_COUNIRIES);

    const btnGetStates = () => {

    }

    return <div>
        <h1>Show the list of contries using GraphQL</h1>

        {loading && <p>Loading...</p>}

        {error && <p>Something went wrong. Contry details are not available.</p>}

        {!loading && !error && 
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Country Name</th>
                            <th>Country Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.countries.map((country,key) => {
                            return <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{country.name}</td>
                                <td>{country.code}</td>
                                <td>
                                    <Button variant="link" onClick={btnGetStates}>See States</Button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>}

    </div>
}