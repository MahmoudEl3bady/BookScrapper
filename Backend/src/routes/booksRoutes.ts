import express from "express";
import {
  getBooks,
  getBookById,
  searchBooks,
} from "../controllers/booksController.js";

const router = express.Router();

/**
 * @openapi
 * /api/books:
 *   get:
 *     summary: Get a list of books
 *     description: Retrieve a paginated list of books.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of books per page.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 books:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error.
 */
router.get("/", getBooks);

/**
 * @openapi
 * /api/books/search:
 *   get:
 *     summary: Search for books
 *     description: Search for books by title, author, or other attributes.
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: The search query string.
 *     responses:
 *       200:
 *         description: A list of matching books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 books:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Book'
 *       400:
 *         description: Missing search query.
 *       404:
 *         description: No books found matching the search.
 *       500:
 *         description: Internal server error.
 */
router.get("/search", searchBooks);

/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve details of a single book by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the book.
 *     responses:
 *       200:
 *         description: Details of the requested book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 book:
 *                   $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/:id", getBookById);

export default router;
