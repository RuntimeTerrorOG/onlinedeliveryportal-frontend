import React from 'react';
import CryptoJS from 'crypto-js';

function MyComponent() {
  const merchantID = '1222043';
  const merchantSecret = 'MTE0NTUwMTY2MjMxNzU5MTM4NDUyMDMyNTMxNzA5MzYxMTUwNjM5NA==';
  const orderID = '45896588';
  const amount = 350;
  const currency = 'LKR';
  const amountFormatted = amount.toFixed(2);
  const inputString = `${merchantID}${orderID}${amountFormatted}${currency}${CryptoJS.MD5(merchantSecret)}`;
  const hash = CryptoJS.MD5(inputString).toString(CryptoJS.enc.Hex).toUpperCase();

  console.log('Generated Hash:', hash);

  return (
    <div>
      {/* Render your component here */}
    </div>
  );
}
