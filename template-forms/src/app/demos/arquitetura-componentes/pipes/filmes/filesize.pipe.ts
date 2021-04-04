import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filesize'
})

export class FileSizePipe implements PipeTransform {
    transform(value: number) {
        let valorCalculado = (value / (1024 * 1024));
        let extensao = ' MB';

        if(valorCalculado > 1024) {
            valorCalculado /= 1024;
            extensao = ' GB';
        }

        return valorCalculado.toFixed(2) + extensao;
    }

}