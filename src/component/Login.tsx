import React from "react";
import Input from "./Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../util/vaildator";

const Login = () => {
  return (
    <div>
      <h2>WelcomeLogin</h2>
      <form>
        <Input
          id="email"
          label="EMAIL"
          element="input"
          type="text"
          placeholder="이메일을 입력해줘"
          errorText="이메일 형식이 올바르지 않아"
          validators={[VALIDATOR_EMAIL(), VALIDATOR_MINLENGTH(8)]}
        />
        <Input
          id="password"
          label="PASSWORD"
          element="input"
          type="password"
          placeholder="비밀번호는 8~20자 이내로 입력하세요"
          errorText="비밀번호는 8~20자 이내로 입력해야해"
          validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_MAXLENGTH(20)]}
        />
        <Input
          id="name"
          label="NAME"
          element="input"
          type="text"
          placeholder="이름을 입력하세요"
          errorText="이름은 2글자 이상이여야 해"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(2)]}
        />
      </form>
    </div>
  );
};

export default Login;
