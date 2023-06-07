import frontStyles from "../frontCard/frontCard.module.css";
import appStyle from "../../../styles.module.css";
import retroStyle from "./retroCard.module.css";
import { useSelector } from "react-redux";

function RetroCard() {
  const ccv = useSelector((state) => state.ccv);
  return (
    <div className={`${frontStyles.container}`}>
      <div className={frontStyles.rowCards}>
        <div
          style={{
            backgroundColor: "black",
            height: "65%",
            width: "100%",
            alignSelf: "end",
          }}
        ></div>
      </div>
      <div className={`${frontStyles.rowCards} ${appStyle.centerElem}`} style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "85%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          className={`${appStyle.column}`}
        >
          <span className={appStyle.xxSmallFont} style={{ display: "flex", alignSelf: "flex-end" }}>
            CCV
          </span>
          <div className={retroStyle.ccv}>{ccv}</div>
        </div>
      </div>
      <div className={`${frontStyles.rowCards}`} style={{ justifyContent: "flex-end" }}>
        <div className={`${frontStyles.visaText} ${frontStyles.textBorder} ${appStyle.paddingCard}`}>VISA</div>
      </div>
    </div>
  );
}

export default RetroCard;
