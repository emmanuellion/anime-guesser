import {Button} from "antd";
import Link from "next/link";

export default function Main() {
  return (
    <div className={"w-screen h-screen flex items-center justify-around"}>
      <Button color="default" variant="solid">
          <Link href="/ranking">Ranking</Link>
      </Button>
        <Button color="default" variant="solid">
            <Link href="/anime">Guess anime</Link>
        </Button>
        <Button color="default" variant="solid">
            <Link href="/character">Guess character</Link>
        </Button>
    </div>
  );
}
