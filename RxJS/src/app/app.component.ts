import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})

export class AppComponent implements OnInit {
  title = 'RxJS';

  myObservable(nome: string) : Observable<String> {
    return new Observable(subscribe => {
      subscribe.next("vai começa fml!!!");

      if((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
        subscribe.next("dale fml!! deu par");
        subscribe.complete();
      } else {
        subscribe.error("deu ruim fml!!");
      }
    })
  }

  myPromisse(name: String): Promise<String> {
    return new Promise((resolve, reject) => {
      if(name == "Gui") {
        return resolve("Você é o Guilherme!");
      } else {
        return reject("Você não é o Guilherme!");
      }
    })
  }

  ngOnInit(): void {
    // this.myObservable("")
    //   .subscribe(
    //     subscribe => console.log(subscribe),
    //     error => console.log(error) 
    // )   

    // this.myPromisse("Dale")
    //   .then(result => console.log(result))
    //   .catch(erro => console.log(erro));
  
    // passando um observer para o observable
    const observer = { 
      next: next => console.log(next),
      error: erro => console.log(erro),
      complete: () => console.log("fim!!")
    }

    const observable = this.myObservable("");
    observable.subscribe(observer);
  }
}
