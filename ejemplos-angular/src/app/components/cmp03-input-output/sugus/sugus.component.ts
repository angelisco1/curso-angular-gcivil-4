import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sugus',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './sugus.component.html',
  styleUrl: './sugus.component.css'
})
export class SugusComponent {
  @Input() color: string = 'yellow'
  @Input() sabor: string = 'limón'


}
