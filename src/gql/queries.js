import { gql } from "@apollo/client";

export const GET_ALL_COUNIRIES = gql`
    query listCountries{
        countries {
        name
        code
        }
    }
`;

export const GET_ALL_STATES_OF_COUNTRY = gql`
    query listStates($name: String){
        countries(filter:{
        name: {
            eq: $name
        }
        })
        {
        name
        code
        states {
            code
            name
        }
        }
    }
`;