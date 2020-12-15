import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../dashboard.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  getBrandsInfo = '';
  BrandImage : File  = null;
  PostBrandsFrom : FormGroup;
  constructor(public dashboardSerivce : DashboardService) { }

  ngOnInit() {
    this.getAllbrands();
    this.PostBrandsFrom = new FormGroup({
      brandName: new FormControl('', Validators.required),
      brandDescription: new FormControl('', Validators.required),
      brandImage: new FormControl('', Validators.required),
    })
  }

  onFileSelect(ev){
    this.BrandImage = (ev.target as HTMLInputElement).files[0];
    console.log(this.BrandImage);
    // this.BrandImage = <File>event.target.files[0];
  }

  addBrands(){
    const addBrandsForm = this.PostBrandsFrom.value;
    const data = {
      multipart : this.BrandImage, brandName : addBrandsForm['brandName'], description : addBrandsForm['brandDescription']
    }
    const fd = new FormData();
    fd.append('multipart', data['multipart'] , data['multipart'].name);
    fd.append('brandName' , data['brandName']);
    fd.append('description' , data['description']);
    this.dashboardSerivce.addBrands(fd).subscribe(x => {
      console.log(x);
      alert(x['message'])
    })
  }

  getAllbrands(){
    this.dashboardSerivce.getAllBrands().subscribe(x => {
      console.log(x);
      const results = x['data'];
      this.getBrandsInfo = results;
    })
  }

}
