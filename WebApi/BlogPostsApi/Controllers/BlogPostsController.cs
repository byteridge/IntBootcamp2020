#define Primary
#if Primary
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogPosts.Models;

#region TodoController
namespace Blogposts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly BlogPostContext _context;
        #endregion

        public BlogPostsController(BlogPostContext context)
        {
            _context = context;

            if (_context.BlogPostItems.Count() == 0)
            {
                _context.BlogPostItems.Add(new BlogPostItem { Title = "Item1" });
                _context.SaveChanges();
            }
        }

        #region snippet_GetAll
        // GET: api/BlogPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPostItem>>> GetTodoItems()
        {
            return await _context.BlogPostItems.ToListAsync();
        }

        #region snippet_GetByID
        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPostItem>> GetTodoItem(long id)
        {
            var blogPostItem = await _context.BlogPostItems.FindAsync(id);

            if (blogPostItem == null)
            {
                return NotFound();
            }

            return blogPostItem;
        }
        #endregion
        #endregion

        #region snippet_Create
        // POST: api/BlogPosts
        [HttpPost]
        public async Task<ActionResult<BlogPostItem>> PostBlogPostItem(BlogPostItem item)
        {
            _context.BlogPostItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(BlogPostItem), new { id = item.Id }, item);
        }
        #endregion

        #region snippet_Update
        // PUT: api/BlogPosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPostItem(long id, BlogPostItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        #endregion

        #region snippet_Delete
        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> BlogPostItem(long id)
        {
            var todoItem = await _context.BlogPostItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.BlogPostItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        #endregion
    }
}
#endif