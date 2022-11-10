import { ProfessorInterface } from "@data/@types/professor";
import ProfessorCard from ".";
import { BoxCardItemStyled, ListStyled } from "./styles";

export interface ListaProfessorCardProps {
  professores: ProfessorInterface[];
  onClick: (professor: ProfessorInterface) => void;
}

export default function ListaProfessorCard({
  professores,
  onClick
}: ListaProfessorCardProps) {
  return (
    <ListStyled>
      {professores.map((professor) => {
        return (
          <BoxCardItemStyled key={professor.id}>
            <ProfessorCard professor={professor} onClick={onClick} />;
          </BoxCardItemStyled>
        );
      })}
    </ListStyled>
  );
}
