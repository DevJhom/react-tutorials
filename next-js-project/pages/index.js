import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A tech conference",
    image:
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzkxNDE0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    address: "Brussels, Belgium",
    description: "A glance at new AI technologies",
  },
  {
    id: "m2",
    title: "A robotic conference",
    image:
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzkxNDE0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    address: "Osaka, Japan",
    description: "A glance at robotic and automation",
  },
];

const HomePage = (props) => {

  return (
      <MeetupList meetups={props.meetups} />
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
