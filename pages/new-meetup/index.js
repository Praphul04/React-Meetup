//our-domain.com/new-meetup
import NewMeetupFrom from '../../components/meetups/NewMeetupForm';


function NewMeetupPage() {
function addMeetupHandler(enteredMeetupData){
console.log(enteredMeetupData);
}

return <NewMeetupFrom onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage;