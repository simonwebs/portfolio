// types/contacts.ts
export interface Contact {
    _id?: string;
    name: string;
    email: string;
    subject: string;
    description: string;
    archived?: boolean;
    createdAt: Date;
  }
  