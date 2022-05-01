import React, { useState, useEffect } from "react";
import Xmas from "../../components/Xmas";
import PageLayout from "../../components/PageLayout";
import CardList from "../../components/CardList";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import $ from "./style.module.scss";
import API_URL from "../../api.js";

export default function TreePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const writeLetter = () => navigate(`/writeLetter/${id}`);
  const [cardListData, setCardListData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch(`${API_URL}/user/${id}`)
    .then((res)=>res.json())
    .then((data) => { 
      setCardListData(data);
      setIsLoading(false);
    });
  },[])

  return (
    <PageLayout>
      <button className={$.backButton} onClick={() => navigate(-1)}>이전</button>
      {!isLoading ?
        (<>
          <header className={$.header}>
            <span>{cardListData.swm_id}번</span>
            <span>{cardListData.role === 'mentee' ? '연수생' : '멘토'}</span>
            <span>{cardListData.name}님</span>
          </header>
          <Xmas />
          <CardList cardList={cardListData.papers} />
        </>) : (<Loading />)
      }
      <button className={$.write} type="button" onClick={writeLetter}>+</button>
    </PageLayout>
  );
}
