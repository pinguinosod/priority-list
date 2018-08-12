import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Priority List';
  priorityList =  [
                    {
                      'title': 'The horse is pulent and piant',
                      'rating': 4
                    },
                    {
                      'title': 'Ich bin mehr als ein schönes Gesicht und ein guiler Körper',
                      'rating': 2
                    }
                  ];
  newItemName = '';

  sortByTitleOrderAsc = true;
  sortByRatingOrderAsc = true;

  addItem() {
    if (this.newItemName !== '') {
      this.priorityList.push({'title': this.newItemName, 'rating': 1});
      this.newItemName = '';
    }
  }

  setRating(i, rating) {
    this.priorityList[i].rating = rating;
  }

  removeItem(i) {
    this.priorityList.splice(i, 1);
  }

  sortPriorityList(n) {
    if (n === 1) { // By title
      this.priorityList.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return this.sortByTitleOrderAsc ? -1 : 1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return this.sortByTitleOrderAsc ? 1 : -1;
        }
        return 0;
      });
      this.sortByTitleOrderAsc = !this.sortByTitleOrderAsc;
    } else if (n === 2) { // By rating
      this.priorityList.sort((a, b) => {
        if (a.rating < b.rating) {
          return this.sortByRatingOrderAsc ? -1 : 1;
        }
        if (a.rating > b.rating) {
          return this.sortByRatingOrderAsc ? 1 : -1;
        }
        return 0;
      });
      this.sortByRatingOrderAsc = !this.sortByRatingOrderAsc;
    }
  }
}
