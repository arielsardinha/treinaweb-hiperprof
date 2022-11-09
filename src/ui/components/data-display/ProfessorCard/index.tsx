import { Button, Typography } from "@mui/material";
import {
  BoxAvatarStyed,
  BoxCardStyled,
  BoxContainsStyled,
  ImageStyled,
} from "./styles";

export default function ProfessorCard() {
  return (
    <BoxCardStyled>
      <BoxAvatarStyed>
        <ImageStyled src="https://github.com/arielsardinha.png" alt="" />
      </BoxAvatarStyed>
      <BoxContainsStyled>
        <div className="text-container">
          <Typography variant="h6" className="descricao" paragraph>
            Nome
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            className="descricao"
            variant="body2"
            paragraph
          >
            descrição Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora laborum expedita cumque exercitationem explicabo rerum
            corporis minima veritatis illum nemo deserunt aliquid ipsa optio,
            modi veniam consequuntur animi? Mollitia, enim? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Reprehenderit inventore
            eveniet blanditiis, eligendi iste veniam minus nemo voluptatum nulla
            deleniti nisi, quasi rem vero dignissimos! Totam provident beatae
            numquam exercitationem.
          </Typography>
        </div>
        <Button variant="outlined" color="inherit" onClick={() => {}}>
          Ver detalhes
        </Button>
      </BoxContainsStyled>
    </BoxCardStyled>
  );
}
