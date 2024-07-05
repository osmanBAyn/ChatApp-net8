import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  users = signal<{userName : string, id : string}[]>([]);
  httpService = inject(HttpClient)
  ngOnInit(): void {
      this.httpService.get("https://localhost:5125/api/users").subscribe({
        next : (value: any) => this.users.set(value)
      })
  }
}
