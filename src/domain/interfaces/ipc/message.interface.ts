export interface Message {
  headers: {
    messageType: string;
    source: string;
    destination: string;
    timestamp: Date;
  };
  content: any;
}
