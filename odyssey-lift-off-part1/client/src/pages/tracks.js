import React from 'react';
import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card';
import { gql, useQuery } from '@apollo/client'



const TRACKS = gql`
query GetHomePageTracks {
  homepageTracks {
    id
    title
    author {
      id
      name
      photo
    }
    lengthInMins
    modulesCount
    thumbnail
  }
}
`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {

  const { data, loading, error } = useQuery(TRACKS)

  if (error) return `Error Occured!: ${error.message}`
  if (loading) return `Loading!`

  return <Layout grid>
    {/* {JSON.stringify(data)} */}
    <QueryResult data={data} error={error} loading={loading}>
      {data?.homepageTracks?.map((track, index) => <TrackCard track={track} key={track.id} />)}
    </QueryResult>
  </Layout>;
};

export default Tracks;
