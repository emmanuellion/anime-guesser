import {Button} from "antd";
import Link from "next/link";
import s from "./page.module.sass";

export default function Main() {
  return (
      <div className={"w-screen h-screen flex items-center"}>
          <div className={s.bgo}>
              <div className={s.blur}></div>
              <h3>Classement</h3>
              <Button color="default" variant="solid">
                  <Link href="/ranking">Ranking</Link>
              </Button>
          </div>
          <div className={s.bgt}>
              <div className={s.blur}></div>
              <h3>Rechercher un anime</h3>
              <Button color="default" variant="solid">
                  <Link href="/anime">Guess anime</Link>
              </Button>
          </div>
          <div className={s.bgh}>
              <div className={s.blur}></div>
              <h3>Rechercher un personnage</h3>
              <Button color="default" variant="solid">
                  <Link href="/character">Guess character</Link>
              </Button>
          </div>
      </div>
  );
}
