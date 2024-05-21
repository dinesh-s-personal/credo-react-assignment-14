import { gql } from "@apollo/client";

export const GET_ALL_COUNIRIES = gql`
    query listCountries{
        countries {
        name
        code
        }
    }
`;