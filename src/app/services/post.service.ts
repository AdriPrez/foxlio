import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  async save(id: any, titulo: any, informacion: any) {
    console.log("save")
    return await {titulo, informacion}
  }

  async load(id:any, titulo: any, informacion: any) {
    console.log("save")
    return await {titulo, informacion}
  }

}
