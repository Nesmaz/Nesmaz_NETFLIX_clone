import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {

  return (
<div id='homepg' className="">
  <Main />
  
  <Row Rid='r1' title='Trending Now' fetchUrl={requests.requestTrending} />
  <Row Rid='r2' title='Top Rated Shows' fetchUrl={requests.requestTopRated} />
  <Row Rid='r3' title='Popular Shows' fetchUrl={requests.requestPopular} />
  <Row Rid='r4' title='Playing Now Movies' fetchUrl={requests.requestNowPlaying} />
  <Row Rid='r5' title='Upcoming Movies' fetchUrl={requests.requestUpcoming} />
  <Row Rid='r6' title='Recommended Movies' fetchUrl={requests.requestNow} />
  <Row Rid='r7' title='Based on true story' fetchUrl={requests.requestShows} />
</div>
  )
}

export default Home