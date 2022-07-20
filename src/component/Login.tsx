import React from "react";
import Input from "./Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "./util/validator";

const Login = () => {
  return (
    <div>
      <Input
        id="email"
        label="EMAIL"
        type="email"
        element="input"
        placeholder="이메일을 입력해주세요"
        errorText="이메일 형식이 올바르지 않아"
        validators={(VALIDATOR_EMAIL(), VALIDATOR_MINLENGTH(8))}
      />
    </div>
  );
};

export default Login;
