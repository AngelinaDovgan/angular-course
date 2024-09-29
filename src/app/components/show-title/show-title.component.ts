import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-title',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-title.component.html',
  styleUrl: './show-title.component.css'
})
export class ShowTitleComponent implements OnInit, OnDestroy {

  @Input() incomingTitle!: string;
  @Output('outputTitle') outputTitle: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  console.log('constructor', this.incomingTitle)
  }
  ngOnDestroy(){
  }

  changedTitle!: string;

  ngOnInit() {
    console.log('ngOnInit', this.incomingTitle)
  }

  sendTitle() {
    this.outputTitle.emit(this.changedTitle)
  }
}
