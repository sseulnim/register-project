import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { useState } from "react";
import mock from "./mock.json";

function App() {
  const [list, setList] = useState(mock);
  console.log(list);

  return (
    <div>
      <Form setList={setList} />
      <List list={list} />
    </div>
  );
}

export default App;

// form태그 : 리스트를 바꿀수 있는 함수 필요 (변경값)
// list태그 : 보여주는게 필요해서 list 가져감 (원본값). list 변수이름 변경 가능
// {list}를 List.jsx에 props로 넘겨줌. 여기서 List는 더이상 작업할 게 없음
// list={list} : 프로퍼티
