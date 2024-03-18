import {
  UseMutateAsyncFunction,
  UseMutateFunction,
  useMutation,
} from "@tanstack/react-query";
import { callMainRequest } from "../api/mainRequest";
import { AxiosResponse } from "axios";
import { MainRequest } from "../types/mainRequest.types";

export type UseMainRequestTypeOutput = {
  isPendingMainRequest: boolean;
  isErrorMainRequest: boolean;
  errorMainRequest: string;
  doMainRequest: UseMutateFunction<AxiosResponse, Error, MainRequest>;
  doMainRequestAsync: UseMutateAsyncFunction<AxiosResponse, Error, MainRequest>;
  mainRequestData: AxiosResponse | undefined;
};

export const useMainRequest = (): UseMainRequestTypeOutput => {
  const { isError, isPending, error, mutate, mutateAsync, data } = useMutation<
    AxiosResponse,
    Error,
    MainRequest
  >({
    mutationKey: ["mainRequest"],
    mutationFn: callMainRequest,
  });

  return {
    isPendingMainRequest: isPending,
    isErrorMainRequest: isError,
    errorMainRequest: error?.message ?? "",
    doMainRequest: mutate,
    doMainRequestAsync: mutateAsync,
    mainRequestData: data,
  };
};
