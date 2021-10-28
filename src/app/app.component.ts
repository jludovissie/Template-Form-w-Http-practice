import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted = false; 

  user= {
      title:"" ,
      content:"", 
      email: "" ,
  }

  constructor(private http:HttpClient){}

    ngOnInit(){
      this.fetchPosts();
    }

    onCreatePost(postData:{title:string, content: string}){
      this.http.post(
      'https://my-first-http-f3aa4-default-rtdb.firebaseio.com/posts.json', 
      postData).subscribe(responseData => {
        console.log(responseData)
      })
  }
    onFetchPosts(){
      this.fetchPosts(); 
  }
    private fetchPosts(){
      this.http.get('https://my-first-http-f3aa4-default-rtdb.firebaseio.com/posts.json').subscribe(posts => {
        console.log(posts)
      })
    } 

  onSubmit(form:NgForm){
    this.submitted = true; 
    this.user.title = this.signupForm.value.userData.title; 
    this.user.content = this.signupForm.value.userData.content; 
    this.user.email = this.signupForm.value.userData.email; 

  }
}
