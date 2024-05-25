import mockData from "./../../mock.json";
import styled from "styled-components";

const StyledList = styled.div`
  & div {
    background-color: #b4ffc9;
    border-radius: 20px;
    margin: 20px;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
  }
  & .date {
    font-size: 12px;
    font-weight: 200;
    width: 100%;
  }
  & .category {
    font-size: 17px;
  }
  & .cost {
    font-weight: 600;
    text-align: right;
  }
`;

const List = (props) => {
  const data = props.list;

  return (
    <StyledList>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p className="date">{item.date}</p>
            <p className="category">
              {item.category}-{item.description}
            </p>
            <p className="cost">{item.cost} 원</p>
          </div>
        );
      })}
    </StyledList>
  );
};

export { List };

// id
// date
// category
// description
// cost

// list Section : map은 키값이 꼭 필요하고 데이터에서 날짜, 카테고리, 금액 가져옴
// props는 부모가 자식에게 전해주는 값
// 부모 컴포넌트가 전해주는 properties를 모아서 props라는 객체로 전달
// <List list={list} /> attribute 와 value
// props = {list: list} key와 value
// list에 접근 => props.list

// styled components 적용
