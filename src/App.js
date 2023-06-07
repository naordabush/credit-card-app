import style from "./styles.module.css";
import Card from "./components/card/Card";
import DataCard from "./components/dataCard/DataCard";

export default function App() {
  return (
    <div className={style.App}>
      <Card />
      <div className={style.space} />
      <DataCard />
    </div>
  );
}
