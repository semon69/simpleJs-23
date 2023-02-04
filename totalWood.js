function quantityNeeded(chair, table, bed){

    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const perChairWood = perChair * chair;
    const perTableWood = perTable * table;
    const perBedWood = perBed * bed;

    let totalWood = perChairWood + perTableWood + perBedWood;
    
    console.log('Total wood needed for Chair, Table, Bed:', totalWood ,'cft');

}

quantityNeeded(2, 1, 3);