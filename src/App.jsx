import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { useState } from "react";
import mock from "./mock.json";
import styled from "styled-components";
import Calender from "./components/Calendar/Calendar";

function App() {
  const [currMonth, setCurrMonth] = useState(4);
  const [list, setList] = useState(mock);
  const filteredList = list.filter((item) => {
    return Number(item.date.split("-")[1]) === currMonth;
    // 월 별로 분리하기
  });
  console.log(filteredList);
  const months = Array(12)
    .fill(0)
    .map((_, i) => {
      return i + 1;
    });
  // const months = [1,2,3,4,5,6,7,8,9,10,11,12]

  // Array(길이 정할수 있음. 숫자 넣기. 숫자만큼 요소 생김) // 배열 생성자
  // const arr = [];
  // fill() 배열에 쓰는 메소드. 배열의 요소들을 채워줌(undefined 안나오게 하려고)

  return (
    <div>
      <Form setList={setList} />
      <Calender months={months} setCurrMonth={setCurrMonth} />
      <List list={filteredList} />
    </div>
  );
}

export default App;

// form태그 : 리스트를 바꿀수 있는 함수 필요 (변경값)
// list태그 : 보여주는게 필요해서 list 가져감 (원본값). list 변수이름 변경 가능
// {list}를 List.jsx에 props로 넘겨줌. 여기서 List는 더이상 작업할 게 없음
// list={list} : 프로퍼티
