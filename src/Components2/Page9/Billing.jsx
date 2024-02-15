import React from "react";

const Billing = () => {
  return (
    <div className="Billing">
      <div className="Billing-his">
        <div className="bil-cont">
          <h1 className="bilh1">Billing History</h1>
          <p className="bilp">
            Download your previou plan receipts and details.
          </p>
        </div>
        <div class="bil-tableheaded">
          <table>
            <thead>
              <tr className="thead">
                <th>Invoice</th>
                <th>Billing Date</th>
                <th>Amount</th>
                <th>Plan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col1-data">
                    <input type="checkbox" className="col1-datain" />
                    <img
                      src="/Images/invoice.png"
                      className="col1-dataimg"
                      alt=""
                    />
                    <h1 className="col1-datah1">Invoice #001 - Nov 2023</h1>
                  </div>
                </td>
                <td>Nov. 10 2023</td>
                <td className="bluetd">$10</td>
                <td>Basic Plan</td>
                <td>
                  <a href="#" class="download-button">
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <ul className="pagination">
            <li>
              <a href="#" className="current">
                Previous
              </a>
            </li>
            <li>
              <a href="#" className="oneactive">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#" className="current">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Billing;
