import "./dataCard.css";
import { useDispatch } from "react-redux";
import { changeNumberCard, changeCardHolder, changeExpirationDate, changeCcv } from "../../redux/actions/cardActions";

function DataCard() {
  const dispatch = useDispatch();

  const handleCcv = (e) => {
    let value = e.target.value;
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    dispatch(changeCcv(value));
  };

  const handleCardNumber = (e) => {
    let value = e.target.value;
    // Remove non-digit characters
    value = value.replace(/\D/g, "");

    // Add spaces after every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Limit the input to 16 digits
    value = value.slice(0, 19);

    dispatch(changeNumberCard(value));
  };

  return (
    <div className={"container columns"}>
      <span>Card number</span>
      <input
        name={"cardNumber"}
        onChange={handleCardNumber}
        /*      onChange={(e) => {
          dispatch(changeNumberCard(e.target.value));
        }} */
      />
      <span>Card holder</span>
      <input
        name={"cardHolder"}
        onChange={(e) => {
          dispatch(changeCardHolder(e.target.value));
        }}
      />
      <div className={"date-ccv"}>
        <div className={"columns"}>
          <span>Expiration date</span>
          <input
            type="month"
            name={"date"}
            onChange={(e) => {
              dispatch(changeExpirationDate(e.target.value));
            }}
          />
        </div>
        <div className={"columns"} style={{ textAlign: "end" }}>
          <span>CCV</span>
          <input className={"ccv"} type="number" name={"ccv"} onChange={handleCcv} />
        </div>
      </div>
    </div>
  );
}

export default DataCard;
