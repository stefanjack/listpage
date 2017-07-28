import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DataRow } from './DataRow';
import { ListpageService } from './listpage.service';
import { DialogService } from './dialog.service';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  data: DataRow = {id:0, name:'', description:''};
  saved: boolean = false;
  
  constructor(
	private listpageService: ListpageService,
	private dialogService: DialogService,
	private route: ActivatedRoute,
	private location: Location,
	private router: Router
  ) { }
  
  ngOnInit(): void {
  
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
	this.listpageService.addDataRow(this.data);
	this.home();
  }
}
