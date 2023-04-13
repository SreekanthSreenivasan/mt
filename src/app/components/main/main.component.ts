import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  more: any;
  activatedIndex!: number;

  constructor(private sharedService: SharedServiceService) {}
  showMore: boolean = false;
  fullData$!: Observable<any>;

  ngOnInit(): void {
    this.getDataResponse();
  }

  getDataResponse() {
    this.fullData$ = this.sharedService.getData();
  }
  getMore(item: any, index: number, showMore: boolean) {
    this.showMore = showMore;
    this.activatedIndex = index;
    this.more = item?.description;
  }
}
