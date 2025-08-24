import { type User, type InsertUser, type Contact, type InsertContact, type Membership, type InsertMembership } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createMembership(membership: InsertMembership): Promise<Membership>;
  getMemberships(): Promise<Membership[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private memberships: Map<string, Membership>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.memberships = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createMembership(insertMembership: InsertMembership): Promise<Membership> {
    const id = randomUUID();
    const membership: Membership = { 
      ...insertMembership, 
      id, 
      createdAt: new Date() 
    };
    this.memberships.set(id, membership);
    return membership;
  }

  async getMemberships(): Promise<Membership[]> {
    return Array.from(this.memberships.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
