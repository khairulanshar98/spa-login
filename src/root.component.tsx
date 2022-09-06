// @ts-ignore
import { Button } from "@khairul/nav";

export default function Root(props) {
  return (<>
    <section>{props.name} is mounted!</section>
    <Button.default module='Login' />
  </>)
}
