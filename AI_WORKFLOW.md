# AI Workflow Note - Ajaia Docs

## Overview

AI tools were used as development assistants throughout the implementation of Ajaia Docs.

The purpose of using AI was to improve development speed, explore implementation approaches, debug issues, and review technical decisions while maintaining ownership of the final implementation.

AI was used as a productivity tool, not as a replacement for engineering judgment.

---

# AI Tools Used

## ChatGPT

Used for:

- Planning application architecture
- Breaking down assignment requirements
- Debugging TypeScript and Next.js issues
- Reviewing Prisma database design
- Improving UI components
- Generating documentation drafts
- Suggesting implementation approaches

---

# Areas Where AI Helped

## 1. Project Planning

AI helped transform the assignment requirements into smaller development tasks:

- Authentication flow
- Dashboard implementation
- Document creation
- Rich text editor
- File upload
- Sharing system
- UI improvements


This helped prioritize the most important product features within the available time.

---

## 2. Development Assistance

AI helped with:

- Creating React components
- Writing Next.js API routes
- Debugging errors
- Improving Tailwind CSS styling
- Understanding Prisma relationships
- Reviewing code structure


Examples:

- Fixing route conflicts in Next.js App Router
- Debugging Prisma queries
- Improving document editor behavior
- Implementing save functionality

---

## 3. UI Improvements

AI was used to improve the product experience by suggesting:

- Dashboard layouts
- Better spacing
- Card designs
- Button styles
- Editor toolbar improvements


The final UI decisions were reviewed and adjusted based on usability.

---

# AI Generated Output That Was Modified

Some AI suggestions were changed before implementation.

Examples:

## Authentication

AI suggested different authentication approaches.

The final implementation was simplified to:

- Seeded demo users
- Cookie-based user sessions

because it matched the assignment scope better.

---

## Sharing System

A production-level permission system was not implemented.

The final implementation uses:

- Document owner
- Shared user relationship

This was chosen because it demonstrates the required functionality while staying within the time limit.

---

## Editor Features

Instead of recreating Google Docs completely, the implementation focused on:

- Rich text editing
- Formatting tools
- Saving
- Document persistence

Advanced features were intentionally postponed.

---

# Validation Process

AI suggestions were verified by:

- Running the application locally
- Testing complete user workflows
- Checking database persistence
- Testing API responses
- Reviewing browser behavior


The following flows were tested:

- Login
- Document creation
- Document editing
- Document saving
- Document reopening
- Document renaming
- File upload
- Document sharing
- Viewing shared documents

---

# Engineering Judgment

AI helped accelerate implementation, but final decisions were based on:

- Assignment requirements
- Time constraints
- Maintainability
- User experience
- Product priorities


The project intentionally focused on delivering a complete working workflow instead of adding incomplete advanced features.

---

# Future AI Improvements

If extending the project further, AI could assist with:

- Generating document summaries
- Smart writing suggestions
- Automatic formatting
- Document search
- AI-powered collaboration features

These were not included because the assignment prioritized the core document workflow.