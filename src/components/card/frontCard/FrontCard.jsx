import frontStyles from "./frontCard.module.css";
import appStyle from "../../../styles.module.css";
import { useSelector } from "react-redux";

function FrontCard() {
  const numberCard = useSelector((state) => state.numberCard);
  const cardHolder = useSelector((state) => state.cardHolder);
  const expires = useSelector((state) => state.expires);

  return (
    <div className={`${frontStyles.container} ${appStyle.paddingCard}`}>
      <div className={frontStyles.rowCards}>
        <div className={frontStyles.cip}></div>
        <div className={`${frontStyles.visaText} ${frontStyles.textBorder}`}>VISA</div>
      </div>
      <div className={`${frontStyles.rowCards} ${appStyle.centerElem} ${frontStyles.numberCard}`}>
        <span>{numberCard}</span>
      </div>
      <div className={`${frontStyles.rowCards}`}>
        <div className={`${appStyle.column}`}>
          <span className={`${appStyle.xxSmallFont}`}>CARD HOLDER</span>
          <span>{cardHolder}</span>
        </div>
        <div className={`${appStyle.column}`}>
          <span className={`${appStyle.xxSmallFont}`}>EXPIRES</span>
          <span>{expires}</span>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
