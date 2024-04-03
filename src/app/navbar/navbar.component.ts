import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('burgerMenu') hamburguer!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.hamburguer.nativeElement.addEventListener("click", () => {
      this.hamburguer.nativeElement.classList.toggle('active');
      this.navMenu.nativeElement.classList.toggle('active');
    });
  }

  public loginRoot(){
  this.router.navigate(['/login'])
  }

  public homeRoot(){
    this.router.navigate(['/home'])
    }

}
