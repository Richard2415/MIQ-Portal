import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details = [];
  constructor(private _detailsService: DetailsService) { }

  ngOnInit(): void {
    this._detailsService.getDetails()
     .subscribe(
      res => this.details = res,
      err => console.log(err)
     )
  }

}
