import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="/img/logo.svg"
        alt="juancas logo"
        className="small-logo"
        width={274}
        height={105}
      />
      <img
        src="/img/logo.svg"
        alt="juancas logo"
        className="big-logo"
        width={400}
        height={200}
      />
    </HeaderStyled>
  );
};

export default Header;
