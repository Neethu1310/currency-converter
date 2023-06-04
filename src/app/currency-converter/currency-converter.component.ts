import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  amount: any;
  fromCurrency: any;
  toCurrency: any;
  result: any;
  currencies: string[] = ['USD', 'EUR', 'INR']; // Add more currencies as needed

  constructor(private http: HttpClient) {}

  convertCurrency() {
    const url = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;
    this.http.get<any>(url).subscribe(data => {
      const exchangeRate = data.rates[this.toCurrency];
      this.result = this.amount * exchangeRate;
    });
  }
}

