import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Old Town of Munich 72, 1234 Germany',
        description: 'This is First Meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'First City 45, 1234 India',
        description: 'This is Second Meetup!'
    }
]
function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
  }

//   export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }
  
  export async function getStaticProps() {
    // fetch data from an API
    return {
      props: {
        meetups: DUMMY_MEETUPS
      },
      revalidate: 1
    }; 
  }
  
  export default HomePage;