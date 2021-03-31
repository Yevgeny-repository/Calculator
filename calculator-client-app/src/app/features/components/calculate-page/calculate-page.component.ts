// NG
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// VENDOR
import { NgxNotifierService } from 'ngx-notifier';
import { SubSink } from 'subsink';

// APP
import { HistoryModel, InputModel, ResponseModel } from '@shared/models';
import { CalcService } from '@shared/services/users/calc-shared.service';

@Component({
  selector: 'app-calculate-page',
  templateUrl: './calculate-page.component.html',
  styleUrls: ['./calculate-page.component.scss']
})

export class CalculatePageComponent implements OnInit {

  userForm: FormGroup;
  inputModel: InputModel;
  historyModel: HistoryModel[] = [];

  calcResult: number;
  submitted = false;
  private subs = new SubSink();

  constructor(private calcService: CalcService,
    private ngxNotifierService: NgxNotifierService,
    ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      expr: new FormControl("",[
        Validators.required,
        Validators.minLength(3),
      ]),
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid)
      return;
    
    this.inputModel = new InputModel(this.userForm.get('expr').value);
    this.subs.sink = this.calcService.calculate(this.inputModel).subscribe(data => this.calculateSub(data),
    (error) => this.ngxNotifierService.createToast('Error! Please contact administrator', 'danger')
    );
  }
  
  calculateSub(data: ResponseModel): void {
    this.userForm.reset();
    if (data) {
      this.submitted = false;
      this.calcResult = data.result;
      this.historyModel.push(new HistoryModel(
        this.inputModel.expr,
        data.result));
      };
      this.ngxNotifierService.createToast('Success', 'success');
  }

  public ngOnOestroy() {
    this.subs.unsubscribe();
    this.ngxNotifierService.clear();
  }
}
