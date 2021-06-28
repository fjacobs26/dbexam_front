import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INace } from 'src/util/nace.interface';
import { OptionOneService } from './option-one.service';

@Component({
  selector: 'app-option-one',
  templateUrl: './option-one.component.html',
  styleUrls: ['./option-one.component.scss']
})
export class OptionOneComponent implements OnInit {

  isDataReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  data: INace[] = [];

  constructor(
    private optionService: OptionOneService
  ) { }

  ngOnInit(): void {
    this.optionService.getAllNaceList().subscribe(resp => {
      this.data = resp;
      this.isDataReady.next(true);
    })
  }

}
