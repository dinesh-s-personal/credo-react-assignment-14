import React from "react";
import { GET_ALL_STATES_OF_COUNTRY } from "../gql/queries";
import { useLazyQuery } from "@apollo/client";
import { Button, Stack, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { gqlAppRoutes } from "../router/routes";

export const StateList = () => {

    const objNavigate = useNavigate();
    const { countryName } = useParams();
    const [getStates, { loading, error, data }] = useLazyQuery(GET_ALL_STATES_OF_COUNTRY);

    React.useEffect(() => {
        getStates({
            variables: {
                name: countryName
            }
        });
        // eslint-disable-next-line
    },[]);

    const btnBack = () => {
        objNavigate(gqlAppRoutes.countries);
    }

    return <div style={{margin: "10px"}}>
        <Stack direction="horizontal" gap={3}>
            <h1 className="me-auto">Show the list of states of {countryName} using GraphQL</h1>
            <Button onClick={btnBack} variant="secondary">Back</Button>
        </Stack>
        <br/>

        {loading && <p>Loading...</p>}

        {error && <p>Something went wrong. Contry details are not available.</p>}

        {!loading && !error && data &&
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>State Name</th>
                            <th>State Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(data.countries[0].states.length === 0) &&
                            <tr><td colSpan={3}>States details are not available to display..</td></tr>
                        }
                        {(data.countries[0].states.length > 0) &&
                            data.countries[0].states.map((state,key) => {
                            return <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{state.name}</td>
                                <td>{state.code}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>}
    </div>
}