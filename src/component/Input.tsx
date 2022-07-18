import React, { useReducer } from "react";
import { validate } from "../util/vaildator";
import { ValidatorTypes } from "../util/vaildator";
// input을 사용하는 컴포넌트에서 받아올 props 타입
interface childProps {
  element: string;
  id: string;
  type: string;
  label: string;
  placeholder: string;
  errorText: string;
  validators: ValidatorTypes[];
  rows?: number;
}
interface inputState {
  value: string;
  isBlur: boolean;
  isValid: boolean | undefined;
}
type Actions =
  | { type: "CHANGE"; payload: string; validators: ValidatorTypes[] }
  | { type: "BLUR" };

// inputReducer (state(상태값 : inputState) , action)
const inputReducer = (state: inputState, action: Actions) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };
    case "BLUR":
      return { ...state, isBlur: true };
    default:
      return { ...state };
  }
};

const Input = ({
  id,
  label,
  element,
  type,
  placeholder,
  errorText,
  validators,
}: childProps) => {
  // useReducer() 훅은 인자로 reducer함수, state 순서로 받는다
  // dispatch는 상태변화를 일으키고 , 알어난 상태 변화에 따른 처리는 inputReducer는 처리해준다.
  // 두번쨰 인자는 inputState의 초기값이다
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isBlur: false,
    isValid: false,
  });

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      // dispatch는 액션 값을 갖는다
      type: "CHANGE",
      payload: e.currentTarget.value,
      validators: validators,
    });
  };

  // isBlur를 조작하기 위한 함수 실행
  const onBlur = () => {
    dispatch({
      type: "BLUR",
    });
  };

  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={inputState.value}
    onChange={onChangeHandle}
    onBlur={onBlur}
  />;

  return (
    <div>
      <input />
    </div>
  );
};

export default Input;
