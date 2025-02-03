type Props = {
  txt: string;
  className?: string;
}

export default function Title({ txt, className }: Props) {
  return (
    <h1 className={className}>{txt}</h1>
  );
}
