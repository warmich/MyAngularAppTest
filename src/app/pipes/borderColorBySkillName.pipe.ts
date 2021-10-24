import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borderColorBySkillName'
})
export class borderColorBySkillNamePipe implements PipeTransform {

  transform(name: string): string {

    let color: string;

    switch (name) {
      case 'Angular':
        color = '#DE140E'
        break
      case 'C#':
        color = '#230068'
        break
      case 'SqlExpress':
        color = '#AF2328'
        break
      default:
        color = 'grey'
        break
    }

    return color;
  }
}
