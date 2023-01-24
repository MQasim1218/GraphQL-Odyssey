import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";


const TRACK_QUERY = gql`
query SingleTrackQuery($trackId: ID!) {
    // ! Calling endpoint track!!
    track(id: $trackId) {
        id
        title
        author {
            id
            name
            photo
        }
        modules {
            id
            title
        }
        length
        thumbnail
        modulesCount
        numOfViews
        description
    }
}
`


const Track = ({ tarckId }) => {
    return (
        <Layout></Layout>
    )
}


export default Track