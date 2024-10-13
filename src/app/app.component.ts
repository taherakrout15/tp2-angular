import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nom-du-projet';
  inputText: string = '';
  textList: string[] = []; 
  colors: string[] = ['red', 'blue', 'green', 'orange', 'purple'];
  buttonLabel="Random";
  random=false;
  sortState: 'asc' | 'desc' | 'random' = 'asc';
  sortButtonLabel: string = 'Sort Descending';
  sortModes: string[] = ['Sort Ascending', 'Sort Descending', 'Shuffle List']; // Modes
  currentSortModeIndex: number = 0;  // Tracks the current sort mode
  sortButtonLabel: string = this.sortModes[this.currentSortModeIndex]; // Initial button text

  // New properties for toggling list visibility
  isListVisible: boolean = true;  // Track visibility of the list
  listVisibilityLabel: string = 'Hide List';  // Button label to hide/show list
  
  showText() {
    console.log(this.inputText);
  }
  showMessage() {
    console.log('Bonjour');
}
addTextToList() {
  if (this.inputText) {
    this.textList.push(this.inputText); 
    this.inputText = '';  
  }
}
removeLastText() {
  if (this.textList.length > 0) {
    this.textList.pop();
  }}
  toggleRandomColoring() {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Cycle' : 'Random';
  }
  getColor(index: number): string 
  {
    if (this.random)
    {return this.colors[Math.floor(Math.random() * this.colors.length)];}
    else
    {return this.colors[index % this.colors.length];}
  }
  toggleSorting() {
    if (this.sortState === 'asc') {
      this.sortState = 'desc';
      this.textList.sort((a, b) => b.localeCompare(a));
      this.sortButtonLabel = 'Sort Random';
    } else if (this.sortState === 'desc') {
      this.sortState = 'random';
      this.textList.sort(() => Math.random() - 0.5);
      this.sortButtonLabel = 'Sort Ascending';
    } else {
      this.sortState = 'asc';
      this.textList.sort((a, b) => a.localeCompare(b));
      this.sortButtonLabel = 'Sort Descending';
    }
  }
  shuffleList() {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
  }

  // Cycle between the three sorting modes
  cycleSortMode() {
    switch (this.currentSortModeIndex) {
      case 0:  // Ascending
        this.sortListAscending();
        break;
      case 1:  // Descending
        this.sortListDescending();
        break;
      case 2:  // Shuffle
        this.shuffleList();
        break;
    }

    // Move to the next mode
    this.currentSortModeIndex = (this.currentSortModeIndex + 1) % this.sortModes.length;

    // Update the button label to the next mode
    this.sortButtonLabel = this.sortModes[this.currentSortModeIndex];
  }

  // Method to toggle list visibility
  toggleListVisibility() {
    this.isListVisible = !this.isListVisible;  // Toggle the list visibility flag
    this.listVisibilityLabel = this.isListVisible ? 'Hide List' : 'Show List';  // Update the button label
  }
}



