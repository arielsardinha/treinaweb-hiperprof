import { ResponseErroInterface } from "@data/@types/axios_response";
import {
  LoginErroInterface,
  LoginInterface,
  ResponseLoginInterface,
} from "@data/@types/login";
import { ApiService } from "@data/services/ApiService";
import { AxiosError, AxiosResponse } from "axios";
import { FormEvent, useState } from "react";

export default function useLogin() {
  const [valuesLogin, setValuesLogin] = useState<LoginInterface>(
      {} as LoginInterface
    ),
    [messageErro, setMessageErro] = useState<LoginErroInterface>(),
    [loading, setLoading] = useState(false),
    [snackMessage, setSnackMessage] = useState("");
  function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (!loading) {
      console.log(valuesLogin);
      setLoading(true);
      ApiService.post("/api/auth/login", valuesLogin)
        .then(({ data }: AxiosResponse<ResponseLoginInterface>) => {
          localStorage.setItem("token_hiperprof", data.token);
          localStorage.setItem("refresh_token_hiperprof", data.refresh_token);
        })
        .catch(
          ({
            response,
          }: AxiosError<ResponseErroInterface<LoginErroInterface>>) => {
            if (response) {
              const { message, errors } = response.data;
              setMessageErro(errors);
              setSnackMessage(message ?? "");
            }
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return {
    setValuesLogin,
    messageErro,
    handleLogin,
    loading,
    snackMessage,
    setSnackMessage,
  };
}
