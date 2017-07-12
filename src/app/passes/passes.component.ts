import { Component, OnInit } from '@angular/core';
import { Pass } from '../pass.model'

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})

export class PassesComponent {
  passes: Pass[] = [
  new Pass("Daily Lift ticket", "Skiing from 9am-4pm", 65, 1),
  new Pass("Advantage Ticket", "Skiing 4 times from 9am-4pm", 150, 2),
  new Pass("College pass", "Skiing from 9am-4pm all season for college students", 300, 3),
  new Pass("Season's Pass", "Skiing from 9am-4pm all season", 500, 4),
 ];
}
