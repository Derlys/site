import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { collectionData, docData, fromCollectionRef } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Observable<any[]>;
  collectionRef: any;

  constructor(private firestore: AngularFirestore) {
    this.collectionRef = this.firestore.collection ('courses');
    this.courses = collectionData(this.collectionRef.ref, 'id');

  }


}
