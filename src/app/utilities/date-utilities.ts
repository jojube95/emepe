export class DateUtilities {



  constructor(){

  }

  dateToString(date: Date) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    console.log(date);
    let values: string[] = date.toString().split(' ');
    console.log(values);
    let dateString = values[2]+'/'+monthNames.indexOf(values[1])+'/'+values[3];
    return dateString;
  }

  stringToDate(dateString: string) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let values: string[] = dateString.toString().split(' ');
    let date: Date = new Date(Number(values[3]), monthNames.indexOf(values[1]), Number(values[2]), 0, 0, 0, 0);
    return date;
  }

}
