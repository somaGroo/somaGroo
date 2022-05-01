import React from 'react';
import $ from "./style.module.scss";

const BUTTONIMAGELINK="image.jpg"

export default function UserList(props){
    const {userData} = props;
    const link = `${window.location.href}/../tree/${userData.id}`;
    return (
        <article className={$.searchedUserDataArticle}>
            <a href={link} className={$.noUnderLine}>
                <h2 className={$.searchedUserData}>{userData.name} ({userData.swm_no})</h2>
            </a>
        </article>
    );
}
