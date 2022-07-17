// create Props as an interface
export interface Props {
  title: string;
  color?: string; // optional, as this has an ?
  opText?: string;
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : 'deeppink' }}>
        {props.title}
      </h1>
      <h2>{props.opText}</h2>
    </header>
  );
};

export default Header;
