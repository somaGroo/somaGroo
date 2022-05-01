import DisplayData from './DisplayData';
import menteeUserData from './menteeUserData.js';
import mentorUserData from './mentorUserData.js';

function needDisplayUser(fullUserData, searchName, searchPageNumber, userNumberPerPage, setSearchPageNumber){
    const userNumber = fullUserData.length;
    let count = 0;
    let acceptedNumber = 0;
    const displayUser = [];
    const minAcceptedNumber = (searchPageNumber - 1) * userNumberPerPage;
    const maxAcceptedNumber = searchPageNumber * userNumberPerPage;
    while(count < userNumber){
        if (fullUserData[count].name.includes(searchName)){
            if (acceptedNumber >= minAcceptedNumber && acceptedNumber < maxAcceptedNumber){
                displayUser.push(fullUserData[count]);
            }
            acceptedNumber += 1;
        }
        count += 1;
    }
    if (acceptedNumber <= minAcceptedNumber){
        setSearchPageNumber(Math.round((acceptedNumber - 1) / userNumberPerPage) + 1);
    }
    return displayUser;
}

export default function SearchData(props){
    const {searchName, searchRole, searchPageNumber, userNumberPerPage, setSearchPageNumber} = props;
    let fullUserData = menteeUserData.user;
    if (searchRole === "Mentee"){
        fullUserData = menteeUserData.user;
    } else {
        fullUserData = mentorUserData.user;
    }
    const displayUser = needDisplayUser(fullUserData, searchName, searchPageNumber, userNumberPerPage, setSearchPageNumber);
    return (displayUser.map(user => {
        return (
            <DisplayData key={user.swm_no} userData = {user}/>
        );
    }));
}