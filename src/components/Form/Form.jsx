import { v4 as uuidv4 } from "uuid"; // uuidv4 uuid 이름을 짓겠다
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 20px;

  & input {
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
  }
  & button {
    margin: 10px;
    padding: 5px 10px;
    border-radius: 5px;
  }
  & button:hover {
    background-color: #6cd88b;
  }
`;

const Form = (props) => {
  const handleSubmitInputs = (event) => {
    event.preventDefault();
    const date = event.target["date"].value;
    const category = event.target["category"].value;
    const cost = event.target["cost"].value;
    const description = event.target["description"].value;

    props.setList((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(), // 암호를 만들어줌. id 고유값
          date: date, // date,
          category: category, // category,
          cost: cost, // cost,
          description: description, // description,
        },
      ];
    });
  };

  return (
    <StyledForm onSubmit={handleSubmitInputs}>
      <input name="date" type="text" placeholder="날짜" />
      <input name="category" type="text" placeholder="지출 항목" />
      <input name="cost" type="number" placeholder="지출 금액" />
      <input name="description" type="text" placeholder="지출 내용" />
      <button>저장</button>
    </StyledForm>
  );
};

export { Form };

// name = "각각의 이름"
// event.target["name"]

// Form Section : 폼 태그 안에 날짜, 항목, 금액, 내용, 버튼 이벤트 발생
// setList 가져오는 것. 이벤트 일어났을때 가져오는 것.

// props를 통해 setList라는 새 값으로 바꿔주는 함수를 가져온다.
// prev는 현재상태(이전상태-과거형)의 값을 말하는 것. 이벤트 발생시 기존 배열값 유지 + 새로운 값 보여주겠다
// prev 안에 콜백함수 필요한 이유 ? 이전 상태값이 필요해서

// 여기까지하면 form 태그 실제 구동시 잘 출력되는것으로 보임
