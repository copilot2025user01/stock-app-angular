import { Component } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  stocks: Stock[] = [];
  //inject StockService into the constructor
  constructor(private stockService: StockService) { }

  //onInit function to getStocksFromWishList
  ngOnInit() {
    this.getStocksFromWishList();
  }

  //getStocksFromWishList function to get all the stocks from the wishlist using the stock service and store the stocks in the stocks array
  getStocksFromWishList() {
    this.stockService.getStocksFromWishList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.stocks = response;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    });


  }

  //deleteStock function to delete a stock from the wishlist using the stock service. pass stock as a parameter
  deleteStock(stock: Stock) {
    this.stockService.deleteStock(stock).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getStocksFromWishList();
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    });
  }

}
