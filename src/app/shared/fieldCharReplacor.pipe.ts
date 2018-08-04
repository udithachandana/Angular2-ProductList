import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'FieldCharReplacor'
})
export class FieldCharReplacorPipe implements PipeTransform{
    transform(value: string, seperator: string) : string{
        return value.replace(seperator, '-');
    }
}