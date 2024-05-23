import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_COUNIRIES } from "../gql/queries";
import SearchableTable from "../components/searchableTable";
import { Button, Stack } from "react-bootstrap";

export const CountryList = () => {

    const { loading, error, data } = useQuery(GET_ALL_COUNIRIES);
    const [isDark, setDarkTheme] = useState(true);

    const btnChangeTheme = () => {
        setDarkTheme(!isDark);
    }

    return <div style={{margin: "10px"}} className={isDark ? 'App-Dark' : 'App-Lite'}>
        <Stack direction="horizontal" gap={3}>
            <h1 className="me-auto">Show the list of contries using GraphQL</h1>
            <Button onClick={btnChangeTheme} variant="secondary">Change Theme</Button>
        </Stack>

        {loading && <p>Loading...</p>}

        {error && <p>Something went wrong. Contry details are not available.</p>}

        {!loading && !error && data &&
            <div>
                <SearchableTable data={data.countries} theme={isDark}/>
            </div>}
    </div>
}