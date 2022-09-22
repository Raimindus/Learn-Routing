import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function Newmeetuppages(){
    const history= useNavigate();
    function addMeetupHandler(meetupData){
        fetch('https://learn-database-af336-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            header: {
                'Content-type': 'application/json'
            }   
        }
        ).then(() => {
            history('/');
        });
    }

    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
}

export default Newmeetuppages;