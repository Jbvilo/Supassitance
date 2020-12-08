import { Injectable } from '@angular/core';

export class Data {
    mois: string;
    taux: number;
}

let data: Data[] = [{
    mois: "Janvier",
    taux: 20
}, {
    mois: "Février",
    taux: 2
}, {
    mois: "Mars",
    taux: 93
}, {
    mois: "Avril",
    taux: 43
}, {
    mois: "Mai",
    taux:66
}, {
    mois: "Juin",
    taux: 11
}, {
    mois: "Juillet",
    taux: 20
}, {
    mois: "Août",
    taux: 10
}, {
    mois: "Septembre",
    taux: 28
}, {
    mois: "Octobre",
    taux: 13
}, {
    mois: "Novembre",
    taux: 43
}, {
    mois: "Décembre",
    taux: 23
}];

@Injectable()
export class Service {
    getData(): Data[] {
        return data;
    }
}
