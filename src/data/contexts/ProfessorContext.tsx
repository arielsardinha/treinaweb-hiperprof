import { ProfessorInterface } from "@data/@types/professor";
import { getUser } from "@data/services/MeService";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ProfessorReducerInterface {
  ProfessorState: ProfessorInterface | undefined;
  ProfessorDispatch: Dispatch<SetStateAction<ProfessorInterface | undefined>>;
}

const initialValue: ProfessorReducerInterface = {
  ProfessorDispatch: () => {},
  ProfessorState: undefined,
};

export const ProfessorContext = createContext(initialValue);

export const ProfessorProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [professor, setProfessor] = useState<ProfessorInterface>();

  useEffect(() => {
    getUser().then(({ data }) => {
      setProfessor(data);
    });
  }, []);

  return (
    <ProfessorContext.Provider
      value={{ ProfessorState: professor, ProfessorDispatch: setProfessor }}
    >
      {children}
    </ProfessorContext.Provider>
  );
};
