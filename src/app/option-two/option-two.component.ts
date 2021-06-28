import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-option-two',
  templateUrl: './option-two.component.html',
  styleUrls: ['./option-two.component.scss'],
})
export class OptionTwoComponent implements OnInit, OnChanges, OnDestroy {
  private unsubscribe: Subject<boolean> = new Subject();
  localForm: FormGroup ;
  result: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(
    private formBuilder: FormBuilder
  ) { }
    ngOnDestroy(){
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
  ngOnInit(): void {
    this.localForm = this.formBuilder.group(
      {
        firstField: new FormControl(0,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        secondField: new FormControl(0,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
      }
    );
    this.ngOnChanges();
  }
  ngOnChanges(){
    this.firstField.valueChanges.pipe(takeUntil(this.unsubscribe))
    .subscribe(val => {
      if(val!=="" && this.secondField.value !== 0){
        this.result.next(Number(val) / Number(this.secondField.value));
      }else{
        return;
      }
    });
    this.secondField.valueChanges.pipe(takeUntil(this.unsubscribe))
    .subscribe(val => {
      if(val!=="" && val !== 0){
        this.result.next(Number(this.firstField.value) / Number(val));
      }else{
        return;
      }
    });
  }
  get firstField() { return this.localForm.get('firstField'); }
  get secondField() { return this.localForm.get('secondField'); }

}
