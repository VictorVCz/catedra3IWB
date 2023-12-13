import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  posts: any[] = [];
  search: string = "";
  

  constructor(private http: HttpClient, private modalController: ModalController) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    
    const apiUrl = 'http://localhost:3000/posts'; // Reemplaza esto con tu URL y endpoint
    this.http.get(apiUrl).subscribe((data: any) => {
      this.posts = data;
    });
  }

  deletePost(id: number) {
    
    
    const apiUrl = `http://localhost:3000/posts/${id}`; // Reemplaza esto con tu URL y endpoint
    this.http.delete(apiUrl).subscribe(() => {
      // Eliminación exitosa, actualiza la lista de posts
      
      this.getData();
    });
  }
  
  
  
}
