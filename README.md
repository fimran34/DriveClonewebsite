# Ajaia Docs - Collaborative Document Editor

## Candidate

**Name:** Faryal Imran  
**Email:** faryalimran7@gmail.com

---

# Overview

Ajaia Docs is a lightweight collaborative document editor inspired by Google Docs.

This project was built for the **Ajaia LLC - AI-Native Full Stack Developer Assignment**.

The goal was to build a focused full-stack product experience that demonstrates:

- Document creation
- Rich text editing
- Document persistence
- File upload workflow
- Document sharing
- Basic user authentication
- Usable product interface

The application focuses on delivering a complete workflow within the assignment time constraint instead of attempting to rebuild every Google Docs feature.

---

# Features

## 1. Document Creation and Editing

Users can:

- Create new documents
- Edit documents in the browser
- Rename documents
- Save documents
- Reopen documents after refresh
- View owned documents
- View shared documents

---

## 2. Rich Text Editor

The document editor supports:

- Bold formatting
- Italic formatting
- Underline formatting
- Headings
- Bullet lists
- Numbered lists

The editor is built using **Tiptap**.

---

## 3. File Upload

The application supports uploading files into the document workflow.

Supported file formats:

- `.txt`
- `.md`
- `.docx`

Uploaded files are converted into editable documents.

The supported file types were intentionally limited to keep the workflow reliable within the assignment timeframe.

---

## 4. Document Sharing

The application includes a simple sharing system.

Users can:

- Own documents
- Share documents with another user
- Access documents shared with them

Example workflow:

1. Alice creates a document
2. Alice shares the document with Bob
3. Bob sees the document inside the "Shared With Me" section

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Tiptap Rich Text Editor
- Lucide React Icons


## Backend

- Next.js API Routes
- Server Components
- API Route Handlers


## Database

- SQLite
- Prisma ORM

SQLite was selected because it provides a simple database setup without requiring external database configuration, making it suitable for a time-limited assignment.

---

# Local Setup

## 1. Install Dependencies

Install project dependencies:

```bash
npm install
```

---

## 2. Environment Variables

Create a file named:

```
.env
```

in the project root.

Add:

```env
DATABASE_URL="file:./dev.db"
```

The application uses SQLite through Prisma ORM.

The database file will be created locally:

```
dev.db
```

---

## 3. Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Create the database and apply migrations:

```bash
npx prisma migrate dev
```

This creates the required database tables:

- User
- Document
- Share

---

## 4. Prisma Studio (Optional)

To inspect database records visually:

```bash
npx prisma studio
```

Prisma Studio allows viewing:

- Users
- Documents
- Shared documents

---

## 5. Run Application

Start the development server:

```bash
npm run dev
```

The application will run at:

```
http://localhost:3000
```

---

# Demo Accounts

The application uses lightweight demo authentication.

## Alice

```
alice@test.com
```

## Bob

```
bob@test.com
```

---

# Project Structure

```
ajaia-docs/

├── app/
│
│   ├── api/
│   │   ├── documents/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   │
│   │   ├── login/
│   │   │   └── route.ts
│   │   │
│   │   ├── share/
│   │   │   └── route.ts
│   │   │
│   │   └── upload/
│   │       └── route.ts
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── document/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│
│   ├── dashboard/
│   │   ├── NewDocumentButton.tsx
│   │   └── LogoutButton.tsx
│   │
│   └── editor/
│       ├── Editor.tsx
│       ├── DocumentTitle.tsx
│       └── ShareButton.tsx
│
├── lib/
│   └── prisma.ts
│
├── prisma/
│   ├── schema.prisma
│   └── dev.db
│
├── public/
│
├── .env
├── package.json
├── README.md
├── ARCHITECTURE.md
├── AI_WORKFLOW.md
└── SUBMISSION.md
```

---

# Folder Responsibilities

## app/

Contains application routes and pages.

Includes:

- Dashboard
- Login
- Document editor
- API endpoints


## app/api/

Contains backend API routes.

Responsibilities:

- Authentication
- Document creation
- Document updates
- File uploads
- Sharing logic


## components/

Contains reusable React components.

Examples:

- Editor
- Document title editor
- Share button
- Dashboard buttons


## lib/

Contains shared utilities.

Example:

- Prisma database connection


## prisma/

Contains database configuration.

Includes:

- Prisma schema
- SQLite database

---

# Database Models

The application uses Prisma ORM with SQLite.

---

## User Model

Stores application users.

Fields:

```
id
name
email
```

---

## Document Model

Stores editable documents.

Fields:

```
id
title
content
ownerId
createdAt
updatedAt
```

Relationship:

- One user can own multiple documents.

---

## Share Model

Stores document sharing relationships.

Fields:

```
id
documentId
userId
```

Relationship:

- A document can be shared with multiple users.

---

# Engineering Decisions

The application was intentionally scoped around the most important workflows.

Priority areas:

1. Document creation
2. Rich text editing
3. Database persistence
4. File upload
5. Document sharing
6. User experience

---

# Implemented Features

Completed:

✅ Create documents  
✅ Edit documents  
✅ Rename documents  
✅ Save documents  
✅ Reopen documents  
✅ Rich text formatting  
✅ File upload  
✅ Document sharing  
✅ Shared document view  
✅ Persistent storage  

---

# Features Not Implemented

Due to the assignment time limit, the following features were intentionally not implemented:

- Real-time collaboration
- Live cursors
- Comments
- Document version history
- Advanced permission management
- Production authentication system

These were considered optional improvements compared to completing the core workflow.

---

# Testing and Validation

The following workflows were tested:

✅ Login flow  
✅ Document creation  
✅ Document editing  
✅ Saving documents  
✅ Reopening documents  
✅ Renaming documents  
✅ File upload  
✅ Sharing documents  
✅ Viewing shared documents  

---

# AI Workflow

AI tools were used as development assistants.

AI helped with:

- Architecture planning
- Debugging
- Code review
- UI improvement ideas
- Documentation preparation

AI-generated suggestions were reviewed and modified when necessary.

Correctness was verified through:

- Running the application locally
- Testing user flows
- Checking database persistence
- Reviewing API behavior

More details:

```
AI_WORKFLOW.md
```

---

# Architecture

The complete technical architecture and design decisions are documented in:

```
ARCHITECTURE.md
```

---

# Deployment

Live application URL:

```
Add deployment URL here
```

---

# Walkthrough Video

Video URL:

```
Add Loom / YouTube / Google Drive link here
```

---

# Reviewer Testing Instructions

1. Open the application.

2. Login using:

Alice:

```
alice@test.com
```

or

Bob:

```
bob@test.com
```

3. Create a document.

4. Edit content using the rich text editor.

5. Save and reopen the document.

6. Upload a supported file.

7. Share a document with another user.

8. Open the "Shared With Me" section.

---

# Future Improvements

With additional development time, I would add:

- Real-time collaboration
- Comments and suggestions
- Document version history
- PDF export
- Markdown export
- Better file preview support
- Advanced sharing permissions
- Full authentication system

---

# Submission Files

The submission contains:

```
README.md
ARCHITECTURE.md
AI_WORKFLOW.md
SUBMISSION.md
```

along with the complete source code.

---

# Summary

Ajaia Docs delivers a complete collaborative document workflow:

```
User
 ↓
Create Document
 ↓
Edit Content
 ↓
Save
 ↓
Share
 ↓
Collaborate
```

The project prioritizes:

- Product usability
- Clean architecture
- Maintainable code
- Practical engineering decisions
- Completing the most important user flows within the given time