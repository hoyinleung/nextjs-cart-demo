type Props = {
  txt:string
}
export default function Title({txt}:Props) {
  return (
      <h1>{txt}</h1>
  )
}