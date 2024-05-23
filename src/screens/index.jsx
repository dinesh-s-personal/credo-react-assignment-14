import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_COUNIRIES } from "../gql/queries";
import SearchableTable from "../components/searchableTable";

export const CountryList = () => {

    const { loading, error, data } = useQuery(GET_ALL_COUNIRIES);

    return <div style={{margin: "10px"}}>
        <h1 className="me-auto">Show the list of contries using GraphQL</h1>

        {loading && <p>Loading...</p>}

        {error && <p>Something went wrong. Contry details are not available.</p>}

        {!loading && !error && data &&
            <div>
                <SearchableTable data={data.countries}/>
            </div>}
    </div>
}