import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertMembershipSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Membership signup
  app.post("/api/membership", async (req, res) => {
    try {
      const membershipData = insertMembershipSchema.parse(req.body);
      const membership = await storage.createMembership(membershipData);
      res.json({ success: true, membership });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create membership" });
      }
    }
  });

  // Get all memberships
  app.get("/api/memberships", async (req, res) => {
    try {
      const memberships = await storage.getMemberships();
      res.json(memberships);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch memberships" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
