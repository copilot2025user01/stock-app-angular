/*
create the interface with the properties of the stock . Example
    
      "symbol": "08GPG",
      "name": "Nippon India Mutual Fund",
      "currency": "INR",
      "exchange": "BSE",
      "mic_code": "XBOM",
      "country": "India",
      "type": "Common Stock",
      "figi_code": ""
    */
export interface Stock {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
    figi_code: string;
}
