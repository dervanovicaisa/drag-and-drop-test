export class BoxConfigModel {
  constructor(private pointerPosition: { x: number, y: number }, private distance: { x: number, y: number }, private pointCordinate: { x: number, y: number }, private changed: boolean, id:number) { }
}
