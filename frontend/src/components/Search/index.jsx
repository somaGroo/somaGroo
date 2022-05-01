import React from "react";
import $ from "./style.module.scss";
import UserList from "./SearchData"

export default function UserSearchForm(){

    const USERROLE = "targetUserRole";
    const [targetUserName, setTargetUserName] = React.useState("");
    const [targetUserRoleClass, setTargetUserRoleClass] = React.useState($.Mentee);
    const [targetUserRole, setTargetUserRole] = React.useState("Mentee");
    const [displayData,setDisplayData] = React.useState();
    const [searchPageNumber, setSearchPageNumber] = React.useState(1);
    const [userNumberPerPage, setUserNumberPerPage] = React.useState("20");

    const onTargetUserChange = (event) => {
        const targetUserName = event.target.value;
        setTargetUserName(targetUserName);
    }

    const SwitchTargetUserRole = (event) => {
        if (event.target.className === $.Mentee){
            setTargetUserRoleClass($.Mentor);
            setTargetUserRole("Mentor");
        }
        else{
            setTargetUserRoleClass($.Mentee);
            setTargetUserRole("Mentee");
        }
    }
    const pageDown = (event) => {
        setSearchPageNumber((current) => (current > 1 ? current - 1 : current));
    }
    const pageUp = (event) => {
        setSearchPageNumber(current => (current + 1));
    }
    
    return (
        <div>
            <span className = {$.searchQuery}>
                <h1 className = {$.searchTitle}>소마인들의 롤링 페이퍼<br />🎄소마그루</h1>
                <article className = {$.buttonSpace}>
                    <button
                        id="userRole"
                        type="button"
                        value={targetUserRole}
                        className={targetUserRoleClass}
                        onClick={SwitchTargetUserRole}
                    >{targetUserRole}</button>
                </article>
                <article className = {$.inputSpace}>
                <input
                    value={targetUserName}
                    className={$.underline}
                    type="text"
                    id="searchUser"
                    placeholder="이름 검색"
                    onChange={onTargetUserChange}
                />
                </article>
            </span>

            <article className={$.pageControl}>
                <button
                    type="button"
                    className = {$.leftArrow}
                    onClick={pageDown}
                >←</button>
                <p
                    className = {$.pageNumber}
                >
                {searchPageNumber}
                </p>
                <button
                    type="button"
                    className = {$.rightArrow}
                    onClick={pageUp}
                >→</button>
            </article>
            <div className="userList">
                <UserList
                    searchName = {targetUserName}
                    searchRole = {targetUserRole}
                    searchPageNumber = {searchPageNumber}
                    userNumberPerPage = {userNumberPerPage}
                    setSearchPageNumber = {setSearchPageNumber}
                />
            </div>
        </div>
    )
}
