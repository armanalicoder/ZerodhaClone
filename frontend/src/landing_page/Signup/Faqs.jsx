import React from "react";

function Faqs() {
  return (
    <div className="row">
      <div className="col-sm-12 mb-3">
        <h2 className="ms-3">FAQs</h2>
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is zerodha account?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              A Zerodha account is a combined demat and trading account that
              allows investors to buy, sell, and hold securities digitally.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              What documents are required to open a demat account?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The following documents are required to open a Zerodha account
              online: PAN number Aadhaar Card (Linked with a phone number for
              OTP verification) Cancelled cheque or bank account statement (To
              link your bank account) Income proof (Required only if you wish to
              trade in Futures & options)
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Is Zerodha account opening free?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">Yes, It is completely free.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Are there any maintenance charges for a demat account?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The account maintaince charges is appliacable based on the account
              type. For Basic Services Demat Account: Zero charges if the
              holding value is less than ₹4,00,000. For non-Basic Services Demat
              Account demat accounts: ₹300 per year + GST. To learn more about
              BSDA, Click here.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Can I open a demat account without a bank account?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              To open a demat account, you must have a bank account in your
              name. If UPI verification is completed successfully, no proof of
              bank is needed. However, if bank verification fails, you'll need
              to provide either a cancelled cheque or a bank statement to link
              your bank account to Zerodha.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
