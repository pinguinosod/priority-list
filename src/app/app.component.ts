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
}
