import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
/* const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first meetup",
    image:
      "https://thumbs.dreamstime.com/b/hamburg-city-hall-sunset-central-square-seat-local-government-free-hanseatic-germany-123319260.jpg",
    description: "Hamburg city, Germany",
    address: "Hamburg City Hall",
  },
  {
    id: "m2",
    title: "The second meetup",
    image:
      "https://previews.123rf.com/images/jojjik/jojjik1705/jojjik170500081/77962773-espl%C3%A9ndida-vista-de-la-ma%C3%B1ana-de-volksgarten-con-el-palacio-imperial-de-hofburg-paisaje-urbano-solea.jpg?fj=1",
    description: "Vienna, Austria",
    address: "Hofburg palace",
  },
  {
    id: "m3",
    title: "The third meetup",
    image:
      "https://thumbs.dreamstime.com/z/st-catherine-church-frankfurt-germany-aug-also-called-katharinenkirche-hauptwache-main-81748697.jpg",
    description: "Frankfurt city, Germany",
    address: "Catherine Church, Frankfurt",
  },
]; */
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>European Meetups</title>
        <meta name="description" content="Beatiful places in Europe" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data fron an API
  const client = await MongoClient.connect(
    "mongodb+srv://nnquangnd:quang123456@cluster0.f5ute.mongodb.net/europeanMeetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
  };
}
export default HomePage;
