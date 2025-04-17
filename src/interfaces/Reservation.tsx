export interface Reservation {
    service: {
      name: string;
    };
    schedule: {
      dateTime: string;
    };
    clientName: string;
    creationDate: string;
  }