"use client";

import { NATIVE_TOKEN } from "../../../../../configuration/company";

const Form: React.FC = () => {
  return (
    <div>
      Parts of form (in order):
      <p> NI = Non Interactive for user</p>
      <p>1. NI - Validate account is registered - require Username, location and address.</p>
      <p>2. NI - Retrieve form category from params</p>
      <p>3. Create title</p>
      <p>4. Create listing description (Under description input, maybe create a checkfield of good examples</p>
      <p>5. Add Picture</p>
      <p>6. Quantity of listings available</p>
      <p>6. NI - Convert Uploaded image to imgBB API, save URL</p>
      <p>7. Total price</p>
      <p>8. NI - Convert price functionality to let user choose between USD and {NATIVE_TOKEN}</p>
      <p>9. Original Location (City, State/Province, Country)</p>
      <p>10. List of shipping methods and cost breakdown for each (Similar structure to Premim upcharges)</p>
      <p>10. Feature array - list of unique features for this product (Should set a limit of (?))</p>
      <p>11. Premium Upcharges - list of unique upcharges for this product (No minimum set (?))</p>
      <p>
        12. Confirmation Popup - Because this can not be modified in the future (at the moment), please validate you
        will complete this product and its listing requirements in order to earn PRICE{" "}
      </p>
      <p>13. Sign to terms and conditions (Take T&C agreement on chain) </p>
      <p>14. NI - Handle submit (Convert form data response into JSON, also store date created)</p>
      <p>15. NI - Create unique listing ID </p>
      <p>16. NI - Post result, wait for notification, then redirect to success page or error popup</p>
    </div>
  );
};

export default Form;
