import {gql} from "@apollo/client";

export const GET_CONTINENTS = gql`query getContinents {
    continents {
        name
        children: countries  {
            code
            name
            children: languages{
                name
            }
        }
    }
}`