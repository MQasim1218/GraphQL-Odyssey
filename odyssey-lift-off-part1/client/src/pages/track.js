import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";


const TRACK_QUERY = gql`
query SingleTrackQuery($trackId: ID!) {
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
            length
        }
        length
        thumbnail
        modulesCount
        numOfViews
        description
    }
}
`


const Track = ({ trackId }) => {

    const { data, loading, error } = useQuery(TRACK_QUERY, {
        variables: {
            trackId: trackId
        }
    })

    if (!loading) {
        console.log(data?.track)
    }

    return (
        <Layout>
            <QueryResult data={data} loading={loading} error={error}>
                <TrackDetail track={data?.track}></TrackDetail>
            </QueryResult>
        </Layout>
    )
}


export default Track