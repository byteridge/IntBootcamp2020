using Microsoft.EntityFrameworkCore;

namespace BlogPosts.Models
{
    public class BlogPostContext : DbContext
    {
        public BlogPostContext(DbContextOptions<BlogPostContext> options)
            : base(options)
        {
        }

        public DbSet<BlogPostItem> BlogPostItems { get; set; }
    }
}