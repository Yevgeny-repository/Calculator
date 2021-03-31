// NG
import { Injectable, Injector } from '@angular/core';

// VENDOR
import { Observable } from 'rxjs';

// APP
import { BaseHttpService } from '@core/services/http';
import { InputModel } from '@shared/models/input.model';
import { ResponseModel } from '@shared/models';

@Injectable({providedIn: 'root'})
export class CalcService extends BaseHttpService {
	private calc_endpoint: string = 'api/calculate';

	constructor(injector: Injector) {
		super(injector);
	}

	/**
	 * evaluate a math expression given in string
	 */
	public calculate(exprInput: InputModel): Observable<ResponseModel> {
		return this.get(this.calc_endpoint, {
			expr: exprInput.expr
		});
	}

}
