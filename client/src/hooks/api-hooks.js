import {useQuery} from "@apollo/client";
import {GET_CONTINENTS} from '../graphql/queries'

export const useGetContinents = () => {
    const {
        data, loading, error
    } = useQuery(GET_CONTINENTS)

    return {data, loading, error}
}