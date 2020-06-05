import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feature = new EventEmitter<string>();

  onSelectFeature(feature: string) {
    this.feature.emit(feature)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
