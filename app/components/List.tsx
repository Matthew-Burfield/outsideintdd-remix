interface Props {
  children: React.ReactNode;
}

export default function List(props: Props) {
  return <ul>{props.children}</ul>;
}
