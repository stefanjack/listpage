import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DataRow } from './DataRow';
import { ListpageService } from './listpage.service';
import { DialogService } from './dialog.service';

@Component({
  selector: 'edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.css']
})
export class EditRowComponent {
  data: DataRow;
  saved: boolean = false;
  
  constructor(
	private listpageService: ListpageService,
	private dialogService: DialogService,
	private route: ActivatedRoute,
	private location: Location,
	private router: Router
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap
		.switchMap((params: ParamMap) => {
			if(this.listpageService.dataRowExist(+params.get('id'))){
				return this.listpageService.getDataRow(+params.get('id'));
			}
			else
				return null;
		})
		.subscribe(data => {
			if(data != null){
				this.data = {id: data.id, name: data.name, description: data.description};
			}
			else
				this.router.navigate(['/home']);
		});
  }
  
  canDeactivate(): Promise<boolean> | boolean {
    if(this.saved)
		return true;
    else
		return this.dialogService.confirm('Discard changes?');
  }
  
  home(): void{
	this.router.navigate(['/home']);
  }
  
  save(): void{
	this.saved = true;
	this.listpageService.setDataRow(this.data);
	this.home();
  }
}
