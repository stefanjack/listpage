import { Component } from '@angular/core';

import { DataRow } from './DataRow';
import { ListpageService } from './listpage.service';

@Component({
  selector: 'listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css']
})
export class ListpageComponent {
  data: DataRow[];
  display: DataRow[] = [];
  searchTerm = '';
  
  constructor(private listpageService: ListpageService) { }

  getData(): void {
    this.listpageService.getData().then(data => {
		this.data = data;
		this.display = this.data;
	});
  }

  ngOnInit(): void {
    this.getData();
  }
  
  searchFilter(term: string): void {
	this.searchTerm = term;
	if(term == '')
		this.getData();
	else {
		this.listpageService.searchData(term).then(data => {
			this.data = data;
			this.display = this.data;
		});
	}
	/*
	term = term.toLowerCase(); //not case sensitive
	let result = [];
	let length = 0;
	for(let d of this.data){
		if((d.id+"").toLowerCase().indexOf(term) != -1 ||
			d.name.toLowerCase().indexOf(term) != -1 ||
			d.description.toLowerCase().indexOf(term) != -1){
				result[length] = d;
				length++;
		}
	}
	this.display = result;*/
  }
  
  editRow(d: DataRow):void {
	this.listpageService.setDataRow(d);
	this.searchFilter(this.searchTerm);
  }
  
  changePage(p: number){
	this.listpageService.getPage(p).then(data => {
		this.data = data;
		this.display = this.data;
	});
  }
  
  add(){
	
  }
  
}
