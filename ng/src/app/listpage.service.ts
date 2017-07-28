import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { url } from './listpageDBConfig';
import { DataRow } from './DataRow';

@Injectable()
export class ListpageService {
	url: string;
	
	constructor(private http: Http) {
		this.url = url;
	}
	
	toDataRow(str: string): DataRow[] {
		let data: DataRow[] = [];
		let length = 0
		let index = str.indexOf(',');
		while(index != -1){
			index = str.indexOf(',');
			let id = 0;
			if(index != -1 && str.length > 1)
				id = +str.substr(0,index);
			else break;
			str = str.substr(index + 1);
			
			index = str.indexOf(',');
			let name = '';
			if(index != -1 && str.length > 1)
				name = str.substr(0,index);
			else break;
			str = str.substr(index + 1);
			
			index = str.indexOf(',');
			let description = '';
			if(index != -1 && str.length > 1)
				description = str.substr(0,index);
			else break;
			str = str.substr(index + 1);
			
			data[length] = {id: id, name: name, description: description};
			length++;
		}
		return data;
	}
	
	getData(): Promise<DataRow[]> {
		let url = this.url+'/getData/1';
		let headers = new Headers();
		return new Promise(resolve =>{
			this.http.get(url, {headers: headers})
				.subscribe(data => {
					return resolve(this.toDataRow(data['_body']));
				});
		});
	}
	
	/*getDataRow(id: number): Promise<DataRow> {
	  return this.getData()
		.then(data => data.find(d => d.id == id));
	}*/
	getDataRow(id: number): Promise<DataRow> {
		let url = this.url+'/getRow/'+id;
		let headers = new Headers();
		return new Promise(resolve =>{
			this.http.get(url, {headers: headers})
				.subscribe(data => {
					return resolve(this.toDataRow(data['_body'])[0]);
				});
		});
	}
	
	searchData(term: string): Promise<DataRow[]> {
		let url = this.url+'/search/'+term+'/1';
		let headers = new Headers();
		return new Promise(resolve =>{
			this.http.get(url, {headers: headers})
				.subscribe(data => {
					return resolve(this.toDataRow(data['_body']));
				});
		});
	}
	
	getPage(page: number): Promise<DataRow[]> {
		let url = this.url+'/getData/'+page;
		let headers = new Headers();
		return new Promise(resolve =>{
			this.http.get(url, {headers: headers})
				.subscribe(data => {
					return resolve(this.toDataRow(data['_body']));
				});
		});
	}
	
	dataRowExist(id: number): Promise<boolean> {
	  //let url = this.url+'/exist.php?id='+id;
	  let url = this.url+'/exist/'+id;
		let headers = new Headers();
		return new Promise(resolve =>{
			this.http.get(url,{headers: headers})
				.subscribe(data => {
					return resolve(data['_body']=='ok');
				});
	  });
	}
	
	setDataRow(newData: DataRow): Promise<boolean> {
	  let obj = {id: newData.id, name: newData.name, description: newData.description};
	  //let url = this.url+'/edit.php?id='+newData.id+'&name='+newData.name+'&desc='+newData.description;
	  let url = this.url+'/edit';
		let headers = new Headers();
		return new Promise(resolve =>{
			//this.http.get(url, {headers: headers})
			this.http.post(url, obj)
				.subscribe(data => {
					return resolve(true);
				});
	  });
	}
	
	addDataRow(newData: DataRow): Promise<boolean> {
	  let obj = {id: newData.id, name: newData.name, description: newData.description};
	  let url = this.url+'/add';
		let headers = new Headers();
		return new Promise(resolve =>{
			this.http.post(url, obj)
				.subscribe(data => {
					return resolve(true);
				});
	  });
	}
}