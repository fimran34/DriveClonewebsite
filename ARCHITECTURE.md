# Ajaia Docs - Architecture Note

## Overview

Ajaia Docs is a lightweight collaborative document editor inspired by Google Docs.

The application was designed as a full-stack product slice that demonstrates:

- Document creation
- Rich text editing
- File upload workflow
- Document sharing
- Data persistence
- Simple user authentication

The main goal was to prioritize a reliable and usable core workflow instead of attempting to rebuild all Google Docs features.

---

# System Architecture

The application follows a modern full-stack architecture using Next.js App Router.

```
User
 |
 |
Frontend (Next.js + React)
 |
 |
API Routes (Next.js Backend)
 |
 |
Prisma ORM
 |
 |
PostgreSQL Database
```

---

# Technology Choices

## Frontend

### Next.js

Next.js was selected because it provides:

- Full-stack capabilities
- Server-side rendering
- API routes
- Good deployment support


### React

React is used for:

- Interactive UI components
- Editor interactions
- Client-side state management


### Tailwind CSS

Tailwind CSS is used for:

- Responsive layouts
- Fast UI development
- Consistent styling


### Tiptap Editor

Tiptap was chosen for the document editor because it provides:

- Rich text editing
- Extensible formatting
- Good React integration

Supported formatting:

- Bold
- Italic
- Underline
- Headings
- Bullet lists
- Numbered lists

---

# Backend Architecture

The backend is implemented using Next.js API Routes.

API responsibilities include:

## Authentication API

Handles:

- User login
- Creating authentication cookies
- User identification


## Document APIs

Handles:

- Creating documents
- Updating document content
- Saving changes
- Fetching documents


## Sharing API

Handles:

- Sharing documents with users
- Creating document access relationships

---

# Database Design

The application uses PostgreSQL with Prisma ORM.

## User Model

Purpose:

Stores application users.

Example fields:

```
id
name
email
```

Users represent document owners and collaborators.

---

## Document Model

Purpose:

Stores editable documents.

Example fields:

```
id
title
content
ownerId
createdAt
updatedAt
```

Relationships:

- One user can own many documents
- Each document belongs to one owner

---

## Share Model

Purpose:

Stores document access permissions.

Example fields:

```
id
documentId
userId
```

Relationships:

- A document can be shared with multiple users
- A user can access multiple shared documents

---

# Authentication Approach

For this assignment, a lightweight authentication system was implemented.

Instead of building a complete production authentication system, the application uses seeded demo users.

Example users:

- Alice
- Bob

Authentication flow:

1. User selects a demo account
2. Login API verifies the user
3. User ID is stored in cookies
4. Protected pages check the cookie before loading data

This approach keeps the scope appropriate for the assignment timeframe.

---

# Document Editing Flow

The editing workflow:

1. User opens a document
2. Server loads document data from PostgreSQL
3. Content is passed into the Tiptap editor
4. User modifies content
5. Editor sends updates to the API
6. API updates the database
7. Document remains available after refresh

---

# File Upload Flow

The upload workflow:

1. User selects a supported file
2. File is sent using FormData
3. Upload API processes the file
4. Content is converted into a document
5. A new editable document is created
6. User is redirected to the editor

Supported files:

- .txt
- .md
- .docx

---

# Sharing Flow

The sharing workflow:

1. Document owner clicks Share
2. Target user is selected
3. Share relationship is created in database
4. Shared user can see the document under "Shared With Me"

The implementation focuses on demonstrating the sharing concept rather than enterprise permission management.

---

# UI Architecture

The UI is separated into reusable components.

Example:

```
components/

dashboard/
 ├── NewDocumentButton
 └── LogoutButton

editor/
 ├── Editor
 ├── DocumentTitle
 └── ShareButton
```

Benefits:

- Easier maintenance
- Reusable components
- Clear separation of responsibilities

---

# Engineering Tradeoffs

Due to the 4-6 hour assignment limit, some features were intentionally simplified.

## Implemented

- Document creation
- Rich text editing
- Persistence
- File upload
- Sharing workflow
- Demo authentication


## Not Implemented

- Real-time collaboration
- WebSocket synchronization
- Comments
- Version history
- Advanced permissions
- Production authentication


---

# Future Improvements

If additional development time was available, I would implement:

## Real-time Collaboration

Using technologies such as:

- WebSockets
- Live collaboration providers


## Document History

Adding:

- Version snapshots
- Restore previous versions


## Better Permissions

Adding:

- Viewer role
- Editor role
- Owner permissions


## File Processing

Improving uploads with:

- PDF import
- Better DOCX parsing
- File previews


---

# Summary

The architecture prioritizes shipping a complete working product flow:

User → Create Document → Edit → Save → Share → Collaborate

The implementation focuses on reliability, maintainability, and clear product decisions within the assignment constraints.