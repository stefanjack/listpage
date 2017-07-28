import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DataRow } from './DataRow';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() display: DataRow[];
  @Output() onEdit = new EventEmitter<DataRow>();
  selectedIndex: number;
  selectedType: string;
  selectedDefaultValue;
  
  onSelect(id: number, type: string): void {
	this.selectedIndex = id;
	this.selectedType = type;
	if(type == 'name')
		this.selectedDefaultValue = this.display[id].name;
	if(type == 'description')
		this.selectedDefaultValue = this.display[id].description;
  }
  
  resetSelect(edited: boolean): void {
	if(!edited){
		if(this.selectedType == 'name')
			this.display[this.selectedIndex].name = this.selectedDefaultValue;
		if(this.selectedType == 'description')
			this.display[this.selectedIndex].description = this.selectedDefaultValue;
	}
	this.selectedIndex = -1;
	this.selectedType = '';
  }
  
  edit(id: number, name:string, description: string): void {
	let d: DataRow ={id: id, name:name, description:description};
	this.onEdit.emit(d);
	this.resetSelect(true);
  }
  
  onLoad(): void{console.log('loaded!');}
}
