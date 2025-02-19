import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

//add  routesto the routes array

export const routes: Routes = [
    // add home, wishlist routes
    { path: 'Home', component: HomeComponent },
    { path: 'Wishlist', component: WishlistComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' }
];
