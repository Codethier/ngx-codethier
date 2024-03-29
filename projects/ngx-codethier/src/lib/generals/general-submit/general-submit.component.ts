import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'codethier-general-submit',
  templateUrl: './general-submit.component.html',
  styleUrls: ['./general-submit.component.scss']
})
export class CodethierGeneralSubmitComponent implements OnInit {
  @Input() obj!: { [something: string]: any }
  //either emit to parent or use string
  // @Input() callbackFuncName!: string
  @Input() disabledFields?: string[]
  @Output() refresh = new EventEmitter<void>()
  @Output() callBack = new EventEmitter<any>()
  keys: string[] = []
  keysWithTypes?: { key: string, type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function", disabled: boolean}[]

  constructor() {
  }

  ngOnInit(): void {
    Object.keys(this.obj).map(i => this.keys.push(i))
    this.keys.map(key => {
      if (this.keysWithTypes){
        if (key === null){
          this.keysWithTypes.push({key: key, type: "string", disabled: false})
        }
        this.keysWithTypes.push({type: typeof this.obj[key], key: key, disabled: false})
      }
      else {
        if (key === null){
          this.keysWithTypes = [{key: key, type: "string", disabled: false}]
        }
        this.keysWithTypes = [{type: typeof this.obj[key], key: key, disabled: false}]
      }
    })
    this.keysWithTypes?.map(item => this.disabledFields?.map(field => {
      if (field == item.key){
        item.disabled = true
      }
    }))
  }

  onSubmit() {
    this.callBack.emit(this.obj)
    this.refresh.emit()
  }
}
