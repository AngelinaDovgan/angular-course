import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { ReturnedData } from '../../interfaces/returned-data';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserComponent, HttpClientModule, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  users!: User[];
  users$!: Observable<User[]>;

  constructor(private http: HttpClient) {
  
}
  ngOnInit(){
    this.users$ = this.http.get<ReturnedData>('https://reqres.in/api/users').pipe(
      map((obj: ReturnedData) => obj.data)
    );
}
}

