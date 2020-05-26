import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: firebase.User;
  private isLoggedIn: boolean;

  constructor(private readonly afa: AngularFireAuth) {
    this.afa.authState.subscribe((res) => {
      console.log(res);
      this.user = res;
      this.isLoggedIn = !!this.user;
    });
  }

  login(email: string, password: string) {
    console.log({ email, password });
  }

  register(email: string, password: string) {
    return from(this.afa.createUserWithEmailAndPassword(email, password));
  }

  loginGoogle() {
    // this.afa
  }

  loginGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    return from(this.afa.signInWithPopup(provider));
  }

  logout() {
    return from(this.afa.signOut());
  }
}
