import { useMainPageContext } from "../contexts/MainPageContext";
import { AuthorizationType } from "../types/mainRequest.types";
import AuthorizationInput from "./AuthorizationInput";

const Authorization = () => {
  const {
    selectedTabData,
    changeTabAuthorizationTypeHandler,
    changeTabUsernameHandler,
    changeTabPasswordHandler,
    changeTabTokenHandler,
  } = useMainPageContext();
  const { authorizationData } = selectedTabData;
  const { authorizationType, username, password, token } = authorizationData;

  const getAuthorizationInput = () => {
    if (authorizationType === AuthorizationType.None) return null;
    if (authorizationType === AuthorizationType.Basic)
      return (
        <>
          <AuthorizationInput
            placeholder="Username"
            value={username}
            setValue={changeTabUsernameHandler}
          />
          <AuthorizationInput
            placeholder="Password"
            value={password}
            setValue={changeTabPasswordHandler}
          />
        </>
      );
    if (authorizationType === AuthorizationType.Bearer)
      return (
        <AuthorizationInput
          placeholder="Token"
          value={token}
          setValue={changeTabTokenHandler}
        />
      );
  };

  return (
    <div className="h-96">
      <div className="flex">
        {Object.entries(AuthorizationType).map(([key, value]) => (
          <button
            key={key}
            onClick={() => changeTabAuthorizationTypeHandler(value)}
            className={`${
              authorizationType === value ? "bg-yellow-500" : "bg-gray-900"
            } text-white px-4 py-2`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-col ">{getAuthorizationInput()}</div>
    </div>
  );
};

export default Authorization;
