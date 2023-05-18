import { useState } from "react";
import DStyles from "./Donate.module.scss";

type Props = {};

const Donate = (props: Props) => {
  const [donationType, setDonationType] = useState<"once" | "recurring">(
    "once"
  );
  const [donationAmount, setDonationAmount] = useState(0);

  return (
    <div className={DStyles.donateContainer}>
      <h3>Donate!</h3>
      <p>
        Donate one time or setup a recurring donation to support your
        community!
      </p>
      <h4>Donation Type</h4>
      <button
        className={`${DStyles.btnDonateTypeOnce} ${
          donationType === "once" ? DStyles.selected : ""
        }`}
        onClick={() => setDonationType("once")}
      >
        One time
      </button>
      <button
        className={`${DStyles.btnDonateTypeRecurring} ${
          donationType === "recurring" ? DStyles.selected : ""
        }`}
        onClick={() => setDonationType("recurring")}
      >
        Recurring
      </button>
      <h4>Donation Amount</h4>
      <button
        onClick={() => setDonationAmount(5)}
        className={`${DStyles.btnDonateAmt} ${
          donationAmount === 5 && DStyles.selected
        }`}
      >
        $5
      </button>
      <button
        onClick={() => setDonationAmount(10)}
        className={`${DStyles.btnDonateAmt} ${
          donationAmount === 10 && DStyles.selected
        }`}
      >
        $10
      </button>
      <button
        onClick={() => setDonationAmount(25)}
        className={`${DStyles.btnDonateAmt} ${
          donationAmount === 25 && DStyles.selected
        }`}
      >
        $25
      </button>
      <label htmlFor="custom-amount-input">Custom Amount:</label>
      <input
        type="number"
        step="0.01"
        name="custom-amount"
        id="custom-amount-input"
        className={DStyles.customAmountInput}
        value={donationAmount}
        onChange={(e) => setDonationAmount(Number(e.target.value))}
      />
    </div>
  );
};

export default Donate;
