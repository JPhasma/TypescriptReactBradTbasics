// create Props as an interface
export interface Props {
  title: string;
  color?: string; // optional, as this has an ?
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : 'deeppink' }}>
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
