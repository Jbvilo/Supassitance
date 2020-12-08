import {
    Injectable
} from '@angular/core';




export class Data {
    mois: string;
    taux: number;
}

let data: Data[] = [{
    mois: "Lundi",
    taux: 20
}, {
    mois: "Mardi",
    taux: 2
}, {
    mois: "Mercredi",
    taux: 93
}, {
    mois: "Jeudi",
    taux: 43
}, {
    mois: "Vendredi",
    taux:66
}, {
    mois: "Samedi",
    taux: 11
}, {
    mois: "Dimanche",
    taux: 20
}];

@Injectable()
export class Service {

    getData(): Data[] {
        return data;
    }
}
