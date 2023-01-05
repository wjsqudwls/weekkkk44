import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoID } from "../redux/modules/todos";
import styled from "styled-components";

const Detail = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoID(id));
  }, [dispatch, id]);

  return (
    <StAll>
      <StDetailBox>
        <div>
          <StDialogHeader>
            <div>ID :{todos.id}</div>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </button>
          </StDialogHeader>

          <StTitle>{todos.title}</StTitle>
          <Stcontents>{todos.contents}</Stcontents>
        </div>
      </StDetailBox>
    </StAll>
  );
};

export default Detail;

const StDetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StAll = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const Stcontents = styled.main`
  padding: 0 24px;
`;
