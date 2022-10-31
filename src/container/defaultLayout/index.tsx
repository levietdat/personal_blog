import { Container } from "@mui/system";
import { BottomHeaderSecsion, Header, MenuOptions } from "../../components";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: "46px" }}>
        <BottomHeaderSecsion />
        <MenuOptions />
      </Container>
    </>
  );
};

export default DefaultLayout;
