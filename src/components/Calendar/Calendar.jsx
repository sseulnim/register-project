import styled from "styled-components";

const StDiv = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  padding: 0;

  li {
    width: 100%;
    list-style: none;
    button {
      width: 100%;
    }
  }
`;

const Calender = ({ months, setCurrMonth }) => {
  return (
    <StDiv>
      {months.map((month) => {
        // month 에는 각 월별 숫자가 들어온다.
        return (
          <li key={month}>
            <button
              onClick={() => {
                setCurrMonth(month); // 클릭하면 월이 바뀜
              }}
            >
              {month}월
            </button>
          </li>
        );
      })}
    </StDiv>
  );
};

export default Calender;
