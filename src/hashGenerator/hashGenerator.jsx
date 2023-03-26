function generateCode(orderId, totalAmount, merchantSecretId, merchantId, amountCurrency) {
    const merchantID = merchantId;
    const merchantSecret = merchantSecretId;
    const orderID = orderId;
    const amount = totalAmount;
    const currency = amountCurrency;
    const df = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const amountFormatted = df.format(amount);
    const hash = getMd5(merchantID + orderID + amountFormatted + currency + getMd5(merchantSecret));
    console.log("Generated Hash: " + hash);
    return hash;
  }
  
  function getMd5(input) {
    const md = crypto.createHash("md5");
    const messageDigest = md.update(input).digest();
    const no = new BigInteger(messageDigest);
    let hashtext = no.toString(16);
    while (hashtext.length() < 32) {
      hashtext = "0" + hashtext;
    }
    return hashtext.toUpperCase();
  }
  