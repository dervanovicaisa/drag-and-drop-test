export class BoxConfigModel {
  constructor(public pointerPosition: { x: number, y: number }, public distance: { x: number, y: number }, public pointCordinate: { x: number, y: number }, public changed: boolean, id:number) { }
}
