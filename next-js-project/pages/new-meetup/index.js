//our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    function addMeetupHandler(enteredData) {
        console.log(enteredData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
};

export default NewMeetupPage;