import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string;
  @Output() searchTermChange = new EventEmitter<string>();
  
  clearSearch(): void {
	this.searchTerm = '';
	this.searchTermChange.emit(this.searchTerm);
  }

}
