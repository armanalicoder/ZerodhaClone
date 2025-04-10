import React from "react";

function PricingDescription() {
  return (
    <div className="row">
      <h3 className="mb-3">Charges explained</h3>
      <div className="col-sm-6 p-3">
        <p>
          <b>Securities/Commodities transaction tax</b>
        </p>
        <p>
          Tax by the government when transacting on the exchanges. Charged as
          above on both buy and sell sides when trading equity delivery. Charged
          only on selling side when trading intraday or on F&O.
        </p>
        <p>
          When trading at Zerodha, STT/CTT can be a lot more than the brokerage
          we charge. Important to keep a tab.
        </p>

        <p>
          <b>Transaction/Turnover Charges</b>
        </p>
        <p>
          Charged by exchanges (NSE, BSE, MCX) on the value of your
          transactions.
        </p>
        <p>
          BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
          ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged
          into a new group X w.e.f 01.12.2017)
        </p>
        <p>
          BSE has revised transaction charges in SS and ST groups to ₹1,00,000
          per crore of gross turnover.
        </p>
        <p>
          BSE has revised transaction charges for group A, B and other
          non-exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
          W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December
          1, 2022.
        </p>
        <p>
          BSE has revised transaction charges in M, MT, TS and MS groups to ₹275
          per crore of gross turnover.
        </p>

        <p>
          <b>Call & Trade</b>
        </p>
        <p>
          Additional charges of ₹50 per order for orders placed through a dealer
          at Zerodha including auto square off orders.
        </p>

        <p>
          <b>Stamp charges</b>
        </p>
        <p>
          Stamp charges by the Government of India as per the Indian Stamp Act
          of 1899 for transacting in instruments on the stock exchanges and
          depositories.
        </p>

        <p>
          <b>NRI brokerage charges</b>
        </p>
        <ul>
          <li>₹100 per order for futures and options.</li>
          <li>
            For a non-PIS account, 0.5% or ₹100 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </li>
        </ul>

        <p>
          <b>Account with debit balance</b>
        </p>
        <p>
          If the account is in debit balance, any order placed will be charged
          ₹40 per executed order instead of ₹20 per executed order.
        </p>

        <p>
          <b>Charges for Investor's Protection Fund Trust (IPFT) by NSE</b>
        </p>
        <ul>
          <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
          <li>Options - ₹50 per crore + GST traded value (premium value).</li>
          <li>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </li>
        </ul>

        <p>
          <b>Margin Trading Facility (MTF)</b>
        </p>
        <ul>
          <li>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
          </li>
          <li>
            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
          </li>
          <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
        </ul>
      </div>
      <div className="col-sm-6 p-3">
        <p>
          <strong>GST</strong>
        </p>
        <p>
          Tax levied by the government on the services rendered. 18% of
          (brokerage + SEBI charges + transaction charges)
        </p>

        <p>
          <strong>SEBI Charges</strong>
        </p>
        <p>
          Charged at ₹10 per crore + GST by Securities and Exchange Board of
          India for regulating the markets.
        </p>

        <p>
          <strong>DP (Depository Participant) Charges</strong>
        </p>
        <p>
          ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
          charged on the trading account ledger when stocks are sold,
          irrespective of quantity.
        </p>
        <p>
          Female demat account holders (as first holder) will enjoy a discount
          of ₹0.25 per transaction on the CDSL fee.
        </p>
        <p>
          Debit transactions of mutual funds & bonds get an additional discount
          of ₹0.25 on the CDSL fee.
        </p>

        <p>
          <strong>Pledging Charges</strong>
        </p>
        <p>₹30 + GST per pledge request per ISIN.</p>

        <p>
          <strong>AMC (Account Maintenance Charges)</strong>
        </p>
        <p>
          For BSDA demat account: Zero charges if the holding value is less than
          ₹4,00,000. To learn more about BSDA, Click here.
        </p>
        <p>
          For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90
          days). To learn more about AMC, Click here.
        </p>

        <p>
          <strong>Corporate Action Order Charges</strong>
        </p>
        <p>
          ₹20 plus GST will be charged for OFS / buyback / takeover / delisting
          orders placed through Console.
        </p>

        <p>
          <strong>Off-market Transfer Charges</strong>
        </p>
        <p>₹25 per transaction.</p>

        <p>
          <strong>Physical CMR Request</strong>
        </p>
        <p>
          First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
          subsequent requests.
        </p>

        <p>
          <strong>Payment Gateway Charges</strong>
        </p>
        <p>₹9 + GST (Not levied on transfers done via UPI)</p>

        <p>
          <strong>Delayed Payment Charges</strong>
        </p>
        <p>
          Interest is levied at 18% a year or 0.05% per day on the debit balance
          in your trading account. Learn more.
        </p>

        <p>
          <strong>Trading Using 3-in-1 Account with Block Functionality</strong>
        </p>
        <ul>
          <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
          <li>Intraday Brokerage: 0.05% per executed order.</li>
        </ul>
      </div>
    </div>
  );
}

export default PricingDescription;
