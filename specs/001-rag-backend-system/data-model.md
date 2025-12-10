# Data Model: Physical AI Book Knowledge System

## Entity: Document Chunk
**Description**: A segment of text from the Physical AI book with associated metadata

**Fields**:
- `chunk_id` (string): Unique identifier for the chunk
- `content` (string): The actual text content of the chunk (500-1200 chars)
- `source_file` (string): Path to the original markdown file
- `chapter_name` (string): Name of the book chapter
- `slug` (string): URL-friendly identifier for the chapter
- `chunk_metadata` (object): Additional metadata from frontmatter
- `embedding_vector` (array): Vector representation of the content for similarity search
- `created_at` (datetime): Timestamp when chunk was created
- `updated_at` (datetime): Timestamp when chunk was last updated

**Relationships**: 
- Belongs to a single source document
- Referenced by multiple queries for citations

## Entity: User Query
**Description**: A request from a user with a specific question about the book content

**Fields**:
- `query_id` (string): Unique identifier for the query
- `content` (string): The user's question text
- `mode` (enum): Query mode (full-book, selected-text)
- `selected_text` (string, optional): Text provided by user for selected-text QA
- `timestamp` (datetime): When the query was submitted
- `user_id` (string, optional): Identifier for the user (if applicable)

**Relationships**:
- Associated with multiple retrieved document chunks
- Produces a single query result

## Entity: Retrieved Answer
**Description**: Response to user questions with proper citations to book content

**Fields**:
- `answer_id` (string): Unique identifier for the answer
- `query_id` (string): Reference to the original query
- `content` (string): The generated answer text
- `citations` (array): List of source chunks used in the answer
- `confidence_score` (float): Confidence level in the answer accuracy
- `timestamp` (datetime): When the answer was generated
- `tokens_used` (int): Number of tokens in the generated response

**Relationships**:
- Belongs to a single user query
- References multiple document chunks for citations

## Entity: Selected Text Query
**Description**: User question with provided text content for context-limited answering

**Fields**:
- `query_id` (string): Unique identifier for the query
- `selected_text` (string): Text provided by user for context
- `question` (string): The user's question about the selected text
- `timestamp` (datetime): When the query was submitted

**Relationships**:
- Produces a single query result
- Does not reference document chunks from the main collection

## Validation Rules

### Document Chunk
- `content` must be between 500 and 1200 characters
- `source_file` must be a valid path in `/physical-ai-book/docs`
- `embedding_vector` must be properly formatted for Qdrant
- `chunk_id` must be unique

### User Query
- `content` must not be empty
- `mode` must be either 'full-book' or 'selected-text'
- If `mode` is 'selected-text', `selected_text` must not be null

### Retrieved Answer
- `citations` must reference valid document chunks
- `confidence_score` must be between 0 and 1
- Must be associated with a valid user query

## State Transitions

### Document Chunk
- `created` → Initial state when document is first chunked
- `indexed` → When chunk is stored in Qdrant vector database
- `updated` → When source document changes and chunk is regenerated
- `archived` → When source document is removed

### User Query
- `received` → Initial state when query is submitted
- `processing` → During RAG pipeline execution
- `completed` → When answer is generated
- `error` → If query processing fails